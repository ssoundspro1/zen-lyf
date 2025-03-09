/**
 * Icon Fixer Script
 * 
 * This script scans the codebase for direct React icon usage and replaces it
 * with the IconWrapper component approach to fix TypeScript compatibility issues.
 * 
 * Usage:
 * 1. Make sure you have the IconWrapper component implemented
 * 2. Run with: node src/scripts/fix-icons.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const PAGES_DIR = path.resolve(__dirname, '../pages');
const COMPONENTS_DIR = path.resolve(__dirname, '../components');
const ICON_WRAPPER = 'IconWrapper';
const ICON_WRAPPER_IMPORT = "import IconWrapper from '../components/IconWrapper';";

// Regular expressions for finding icon usages
const DIRECT_ICON_REGEX = /<(Fa[A-Za-z]+|Fi[A-Za-z]+|Md[A-Za-z]+|Si[A-Za-z]+|Gi[A-Za-z]+|Ri[A-Za-z]+|Im[A-Za-z]+|Ai[A-Za-z]+)(\s+[^>]*?)?(\/>|>\s*<\/\1>)/g;
const ICON_WITH_PROPS_REGEX = /<(Fa[A-Za-z]+|Fi[A-Za-z]+|Md[A-Za-z]+|Si[A-Za-z]+|Gi[A-Za-z]+|Ri[A-Za-z]+|Im[A-Za-z]+|Ai[A-Za-z]+)\s+([^>]+?)(\/?>)/g;
const ICON_IMPORTS_REGEX = /import\s+{([^}]+)}\s+from\s+['"]react-icons\/([a-z]+)['"]/g;

// Track all imported icons to add to declarations
const allIconsUsed = new Set();

/**
 * Process a single file to fix icon usages
 */
function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let hasChanged = false;
    let importsToAdd = new Set();
    
    // Extract all icon imports
    const iconImports = [];
    let importMatch;
    while ((importMatch = ICON_IMPORTS_REGEX.exec(content)) !== null) {
      const iconNames = importMatch[1].split(',').map(name => name.trim());
      const iconPrefix = importMatch[2];
      
      iconNames.forEach(iconName => {
        allIconsUsed.add(`${iconPrefix}:${iconName}`);
        iconImports.push(iconName);
      });
    }
    
    // Replace direct icon usage with IconWrapper
    content = content.replace(DIRECT_ICON_REGEX, (match, iconName, props = '', endTag) => {
      hasChanged = true;
      importsToAdd.add(iconName);
      
      // Extract props if any
      const propString = extractProps(props);
      
      return `<${ICON_WRAPPER} icon={${iconName}} ${propString}/>`;
    });
    
    // Replace icon usage with props
    content = content.replace(ICON_WITH_PROPS_REGEX, (match, iconName, props, endTag) => {
      hasChanged = true;
      importsToAdd.add(iconName);
      
      // Extract size prop if present
      let sizeValue = 24; // Default size
      const sizeMatch = props.match(/size=["']?(\d+)["']?/);
      if (sizeMatch) {
        sizeValue = sizeMatch[1];
        // Remove size from props
        props = props.replace(/size=["']?\d+["']?/, '').trim();
      }
      
      // Extract color prop if present
      let colorValue = '';
      const colorMatch = props.match(/color=["']([^"']+)["']/);
      if (colorMatch) {
        colorValue = `color="${colorMatch[1]}"`;
        // Remove color from props
        props = props.replace(/color=["'][^"']+["']/, '').trim();
      }
      
      // Clean up remaining props
      const cleanedProps = props.trim();
      
      return `<${ICON_WRAPPER} icon={${iconName}} size={${sizeValue}} ${colorValue} ${cleanedProps}${endTag === '/>' ? '/>' : '>'}`;
    });
    
    // Add IconWrapper import if needed
    if (hasChanged && !content.includes(ICON_WRAPPER_IMPORT)) {
      // Find position after the last import
      const lastImportIndex = content.lastIndexOf('import');
      if (lastImportIndex !== -1) {
        const importEndIndex = content.indexOf('\n', lastImportIndex) + 1;
        content = 
          content.substring(0, importEndIndex) + 
          ICON_WRAPPER_IMPORT + '\n' + 
          content.substring(importEndIndex);
      }
    }
    
    // Write changes back to the file if needed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed icons in ${path.basename(filePath)}`);
    } else {
      console.log(`ℹ️ No changes needed in ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

/**
 * Extract props from a props string
 */
function extractProps(propsString) {
  if (!propsString) return '';
  
  // Extract size if present
  let sizeValue = 24; // Default size
  const sizeMatch = propsString.match(/size=["']?(\d+)["']?/);
  if (sizeMatch) {
    sizeValue = sizeMatch[1];
    // Remove size from props
    propsString = propsString.replace(/size=["']?\d+["']?/, '').trim();
  }
  
  return `size={${sizeValue}} ${propsString.trim()}`;
}

/**
 * Update or create the react-icons.d.ts file with all found icons
 */
function updateTypeDeclarations() {
  const declarationsPath = path.resolve(__dirname, '../react-icons.d.ts');
  
  // Group icons by prefix
  const iconsByPrefix = {};
  allIconsUsed.forEach(iconKey => {
    const [prefix, name] = iconKey.split(':');
    if (!iconsByPrefix[prefix]) {
      iconsByPrefix[prefix] = new Set();
    }
    iconsByPrefix[prefix].add(name);
  });
  
  // Generate content
  let content = `// This file fixes TypeScript compatibility issues with react-icons
// Auto-generated by fix-icons.js script

import { IconType } from 'react-icons';
import { SVGAttributes, ReactElement } from 'react';

`;
  
  Object.entries(iconsByPrefix).forEach(([prefix, icons]) => {
    content += `declare module 'react-icons/${prefix}' {\n`;
    
    icons.forEach(icon => {
      content += `  export const ${icon}: IconType;\n`;
    });
    
    content += `}\n\n`;
  });
  
  fs.writeFileSync(declarationsPath, content, 'utf8');
  console.log(`✅ Updated type declarations in react-icons.d.ts with ${allIconsUsed.size} icons`);
}

/**
 * Main function
 */
function main() {
  // Process all TSX files in pages directory
  const pageFiles = glob.sync(`${PAGES_DIR}/**/*.tsx`);
  pageFiles.forEach(processFile);
  
  // Process all TSX files in components directory
  const componentFiles = glob.sync(`${COMPONENTS_DIR}/**/*.tsx`);
  componentFiles.forEach(processFile);
  
  // Update type declarations
  updateTypeDeclarations();
  
  console.log('\n✅ Icon fixing complete!');
  console.log('✅ Please rebuild the application now using: npm run build');
}

// Run the script
main(); 
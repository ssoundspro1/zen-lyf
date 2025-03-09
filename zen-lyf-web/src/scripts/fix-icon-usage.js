#!/usr/bin/env node

/**
 * Fix Icon Usage Script
 * 
 * This script scans all .tsx files in the src directory and replaces direct icon usage
 * with the IconWrapper component to fix TypeScript errors.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Regular expressions for finding icon usage
const DIRECT_ICON_USAGE_REGEX = /<(Fa|Fi|Si|Ai|Bi|Bs|Ci|Di|Gi|Go|Gr|Hi|Im|Io|Md|Pi|Ri|Ti|Vsc|Wi)[A-Za-z]+ (?:size=\{(\d+)\}|color=['"]([^'"]+)['"]|[^>])*\/>/g;
const DIRECT_ICON_WITH_CHILDREN_REGEX = /<(Fa|Fi|Si|Ai|Bi|Bs|Ci|Di|Gi|Go|Gr|Hi|Im|Io|Md|Pi|Ri|Ti|Vsc|Wi)[A-Za-z]+(?:size=\{(\d+)\}|color=['"]([^'"]+)['"]|[^>])*>(.*?)<\/(Fa|Fi|Si|Ai|Bi|Bs|Ci|Di|Gi|Go|Gr|Hi|Im|Io|Md|Pi|Ri|Ti|Vsc|Wi)[A-Za-z]+>/g;

// Function to execute shell commands
function executeCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    return null;
  }
}

// Function to find all .tsx files in the src directory
function findTsxFiles() {
  const result = executeCommand('find src -name "*.tsx" | grep -v "node_modules"');
  return result ? result.trim().split('\n') : [];
}

// Function to check if a file imports IconWrapper
function hasIconWrapperImport(content) {
  return content.includes('import IconWrapper from') || 
         content.includes('import { IconWrapper } from') || 
         content.includes('import IconWrapper');
}

// Function to add IconWrapper import if needed
function addIconWrapperImport(content) {
  if (!hasIconWrapperImport(content)) {
    // Find the last import statement
    const lastImportIndex = content.lastIndexOf('import ');
    let endOfImports = content.indexOf('\n', lastImportIndex);
    
    if (endOfImports !== -1) {
      return content.slice(0, endOfImports + 1) + 
             "import IconWrapper from 'components/IconWrapper';\n" + 
             content.slice(endOfImports + 1);
    }
  }
  return content;
}

// Function to replace direct icon usage with IconWrapper
function replaceIconUsage(content) {
  // Replace self-closing icon tags
  content = content.replace(DIRECT_ICON_USAGE_REGEX, (match) => {
    // Extract icon component name
    const iconName = match.match(/<(Fa|Fi|Si|Ai|Bi|Bs|Ci|Di|Gi|Go|Gr|Hi|Im|Io|Md|Pi|Ri|Ti|Vsc|Wi)[A-Za-z]+/)[0].slice(1);
    
    // Extract size if present
    const sizeMatch = match.match(/size=\{(\d+)\}/);
    const size = sizeMatch ? sizeMatch[1] : null;
    
    // Extract color if present
    const colorMatch = match.match(/color=['"]([^'"]+)['"]/);
    const color = colorMatch ? colorMatch[1] : null;
    
    // Build IconWrapper component
    let result = `<IconWrapper icon={${iconName}}`;
    if (size) result += ` size={${size}}`;
    if (color) result += ` color="${color}"`;
    result += ' />';
    
    return result;
  });
  
  // Replace icon tags with children
  content = content.replace(DIRECT_ICON_WITH_CHILDREN_REGEX, (match, prefix, size, color, children, suffix) => {
    // Extract icon component name
    const iconName = prefix + suffix;
    
    // Build IconWrapper component
    let result = `<IconWrapper icon={${iconName}}`;
    if (size) result += ` size={${size}}`;
    if (color) result += ` color="${color}"`;
    result += ' />';
    
    return result;
  });
  
  return content;
}

// Main function to fix icon usage in all files
async function fixIconUsage() {
  console.log('🔍 Scanning for files with direct icon usage...');
  
  const files = findTsxFiles();
  console.log(`Found ${files.length} .tsx files to check.`);
  
  let fixedFiles = 0;
  
  for (const file of files) {
    try {
      const filePath = path.resolve(file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has direct icon usage
      if (DIRECT_ICON_USAGE_REGEX.test(content) || DIRECT_ICON_WITH_CHILDREN_REGEX.test(content)) {
        console.log(`Fixing icon usage in ${file}...`);
        
        // Add IconWrapper import if needed
        let updatedContent = addIconWrapperImport(content);
        
        // Replace direct icon usage with IconWrapper
        updatedContent = replaceIconUsage(updatedContent);
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        
        fixedFiles++;
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }
  
  console.log(`✅ Fixed icon usage in ${fixedFiles} files.`);
}

// Execute the fix
try {
  fixIconUsage();
  console.log('✅ Icon usage fix completed!');
} catch (error) {
  console.error('❌ Error during icon usage fix:', error.message);
  process.exit(1);
} 
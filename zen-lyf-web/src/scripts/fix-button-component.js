#!/usr/bin/env node

/**
 * Fix Header Button Component Script
 * 
 * This script patches the Header.tsx file to fix TypeScript errors related to the Button component.
 * It converts styled(Link) to a more flexible component that works with both links and buttons.
 */

const fs = require('fs');
const path = require('path');

// Function to patch the Header.tsx file
function patchHeaderFile() {
  console.log('🔧 Patching Header.tsx file...');
  
  // Path to the Header component
  const headerFilePath = path.resolve(__dirname, '../components/Header.tsx');
  
  // Check if the file exists
  if (!fs.existsSync(headerFilePath)) {
    console.error('❌ Header.tsx file not found at:', headerFilePath);
    return false;
  }
  
  // Read the current file
  let content = fs.readFileSync(headerFilePath, 'utf8');
  
  // Define the pattern to look for (Button component as styled(Link))
  const buttonComponentPattern = /const Button = styled\(Link\)<{ primary\?: boolean }>`[\s\S]*?`/;
  
  // Check if the pattern exists
  if (!buttonComponentPattern.test(content)) {
    console.warn('⚠️ Button component pattern not found in Header.tsx');
    return false;
  }
  
  // Define the replacement with the fixed Button component
  const buttonComponentReplacement = `// Common button styles
const buttonStyles = (props) => \`
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  
  \${props.primary ? \`
    background: var(--primary);
    color: white;
    
    &:hover {
      background: #4338ca;
      color: white;
    }
  \` : \`
    background: transparent;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-primary);
    }
  \`}
\`;

// Button component for links
const LinkButton = styled(Link)<{ primary?: boolean }>\`
  \${props => buttonStyles(props)}
\`;

// Button component for regular buttons
const RegularButton = styled.button<{ primary?: boolean }>\`
  \${props => buttonStyles(props)}
  border: \${props => props.primary ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
\`;

// Combined Button component that renders either LinkButton or RegularButton
const Button = ({ as, to, ...props }) => {
  if (as === "button") {
    return <RegularButton {...props} />;
  }
  return <LinkButton to={to || "/"} {...props} />;
}`;
  
  // Replace the Button component with the fixed version
  content = content.replace(buttonComponentPattern, buttonComponentReplacement);
  
  // Write the updated content back to the file
  fs.writeFileSync(headerFilePath, content, 'utf8');
  
  console.log('✅ Header.tsx patched successfully!');
  return true;
}

// Execute the patch
try {
  const success = patchHeaderFile();
  if (success) {
    console.log('✅ Button component fix completed!');
    process.exit(0);
  } else {
    console.error('❌ Button component fix failed!');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error during patch process:', error.message);
  process.exit(1);
} 
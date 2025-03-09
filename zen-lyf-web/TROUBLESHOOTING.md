# ZEN-LYF Troubleshooting Guide

## Common Issues and Solutions

### TypeScript Icon Compatibility Issues

**Issue**: TypeScript errors of the form `'IconComponent' cannot be used as a JSX component. Its return type 'ReactNode' is not a valid JSX element.`

This error occurs because of a compatibility issue between TypeScript and the react-icons library. The error appears when trying to use icon components directly in JSX.

**Solution**:

1. **Use the IconWrapper Component**:

   The application now includes an `IconWrapper` component that wraps react-icons components to fix the TypeScript compatibility issue. Replace direct icon usage:

   ```jsx
   // Before (error-producing)
   <FaIcon />

   // After (fixed)
   <IconWrapper icon={FaIcon} size={24} />
   ```

2. **Run the Icon Fixer Script**:

   We've included a script to automatically update icon usage across the application:

   ```bash
   # Install glob dependency if needed
   npm install glob

   # Run the script
   node src/scripts/fix-icons.js
   ```

3. **Update React-Icons Declarations**:

   Ensure the `src/react-icons.d.ts` file includes all the icon types you're using. The script above will update this file automatically.

### Build Process Errors

**Issue**: Application fails to start with `ENOENT: no such file or directory, stat '/node_modules/.cache/tsconfig.tsbuildinfo'` error.

**Solution**:

1. **Clear the Cache**:

   ```bash
   # Remove the node_modules/.cache directory
   rm -rf node_modules/.cache
   ```

2. **Reinstall Dependencies**:

   ```bash
   # Reinstall all dependencies
   npm ci
   # Or
   npm install
   ```

3. **Modify TypeScript Configuration**:

   If the issue persists, try modifying your tsconfig.json to disable incremental compilation:

   ```json
   {
     "compilerOptions": {
       // ... other options
       "incremental": false
     }
   }
   ```

### TypeScript Module Resolution Issues

**Issue**: TypeScript errors about missing type definitions for modules like 'assets', 'components', etc.

**Solution**:

1. **Create Path Aliases**:

   Update your tsconfig.json to include path mappings:

   ```json
   {
     "compilerOptions": {
       // ... other options
       "baseUrl": "src",
       "paths": {
         "@components/*": ["components/*"],
         "@assets/*": ["assets/*"],
         "@contexts/*": ["contexts/*"],
         // ... other paths as needed
       }
     }
   }
   ```

2. **Fix Type Declaration References**:

   Create a src/global.d.ts file with:

   ```typescript
   // Declare modules to suppress errors
   declare module '*.svg';
   declare module '*.png';
   declare module '*.jpg';
   declare module '*.jpeg';
   declare module '*.gif';
   declare module '*.bmp';
   declare module '*.tiff';
   ```

## Complete Fix Workflow

If you're experiencing multiple issues, follow this workflow for a comprehensive fix:

1. **Install Required Dependencies**:

   ```bash
   npm install glob
   ```

2. **Fix Icon Issues**:

   ```bash
   node src/scripts/fix-icons.js
   ```

3. **Clear Cache and Reinstall Dependencies**:

   ```bash
   rm -rf node_modules/.cache
   npm install
   ```

4. **Restart Development Server**:

   ```bash
   npm start
   ```

If issues persist after following these steps, contact the development team for additional assistance.

## Testing After Fixes

After applying the fixes above, verify the application works by:

1. **Checking the Home Page**: Ensure all icons are visible and functional
2. **Testing Navigation**: Verify all navigation links work correctly
3. **Testing Responsive Design**: Check layouts at different screen sizes
4. **Testing Forms**: Verify login and signup forms function correctly
5. **Testing API Documentation**: Ensure all sections render with proper formatting

Update the TESTING_REPORT.md file with your findings to track progress. 
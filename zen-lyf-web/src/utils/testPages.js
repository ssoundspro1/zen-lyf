/**
 * testPages.js
 * Utility functions for testing page loads and links
 */

/**
 * Tests all pages in the application to verify they load without errors
 * Run this in the browser console while on the home page
 */
const testAllPages = async () => {
  // List of all routes in the application
  const routes = [
    '/',
    '/about',
    '/login',
    '/signup',
    '/dashboard',
    '/medical-records',
    '/medical-record-analysis',
    '/wearable-demo',
    '/features',
    '/contact',
    '/hospital-login',
    '/hospital-dashboard',
    '/pricing',
    '/patient-solutions',
    '/hospital-solutions',
    '/support',
    '/privacy',
    '/terms',
    '/mobile-app',
    '/ai-technology',
    '/integrations',
    '/success-stories',
    '/compliance',
    '/api-documentation'
  ];

  const results = {};

  // Test each route
  for (const route of routes) {
    try {
      console.log(`Testing route: ${route}`);
      
      // Open the route in a new tab
      const newTab = window.open(window.location.origin + route, '_blank');
      
      // Wait a bit to ensure page has started loading
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if the tab is still open and not showing an error page
      if (newTab && !newTab.closed) {
        try {
          // Try to access the document to see if it loaded
          const title = newTab.document.title;
          results[route] = {
            status: 'Success',
            title,
            timestamp: new Date().toISOString()
          };
        } catch (err) {
          results[route] = {
            status: 'Error',
            error: 'Cross-origin error or page failed to load',
            timestamp: new Date().toISOString()
          };
        }
        
        // Close the tab
        newTab.close();
      } else {
        results[route] = {
          status: 'Error',
          error: 'Page failed to open',
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      results[route] = {
        status: 'Error',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
    
    // Short delay between tests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.table(results);
  return results;
};

/**
 * Tests all links on the current page
 * Run this in the browser console on any page
 */
const testPageLinks = () => {
  const links = document.querySelectorAll('a');
  const results = {};

  links.forEach((link, index) => {
    const href = link.getAttribute('href');
    const text = link.textContent.trim() || 'No text';
    const isExternal = href && (href.startsWith('http') || href.startsWith('https'));
    
    results[`Link ${index + 1}`] = {
      href: href || 'No href',
      text: text.length > 30 ? text.substring(0, 30) + '...' : text,
      type: isExternal ? 'External' : 'Internal',
      element: link
    };
  });

  console.table(results);
  return results;
};

/**
 * Tests forms on the current page
 * Run this in the browser console on pages with forms
 */
const testForms = () => {
  const forms = document.querySelectorAll('form');
  const results = {};

  forms.forEach((form, index) => {
    const inputs = form.querySelectorAll('input, select, textarea');
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    
    results[`Form ${index + 1}`] = {
      id: form.id || 'No ID',
      inputCount: inputs.length,
      hasSubmitButton: !!submitBtn,
      element: form
    };
  });

  console.table(results);
  return results;
};

// Export the functions if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    testAllPages,
    testPageLinks,
    testForms
  };
}

// Log a message to indicate the script has loaded
console.log('Page testing utilities loaded. Available functions: testAllPages(), testPageLinks(), testForms()'); 
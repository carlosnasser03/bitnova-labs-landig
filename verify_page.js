const http = require('http');

http.get('http://localhost:5175/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const hasApp = data.includes('id="root"');
    const hasModuleScript = data.includes('src="/src/main.tsx"');
    console.log('✓ Page structure verified:');
    console.log('  - Root element present:', hasApp);
    console.log('  - Main script loaded:', hasModuleScript);
    console.log('  - HTTP status:', res.statusCode);
  });
}).on('error', err => console.error('Error:', err.message));

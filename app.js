const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // The port where the frontend web page will run locally

// Serve static files directly from the current directory (where index.html is)
app.use(express.static(__dirname));

// Route to serve the index.html file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Frontend server running at http://localhost:${port}`);
    // This console log is just for local development, actual data goes to n8n webhook
    console.log(`All chat data will be sent to your n8n.cloud webhook: https://komjetlili.app.n8n.cloud/webhook/40709c1e-75c2-46c5-a78e-7406ba7f9af9`);
});
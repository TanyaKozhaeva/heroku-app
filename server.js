const express = require('express');
const http = require('http'); //-
const path = require('path');

//const api = require('.server/routes/api'); //-
const app = express();

// make express look in the public directory for assets (css/js/img)
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3001';
app.set('port', port); //-

const server = http.createServer(app);
server.listen(port, () => console.log('Running'))
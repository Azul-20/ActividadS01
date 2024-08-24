const express = require('express');
const app = express();
const routes = require('./route.js');
const path = require('path');
const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(port, () => {
    console.log('Server on port ${3030}')
});
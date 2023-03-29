'use strict';

const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Testing CI \n');
});


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);

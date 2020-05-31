// para usar basta dar um ng build --prod && node server.js
const path = require('path');
const express = require('express');
const app = express();


// Serve static files....
app.use(express.static(__dirname + '/dist/'));

// Send all requests to index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


// default Heroku PORT
app.listen(process.env.PORT || 3002, () => console.log('Escutando na porta: ', process.env.PORT || 3000));
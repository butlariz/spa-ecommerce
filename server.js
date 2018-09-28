const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

var cors = require('cors');

// use it before all route definitions
app.use(cors());

app.use("/dist", express.static(__dirname + '/dist'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});


app.listen(port);
console.log("server started on port " + port);
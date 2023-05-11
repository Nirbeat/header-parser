require('dotenv').config();
 const express = require('express');
 const app = express();
 const PORT = process.env.PORT ||3000;

// enable CORS
 const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204


app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




app.listen(POrt, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

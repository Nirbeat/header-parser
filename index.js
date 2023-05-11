require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// enable CORS
const cors = require('cors');

app.enable('trust proxy')
app.use(cors({ optionsSuccessStatus: 200 }));


app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res, next) => {

  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })

})



app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);
});

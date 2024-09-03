// var path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();

// const cors = require('cors');

// app.use(cors());
// app.use(bodyParser.json());

// console.log(__dirname);

// // Variables for url and api key


// app.get('/', function (req, res) {
//     res.send("This is the server API page, you may access its services via the client app.");
// });


// // POST Route



// // Designates what port the app will listen to for incoming requests
// app.listen(8000, function () {
//     console.log('Example app listening on port 8000!');
// });


const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.static('dist'));
app.use(express.json());

const PORT = 8000;

app.listen(PORT, function () {
  console.log(`Server is running on localhost:${PORT}`);
});

app.post('/api', async (req, res) => {
  const { url } = req.body;
  const response = await callNLPApi(url); // Function to call external API
  res.send(response);
});

const callNLPApi = async (url) => {
  // Here you will call the actual external NLP API using fetch or axios.
  // Example (replace with actual API):
  const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`, {
    method: 'GET',
    headers: {
      'x-api-key': process.env.API_KEY,
    },
  });
  const data = await response.json();
  return data;
};

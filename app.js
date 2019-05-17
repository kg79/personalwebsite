const express = require('express');
const app = express();
const path = require('path');



app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'))

const PORT = process.env.PORT || 8083;

app.get('/resume', (req, res) => {
	res.sendFile(__dirname + '/public/resume.html');
})

app.get('/index', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})

app.get('/bio', (req, res) => {
	res.sendFile(__dirname + '/public/bio.html');
})

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/public/contact.html');
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

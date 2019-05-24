const express = require('express');
const https = require('https');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
// dont forget to set url constant for Mongo
// or news api key
const url = '';
const newsApiKey = '';
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'))

const PORT = process.env.PORT || 8084;

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

app.post('/sendMessage', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("personalmessages");
	        dbo.collection("mymessages").insertOne({
			name:req.body.name,
			title:req.body.title,
			email:req.body.email,
			org:req.body.org,
			message:req.body.message
            	});
     		res.end('message sent'); 
    });
});

app.get('/getNews', (req, res) => {
https.get('newsApiKey',
(resp) => {
let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });

 resp.on('end', () => {
   let stories = JSON.parse(data);
	res.render('index', {stories});
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

});

app.listen(PORT, '10.0.0.106', () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

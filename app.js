const express = require('express');

const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//const url = 'MONGO MLAB URL';

app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'))


const PORT = process.env.PORT || 8080;

app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})

app.get('/projects', (req, res) => {
	res.sendFile(__dirname + '/public/projects.html');
})

app.get('/music', (req, res) => {
	res.sendFile(__dirname + '/public/music.html');
})

app.get('/resume', (req, res) => {
	res.sendFile(__dirname + '/public/resume.html');
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
     		res.end('<a href="/">message sent</a>'); 
    });
});



app.listen(PORT, () => {
  console.log(`${IP}:${PORT}`);
});

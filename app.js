const express = require('express');
const app = express();
const path = require('path');



app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'))

const PORT = process.env.PORT || 8083;




app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

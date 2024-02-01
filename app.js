var express = require('express');
const path = require('path')
var app = express();
const port = 3000
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port, () => {
  console.log('__dirname')
})
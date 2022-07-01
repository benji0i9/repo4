var express = require('express');
var path = require('path')

var app = new express();
var port = 4000;

app.listen(4000, () => {
    console.log('Server started on port 4000...')
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/component/contact.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/component/home.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/component/about.html'));
});
app.get("/", (req, res) => {
    res.status(401).sendFile(path.join(__dirname + '/component/error.html'));
})
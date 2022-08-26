const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());


posts = [
    {id: 1, post: "Found this new app called Fakebook", comment: ""},
    {id: 2, post: "Hello everyone ", comment: ""}
]


app.get('/', (req, res) => {
    res.send(posts);
})
















module.exports = app;

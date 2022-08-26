const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());


posts = [
    {id: 1, post: "Found this new app called Fakebook"},
    {id: 2, post: "Hello everyone "}
]


app.get('/', (req, res) => {
    res.send(posts);
})
















module.exports = app;

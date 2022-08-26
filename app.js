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

app.post('/', (req, res) => {
    const newPostContent = req.body.name
    const newId = posts[posts.length - 1].id + 1
    const newPost = { id: newId, post: newPostContent, comments: "" }
    res.status(201).send(newPost)
    posts.push(newPost)
})














module.exports = app;

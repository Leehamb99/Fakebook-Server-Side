const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());


let posts = [
    {id: 1, post: "Found this new app called Fakebook", comment:  "This is cool"},
    {id: 2, post: "Hello everyone ", comment: "Hello ID 2"}
    
]


app.get('/', (req, res) => {
    res.send(posts);
})


app.get("/:id", (req, res) => {

    try {
        const postId = parseInt(req.params.id)

        const selectedPost = posts.find(posts => posts.id === postId)
        if (!selectedPost) {
            throw new Error('This post is not accessible')
        }
        res.send(selectedPost)

    } catch(err) {
        res.status(404).send({message: err.message })
    }

})

app.get("/:id/comments", (req, res) => {

    try {
        const postId = parseInt(req.params.id)
        
        const selectedPost = posts.find(posts => posts.id === postId)
        if (!selectedPost) {
            throw new Error('This post is not accessible')
        }
        res.send(selectedPost.comment)

    } catch(err) {
        res.status(404).send({message: err.message })
    }
}) 
        

app.put("/:id/comments", (req, res) => {
    
    const postId = parseInt(req.params.id)
    let newComment = req.body.comment
    

    
})










module.exports = app;

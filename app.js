const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());


let posts = [
    {id: 1, post: "Found this new app called Fakebook",smiley_count: 0, like_count: 0, dislike_count: 0, Comment_1: "This is cool"},
    {id: 2, post: "Hello everyone ",smiley_count: 0, like_count: 0, dislike_count: 0,Comment_1: "Hello ID 2"}  
]


app.get('/', (req, res) => {
    res.send(posts);
})

app.post('/', (req, res) => {
    const newPostContent = req.body.post
    const newId = posts[posts.length - 1].id + 1
    const newPost = { id: newId, post: newPostContent, smiley_count: 0, like_count: 0, dislike_count: 0 }
    res.status(201).send(newPost)
    posts.push(newPost)
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
        

app.post("/:id", (req, res) => {
    console.log(req.body)
    const postId = parseInt(req.params.id);
    let newComment = req.body.comment;
    commentCount = "Comment_"+ (Object.keys(posts[postId - 1]).length - 1).toString();
    posts[postId - 1] = {...posts[postId -1], [commentCount]: newComment}
    commentCount++ 
    res.status(201).send(posts[postId - 1]);    
})


app.patch(":/id", (req, res) => {
    const postId = parseInt(req.params.id);
    changes = req.body
    Object.assign(posts[postId - 1], changes)
    res.status(200).send(posts[postId - 1]);
})



app.delete("/:id", (req, res) => {
    const idToDelete = parseInt(req.params.id)
    posts.forEach(post => {
        if (post.id === idToDelete) {
            posts.splice(post, 1)
        }
    });
    res.status(204).end()
})

app.delete('/', (req, res) => {
    while (posts.length) posts.pop()
    res.status(204).end()
})




module.exports = app;

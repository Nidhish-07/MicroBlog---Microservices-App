
import express from 'express'


const app = express()

app.use(express.json())

const commentsById = {}

app.get('/posts/:id/comments', async (req, res) => {
    res.send(commentsById[req.params.id])
})
app.post('/posts/:id/comments', async (req, res) => {
    const randomId = Math.random();


    const { content } = req.body;

    const comments = commentsById[req.params.id] || []

    comments.push({ id: randomId, content })
    commentsById[req.params.id] = comments

    res.status(201).send(comments)
})

app.listen(3000, () => {
    console.log("Server listening on http://localhost:3000");
})
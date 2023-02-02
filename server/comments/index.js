
import express from 'express'
import cors from 'cors'


const app = express()


app.use(express.json())
app.use(cors())

const commentsById = {}

app.get('/posts/:id/comments', async (req, res) => {
    res.send(commentsById[req.params.id])

})
app.post('/posts/:id/comments', async (req, res) => {

    try {

        const randomId = Math.random();


        const { content } = req.body;

        const comments = commentsById[req.params.id] || []

        comments.push({ id: randomId, content })
        commentsById[req.params.id] = comments

        res.status(201).send(comments)
    } catch (error) {
        console.log(error);
    }
})

app.listen(4001, () => {
    console.log("Server listening on http://localhost:3000");
})
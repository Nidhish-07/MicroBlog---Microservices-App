import express from "express"

const app = express()

app.use(express.json())


const posts = {}


app.get('/posts', async (req, res) => {
    res.send(posts)
})


app.post('/posts', async (req, res) => {
    const id = Math.random()

    const { title } = req.body

    posts[id] = { id, title }

    res.status(201).send(posts[id])
})

app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
})
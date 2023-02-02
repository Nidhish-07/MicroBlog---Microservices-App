import express from "express"
import cors from "cors"
import axios from "axios"

const app = express()

app.use(express.json())
app.use(cors())


const posts = {}


app.get('/posts', async (req, res) => {
    res.send(posts)

})


app.post('/posts', async (req, res) => {
    const id = Math.random()

    const { title } = req.body

    posts[id] = { id, title }
    await axios.post("http://localhost:4005/events", { type: "PostCreated", data: { id, title } })

    res.status(201).send(posts[id])
})

app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
})
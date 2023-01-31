import React from 'react'
import axios from 'axios'
import PostCard from '../ui/PostCard'

const PostList = () => {

  const [posts, setPosts] = React.useState({})


  const fetchPosts = async () => {

    const res = await axios.get('http://localhost:4000/posts')

    const posts = res.data

    setPosts(posts)
  }
  React.useEffect(() => {


    fetchPosts()
  }, [])

  // console.log(posts);


  return (
    <div className='flex flex-wrap'>
      {Object.values(posts).map(post => (<PostCard key={post.id} title={post.title} id={post.id}/>))}
    </div>
  )
}

export default PostList
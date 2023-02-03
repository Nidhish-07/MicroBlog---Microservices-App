import React from 'react'
import axios from 'axios'

const CommentList = (props) => {

  const [comments, setComments] = React.useState([]);


  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${props.postId}/comments`)

    const comments = res.data;

    setComments(comments)
  }
  React.useEffect(() => {
    fetchComments()
  }, [])
  return (
    <div>
      <ul className='list-decimal'>

        {Object.values(comments).map(comment => {
          return <li key={comment.id}>
            {comment.content}
          </li>
        })}
      </ul>
    </div>
  )
}

export default CommentList
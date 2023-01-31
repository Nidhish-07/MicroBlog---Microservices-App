import React from 'react'

import axios from 'axios'

const CommentCreate = (props) => {

  const [comment, setComment] = React.useState('');

  const submitHandler = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:3000/posts/' + props.postId + '/comments', { comment })
    setComment('')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="comment" className='text-base font-medium'>New Comment: </label>
          <input type="text" id='comment' value={comment} onChange={(e) => { setComment(e.target.value) }} />
        </div>
        <button className='text-lg font-semibold bg-blue-500 text-white p-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
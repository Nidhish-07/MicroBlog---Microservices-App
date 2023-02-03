import React from 'react'

import axios from 'axios'

const CommentCreate = (props) => {

  const [content, setContent] = React.useState('');

  const submitHandler = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${props.postId}/comments`, { content })
    setContent('')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="content" className='text-base font-medium'>New content: </label>
          <input type="text" id='content' value={content} onChange={(e) => { setContent(e.target.value) }} />
        </div>
        <button className='text-lg font-semibold bg-blue-500 text-white p-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
import React from 'react'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'

const App = () => {
  return (
    <div className='min-h-[100vh] flex items-center flex-col'>
      <h1 className='text-2xl font-bold m-2'>Create Post</h1>
      <PostCreate />

      <hr />

      <PostList />
    </div>
  )
}

export default App
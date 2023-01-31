import React from 'react'
import axios from 'axios'

const PostCreate = () => {

    const [title, setTitle] = React.useState("")

    const submitHandler = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', { title })
        setTitle('')
    }
    return (
        <div>

            <form className='m-2' onSubmit={submitHandler}>
                <div >
                    <label htmlFor="title" className='text-lg font-medium uppercase'>Title</label>
                    <input type="text" placeholder='Title' id='title' className='block border border-black p-1' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>

                <button className='p-4 bg-blue-500 rounded-md text-white font-semibold text-lg w-full mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
import React from 'react'

const PostCard = (props) => {
    return (
        <div key={props.id} className="w-1/3 mb-5 border p-1 ">
            <div>
                <h3 className='font-semibold text-lg'>{props.title}</h3>
            </div>
        </div>
    )
}

export default PostCard
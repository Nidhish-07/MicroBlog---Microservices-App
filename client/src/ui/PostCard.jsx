import React from 'react'
import CommentCreate from '../components/CommentCreate'

const PostCard = (props) => {
    return (
        <div key={props.id} className="w-1/3 mb-5 border-2 p-1 border-collapse">
            <div>
                <h3 className='font-semibold text-lg'>{props.title}</h3>
            </div>
            <CommentCreate postId={props.id} />
        </div>
    )
}

export default PostCard
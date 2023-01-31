import React from 'react'
import CommentCreate from '../components/CommentCreate'
import CommentList from '../components/CommentList'

const PostCard = (props) => {
    return (
        <div className="w-1/3 mb-5 border-2 p-1 border-collapse">
            <div>
                <h3 className='font-semibold text-lg'>{props.title}</h3>
            </div>
            <CommentList postId={props.id} />
            <CommentCreate postId={props.id} />

        </div>
    )
}

export default PostCard
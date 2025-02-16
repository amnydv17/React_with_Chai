import React from 'react';

const PostCard = (props)=>{
  return(
    <div className='post-card'>
      <h2>{props.name}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default PostCard;
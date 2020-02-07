import React from 'react'
import PropTypes from 'prop-types'

function Comment ({author , message ,likes}){
  return (
      <div>
<div className='autor'>{author}</div>
<div className='message'>{message}</div>
<div className='likes'>{likes > 0 ? likes : 'NO'}likes</div>
   </div>
  );
}

Comment.prototype = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string,
    likes: PropTypes.number
}

export default Comment;





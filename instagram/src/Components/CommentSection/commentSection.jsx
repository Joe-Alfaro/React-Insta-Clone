import React from 'react';

const CommentSection = props => {
  return (
    <div className="comment-section-wrapper">
      {props.comments.map(comment => (
        <p>
          <strong>{comment.username}</strong> {comment.text}  
        </p>
      ))}
    </div>
  );
}

export default CommentSection;

import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment} from '@fortawesome/free-regular-svg-icons';

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="interact-buttons">
        <FontAwesomeIcon icon={faHeart}/>
        <FontAwesomeIcon icon={faComment}/>
      </div>
      <p className="likes"><strong>{props.likes} likes</strong></p>
      {props.comments.map(comment => (
        <p>
          <strong>{comment.username}</strong> {comment.text}  
        </p>
      ))}
    </div>
  );
}

export default CommentSection;

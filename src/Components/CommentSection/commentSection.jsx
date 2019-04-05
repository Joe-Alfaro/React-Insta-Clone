import React from 'react';
import PropTypes from 'prop-types';

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
        <p key={Date.now()+Math.random()}>
          <strong>{comment.username}</strong> {comment.text}  
        </p>
      ))}
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array,
  likes: PropTypes.number
}

export default CommentSection;

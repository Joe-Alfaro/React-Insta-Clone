import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/commentSection.jsx';

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.postData.thumbnailUrl} alt="thumbnail" />
        <h3>{props.postData.username}</h3>
      </div>
      <div className="post-image">
        <img src={props.postData.imageUrl} alt="post" />
      </div>
      <CommentSection likes={props.postData.likes} comments={props.postData.comments} />
    </div>
  );
};

PostContainer.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.array,
    id: PropTypes.isRequired,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timestamp: PropTypes.string,
    username: PropTypes.string
  })
}; 

export default PostContainer;

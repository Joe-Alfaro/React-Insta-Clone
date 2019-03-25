import React from 'react';

import CommentSection from '../CommentSection/commentSection.jsx';

const PostContainer = props => {
  return (
    <div className="post-container">
      <CommentSection comments={props.postData.comments} />
    </div>
  );
};

export default PostContainer;

import React from 'react';

import CommentSection from '../CommentSection/commentSection.jsx';

const PostContainer = props => {
  return (
    <div className="post-container">
      <h2>Post Contents</h2>
      <CommentSection />
    </div>
  );
};

export default PostContainer;

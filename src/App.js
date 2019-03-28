import React, { Component } from 'react';

import SearchBar from './Components/SearchBar/searchBar.jsx';
import PostContainer from './Components/PostContainer/postContainer.jsx';
import dummyData from './dummy-data.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    };
  };
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar />
        <div className="page-content">
          {this.state.posts.map(post => (
            <PostContainer key={post.id} postData={post} /> 
          ))}
        </div>
      </div>
    );
  }
}

export default App;

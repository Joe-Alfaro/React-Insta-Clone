import React, { Component } from 'react';

import SearchBar from './Components/SearchBar/searchBar.jsx';
import PostContainer from './Components/PostContainer/postContainer.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;

import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faCompass, faUser} from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="brand">
        <FontAwesomeIcon icon={faInstagram}/>
        <p> | </p>
        <h2>InstaClone</h2>
      </div>
      <input 
        placeholder='Search' 
        type="text"
      />
      <div className="icons">
        <FontAwesomeIcon icon={faCompass}/>       
        <FontAwesomeIcon icon={faHeart}/>       
        <FontAwesomeIcon icon={faUser}/>  
      </div>
    </div>
  )
};

export default SearchBar;

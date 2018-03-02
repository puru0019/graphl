import React, { Component } from 'react';
import '../css/App.css';

class RenderPost extends Component {
  render() {
    return (
      <div className="App">
        <h5>User Name</h5>
        <h4>Post title</h4>
        <p>Post Message</p>
      </div>
    );
  }
}

export default RenderPost;

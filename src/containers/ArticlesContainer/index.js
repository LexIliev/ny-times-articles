import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ArticlesContainer extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  render() {
    return (
      <div>
        <h1>This is the Articles container.</h1>
      </div>
    );
  }
}

export default ArticlesContainer;

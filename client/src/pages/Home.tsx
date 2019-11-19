import React, { Component } from 'react';
import Game from '../components/Game';

export default class Home extends Component {
  public render() {
    return (
      <div>
        <div className='jumbotron bg-dark text-white'>
          <h1>Welcome!</h1>
        </div>
        <Game />
      </div>
    );
  }
}

import React, { Component } from 'react';

interface IProps {
  num: number;
}

interface IState { }

export default class Block extends Component<IProps, IState> {
  render() {
    return (
      <div>
        <h6>{this.props.num}</h6>
      </div>
    );
  }
}

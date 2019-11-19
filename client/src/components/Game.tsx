import React, { Component } from 'react';
import Block from './Block';

interface IProps { }

interface IState {
  rows: number;
  cols: number;
  board: number[][];
}

export default class Game extends Component<IProps, IState> {
  state: IState = {
    rows: 5,
    cols: 5,
    board: [[]] as number[][]
  };

  componentDidMount() {
    this.fillBoard()
  }

  fillBoard = () => {
    const { rows, cols } = this.state;
    const board = [] as any;
    for (let i = 0; i < rows; i++) {
      board[i] = []
      for (let j = 0; j < cols; j++) {
        board[i][j] = []
        board[i][j] = Math.floor(Math.random() * 6);
      }
    }
    this.setState({ board })
  };

  render() {
    return (
      <div>
        <h2>Game</h2>
        <div>
          {this.state.board.map((row, rowIndex) => {
            return <div key={rowIndex} className='row'>
              {this.state.board[rowIndex].map((col, colIndex) => {
                return <div key={colIndex} className='col-2'>
                  <Block num={this.state.board[rowIndex][colIndex]} />
                </div>
              })}
            </div>
          })}
        </div>
      </div>
    );
  }
}

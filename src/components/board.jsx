import React from "react";
import Cell from "./cell";
import "../styles/board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    };
  }

  clearBoard() {}

  componentDidMount() {
    //this.setState(new [this.rows][this.cols]);
    let board = new Array(this.props.rows);
    for (let i = 0; i < this.props.rows; i++) {
      let currentRow = new Array(this.props.cols);
      for (let j = 0; j < this.props.cols; j++) {
        currentRow[j] = j;
      }
      board[i] = currentRow;
    }

    this.setState({ board });
  }

  render() {
    const { board } = this.state;

    return (
      <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <Cell
                key={cellIdx}
                className="cell"
                rowsIdx={rowIdx}
                cellIdx={cellIdx}
              ></Cell>
            ))}
          </div>
        ))}
        )
      </div>
    );
  }
}

export default Board;

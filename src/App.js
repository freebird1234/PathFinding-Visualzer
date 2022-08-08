import React from "react";
import Board from "./components/board";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 20,
      cols: 30,
    };
    //this.changeName = this.changeName.bind(this);
  }

  render() {
    return (
      <Board
        className="board"
        rows={this.state.rows}
        cols={this.state.cols}
      ></Board>
    );
  }
}

export default App;

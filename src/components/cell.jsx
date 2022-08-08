import React from "react";
import "../styles/cell.css";
class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWall: false,
      isStartNode: props.rowsIdx === 10 && props.cellIdx === 3 ? true : false,
      isFinishNode: props.rowsIdx === 10 && props.cellIdx === 25 ? true : false,
    };
  }
  render() {
    let { rowsIdx, cellIdx } = this.props;
    let idName = "cell";

    if (this.state.isWall) idName = "wall";

    if (this.state.isStartNode) idName = "start";

    if (this.state.isFinishNode) idName = "finish";

    return <div className="cell" id={idName}></div>;
  }
}

export default Cell;

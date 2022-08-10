import React from "react";
import "../styles/cell.css";
const WALL = "wall";
const START = "start";
const FINISH = "finish";
const VISITED = "visited";
const PATH = "path";
var isMousePressedDown = false;
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

    if (this.state.isWall) idName = WALL;

    if (this.state.isStartNode) idName = START;

    if (this.state.isFinishNode) idName = FINISH;

    function handleWallCreation(e, isStartNode, isFinishNode, isWall, obj) {
      if (!isStartNode && !isFinishNode && isMousePressedDown)
        obj.setState({ isWall: !isWall });
    }
    return (
      <div
        onMouseDown={(e) => {
          isMousePressedDown = true;
          handleWallCreation(
            e,
            this.state.isStartNode,
            this.state.isFinishNode,
            this.state.isWall,
            this
          );
        }}
        onMouseOut={(e) => {
          handleWallCreation(
            e,
            this.state.isStartNode,
            this.state.isFinishNode,
            this.state.isWall,
            this
          );
        }}
        onMouseUp={(e) => {
          isMousePressedDown = false;
        }}
        className="cell"
        id={idName}
      ></div>
    );
  }
}

export default Cell;

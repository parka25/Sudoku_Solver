import logo from "./logo.svg";
import styles from "./board.module.css";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Countdown, { CountdownApi } from "react-countdown";

// https://github.com/ndresx/react-countdown
const trial = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 8, 5],
  [0, 0, 1, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 7, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 1, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 7, 3],
  [0, 0, 2, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 9],
];

const emptyGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function deepcopy(array) {
  return JSON.parse(JSON.stringify(array));
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: deepcopy(trial),
      timerrunning: false,
    };
  }
  renderGrid() {
    var rows = [];
    const dim = 9;
    for (let i = 0; i < dim; i++) {
      var cols = [];
      for (let j = 0; j < dim; j++) {
        cols.push(
          <div className={styles.cell}>
            <Cell
              value={this.state.grid[i][j]}
              OnUpdate_value={(NewValue) => {
                var NewGrid = deepcopy(this.state.grid);
                NewGrid[i][j] = NewValue;
                this.setState({ grid: NewGrid });
              }}
            ></Cell>
          </div>
        );
      }
      rows.push(<div className={styles.row}>{cols}</div>);
    }
    return <div className={styles.table}>{rows}</div>;
  }
  render() {
    return (
      <div>
        {this.renderGrid()}
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              this.setState({ grid: deepcopy(emptyGrid) });
            }}
          >
            Clear
          </Button>
          <Button>Solve</Button>
          <Button>Generate Example</Button>
        </ButtonGroup>
        <Countdown
          date={Date.now() + 300000}
          autoStart={this.state.timerrunning}
        />
        .
        <Button
          onClick={() => {
            this.setState({ timerrunning: true });
          }}
        >
          Start Timer
        </Button>
      </div>
    );
  }
}

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={styles.square}
        onClick={() => {
          this.props.OnUpdate_value((this.props.value + 1) % 10);
        }}
      >
        {this.props.value == 0 ? null : this.props.value}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}
export default App;

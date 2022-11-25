import styles from "./board.module.css";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Countdown, { CountdownApi } from "react-countdown";
// https://github.com/ndresx/react-countdown
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//https://mui.com/material-ui/react-dialog/
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/stack";
import Paper from "@mui/material/paper";
import Container from "@mui/material/container";

const trial = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const trial2 = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
const trial3 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 8, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9],
];
const trial4 = [
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
function make_random_sudoku() {
  var items = [trial, trial2, trial3, trial4];
  var b = Math.floor(Math.random() * items.length);
  return deepcopy(items[b]);
}

function deepcopy(array) {
  return JSON.parse(JSON.stringify(array));
}
function checkSolveSuccess(mat1, mat2) {
  return !(JSON.stringify(mat1) === JSON.stringify(mat2));
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: deepcopy(emptyGrid),
      timerrunning: false,
      showSudokuErrorPopup: false,
    };
  }
  showErrorPopup() {
    return (
      <Dialog
        open={this.state.showSudokuErrorPopup}
        onClose={() => this.setState({ showSudokuErrorPopup: false })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error 404: Sudoku unsolvable"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It turns out to be that the sudoku you typed in is invalid. Try a
            new one or choose one from our generated list
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    );
  }

  Solve(value) {
    fetch("/solveGrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Gamestate: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          grid: data["payload"],
          showSudokuErrorPopup: !checkSolveSuccess(
            data["payload"],
            this.state.grid
          ),
        });
      });
  }
  renderGrid() {
    var rows = [];
    const dim = 9;
    for (let i = 0; i < dim; i++) {
      var cols = [];
      for (let j = 0; j < dim; j++) {
        cols.push(
          <div className={styles.cell} key={i * 9 + j}>
            <Cell
              key={(i * 9 + j) * 9}
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
        <Container maxwidth="sm" className={styles.container}>
          <Paper elevation={5} className={styles.paper}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
              <Typography variant="h2" gutterBottom>
                Sudoku Puzzle Solver
              </Typography>
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
                <Button
                  onClick={() => {
                    this.Solve(this.state.grid);
                  }}
                >
                  Solve
                </Button>
                <Button
                  onClick={() => {
                    this.setState({ grid: make_random_sudoku() });
                  }}
                >
                  Generate Example
                </Button>
              </ButtonGroup>
            </Stack>
          </Paper>
        </Container>
        {this.showErrorPopup()}
      </div>
    );
  }
}

class Cell extends React.Component {
  render() {
    return (
      <div
        className={styles.square}
        onClick={() => {
          this.props.OnUpdate_value((this.props.value + 1) % 10);
        }}
      >
        {this.props.value === 0 ? null : this.props.value}
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

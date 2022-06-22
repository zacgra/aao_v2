const Screen = require("./screen");

class Cursor {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = "black";
    this.cursorColor = "yellow";
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row - 1, this.col)) {
      // Move cursor up
      this.row -= 1;
    }
    this.setBackgroundColor();
  }

  down() {
    console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row + 1, this.col)) {
      // Move cursor down
      this.row += 1;
    }
    this.setBackgroundColor();
  }

  left() {
    console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row, this.col - 1)) {
      // Move cursor left
      this.col -= 1;
    }
    this.setBackgroundColor();
  }

  right() {
    console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row, this.col + 1)) {
      // Move cursor right
      this.col += 1;
    }

    this.setBackgroundColor();
  }

  valid_pos(row, col) {
    return 0 <= row && row < this.numRows && 0 <= col && col < this.numCols;
  }
}

module.exports = Cursor;

const checkPuzzle = require("./checkPuzzle.js");
const solveCordinate = require("./solveCordinate.js");

const solvePuzzle = (puzzle, puzzleCordinatesWithKeys) => {
  /** solve provided puzzle */

  if (puzzleCordinatesWithKeys.length > 0) {
    // check to see if there are still coordinates to work with;

    let obtainedCoordinate = puzzleCordinatesWithKeys.splice(0, 1)[0];
    // console.log("obtainedCoordinate", obtainedCoordinate);

    // add a possible digit betwee 1-9 at the selected 
    let solvedPuzzle = solveCordinate(puzzle, obtainedCoordinate);
    // console.log("puzzle to be solved is", solvedPuzzle);

    // check if puzzle is solved at the selected cordinate
    let isPuzzleSolved = checkPuzzle(solvedPuzzle);
    // console.log('isPuzzleSolved in solvePuzzle.js', isPuzzleSolved)

    if (isPuzzleSolved.validate === false) {
      // if it is not solved work on it to solve it

      // console.log("puzzle is not solved", solvedPuzzle.match(/.{1,9}/g));
      return solvePuzzle(solvedPuzzle, puzzleCordinatesWithKeys);

    } else {
      // if it is solved return it and exit

      // console.log("puzzle is solved", solvedPuzzle.match(/.{1,9}/g));
      return solvedPuzzle;
    }
  }
};

module.exports = solvePuzzle;

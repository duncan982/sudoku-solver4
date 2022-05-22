const chai = require("chai");
const assert = chai.assert;

const Solver = require("../controllers/sudoku-solver.js");
const solvePuzzle = require("../routes/solvePuzzle.js");
const solver = new Solver();
const puzzleCordinates = require("../routes/puzzleCordinates.js");
const GeneratePuzzleCordinatesWithKeys = require("../routes/GeneratePuzzleCordinatesWithKeys.js");
const checkIfvalueIsValidButAlreadyAddedToPuzzle = require("../routes/checkIfvalueIsValidButAlreadyAddedToPuzzle.js");
const splitPuzzleValuesWithKeys = require("../routes/splitPuzzleValuesWithKeys.js");
const generatePuzzleValuesWithKeys = require("../routes/generatePuzzleValuesWithKeys.js");
const solveCordinateWithPossibleValue = require('../routes/solveCordinateWithPossibleValue.js');
const possiblePuzzelItems = require('../routes/possiblePuzzelItems.js');
const determineIfnextOrCurrentRowOrColumn = require('../routes/determineIfnextOrCurrentRowOrColumn.js');
const solveCordinate = require('../routes/solveCordinate.js');

suite("UnitTests", () => {
  // test("#1 Logic handles a valid puzzle string of 81 characters", () => {
  //   let validPuzzle =
  //     "9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   // console.log(solver.validate(validPuzzle));
  //   assert.isTrue(solver.validatePuzzleValuesAndLength(validPuzzle));
  // });

  // test("#2 Logic handles a puzzle string with invalid characters (not 1-9 or .)", () => {
  //   let inValidPuzzle =
  //     "AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isFalse(solver.validatePuzzleValuesAndLength(inValidPuzzle));
  // });

  // test("#3 Logic handles a puzzle string that is not 81 characters in length", () => {
  //   let inValidPuzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...";
  //   assert.isFalse(solver.validate(inValidPuzzle));
  // });

  // test("#4 Logic handles a valid row placement", () => {
  //   let puzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isFalse(solver.checkRowPlacement(puzzle, "A", "1", "7"));
  // });

  // test("#5 Logic handles an invalid row placement", () => {
  //   let puzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isTrue(solver.checkRowPlacement(puzzle, "A", "3", "9"));
  // });

  // test("#6 Logic handles a valid column placement", () => {
  //   let puzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isFalse(solver.checkColPlacement(puzzle, "A", "1", "7"));
  // });

  // test("#7 Logic handles an invalid column placement", () => {
  //   let puzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isTrue(solver.checkColPlacement(puzzle, "A", "3", "9"));
  // });

  // test("#8 Logic handles a valid region (3x3 grid) placement", () => {
  //   let puzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isFalse(solver.checkRegionPlacement(puzzle, "A", "1", "7"));
  // });

  // test("#9 Logic handles an invalid region (3x3 grid) placement", () => {
  //   let puzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isTrue(solver.checkRegionPlacement(puzzle, "A", "3", "9"));
  // });

  // test("#10 Valid puzzle strings pass the solver", () => {
  //   let completePuzzle =
  //     "969725318851473692432716895145769283397824561628713549236785194518924637749312658";
  //   assert.isTrue(solver.validate(completePuzzle));
  // });

  // test("#11 Invalid puzzle strings fail the solver", () => {
  //   let inCompletePuzzle =
  //     "9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   assert.isFalse(solver.validate(inCompletePuzzle));
  // });

  // test("#12 Solver returns the expected solution for an incomplete puzzle", () => {
  //   let inCompletevalidVPuzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";

  //   let solvedPuzzle;

  //   if (solver.validatePuzzleValuesAndLength(inCompletevalidVPuzzle)) {
  //     // create an object of puzzle coordinates and their keys
  //     let puzzleCordinatesWithKeys = GeneratePuzzleCordinatesWithKeys(
  //       puzzleCordinates
  //     );
  //     // console.log("puzzleCordinatesWithKeys", puzzleCordinatesWithKeys);
  //     solvedPuzzle = solvePuzzle(
  //       inCompletevalidVPuzzle,
  //       puzzleCordinatesWithKeys
  //     );
  //   }
  //   console.log("solvedPuzzle", solvedPuzzle);
  //   assert.isTrue(solver.validate(solvedPuzzle));
  // });

  // test("#13 check if value is in specified cordinate in selected row ", () => {
  //   let puzzle =
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   let row = "C";
  //   let column = "3";
  //   let value = "2";

  //   // console.log("row", row, "column", column, "value", value);
  //   // create an array of puzzle string values
  //   let puzzleValuesWithKeys = generatePuzzleValuesWithKeys(puzzle);
  //   // console.log('puzzleValuesWithKeys in solvePuzzle.js:', puzzleValuesWithKeys)

  //   // iterate puzzleValuesWithKeys and separate items into respective rows
  //   let splitedPuzzleValuesWithKeys = splitPuzzleValuesWithKeys(
  //     puzzleValuesWithKeys
  //   );
  //   // console.log( "splitedPuzzleValuesWithKeys before", splitedPuzzleValuesWithKeys);

  //   // select respective row based on provided cordinate
  //   let selectedRow = splitedPuzzleValuesWithKeys[row];
  //   // console.log("selectedRow", selectedRow);

  //   let isValidButAlreadyAddedToPuzzle = checkIfvalueIsValidButAlreadyAddedToPuzzle(
  //     selectedRow,
  //     row,
  //     column,
  //     value
  //   );

  //   // console.log(
  //   //   "isValidButAlreadyAddedToPuzzle",
  //   //   isValidButAlreadyAddedToPuzzle
  //   // );
  //   assert.isTrue(isValidButAlreadyAddedToPuzzle);
  // });

  // test("#14 test solver.checkColPlacement", () => {
  //   let isValueAlreadyInColumn = solver.checkColPlacement(
  //     "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
  //     "A",
  //     "3",
  //     "9"
  //   );
  //   // console.log("isValueAlreadyInColumn", isValueAlreadyInColumn);
  //   assert.isTrue(isValueAlreadyInColumn);
  // });

  // test('solve puzzle based on strings', ()=>{
    // let puzzle = "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
    // let splittedPuzzle = puzzle.split('');
    // let newPuzzle =''

    // for(let i=0; i<splittedPuzzle.length; i++){
    //   if(i===0){
    //     newPuzzle=newPuzzle + 'x'
    //   }else{
    //     newPuzzle=newPuzzle + splittedPuzzle[i]
    //   }
    // };
    // console.log(newPuzzle);

  // })

  // test('test checkIfThereIsAValidAlreadyAddedToPuzzle()', ()=>{
  //   let puzzle = "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   const checkIfThereIsAValidAlreadyAddedToPuzzle=require('../routes/checkIfThereIsAValidAlreadyAddedToPuzzle.js');
  //   assert.isTrue(checkIfThereIsAValidAlreadyAddedToPuzzle(puzzle, 'A', '3'));
  // })

  // test('test solveCordinateWithPossibleValue()', ()=>{
  //   let puzzle = "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //   let solvedCordinateWithPossibleValue = solveCordinateWithPossibleValue(puzzle, 'A', '2', possiblePuzzelItems) 
  //   console.log('puzzle before', puzzle);
  //   console.log('puzzle after', solvedCordinateWithPossibleValue);

  // })

    // test("#test solvePuzzle", () => {
    // let puzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
    // // let puzzle = '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3';
    // // let puzzle = '.7.89.....5....3.4.2..4..1.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6';

    // let puzzleCordinatesWithKeys = GeneratePuzzleCordinatesWithKeys(puzzleCordinates);
    //   // console.log("puzzleCordinatesWithKeys", puzzleCordinatesWithKeys);
    // let solvedPuzzle = solvePuzzle(puzzle, puzzleCordinatesWithKeys);
    // console.log('solved puzzle', solvedPuzzle)
    // });

    // test('determine if the nextInvalidValue would be in the current row/column or the next one', ()=>{
    //   console.log(determineIfnextOrCurrentRowOrColumn('I', '9'));
    // });

    // test('selection of best possible puzzel ', ()=>{
    //   let puzzle = "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
    //   solveCordinate(puzzle, 'A1');
    // })

    // test checkPuzzle/checkToDetectIssues on whether they are able to do so correctly
    // test genereate rows/columns/grids on whether they are able to do so correctly
});

// const generateValueIndexInPuzzle = require('./generateValueIndexInPuzzle.js');
const checkPuzzle = require("./checkPuzzle.js");
const checkToDetectIssues = require("./checkToDetectIssues.js");
const determineIfnextOrCurrentRowOrColumn = require('./determineIfnextOrCurrentRowOrColumn.js');

const selectBestPossiblePuzzel =(row, column, nextValue, possiblePuzzels)=>{
    /** select best possible puzzel 
     * whose next value would not be invalid or will contain similar digits in row/column/region*/

    // obtain the current value index
    // let currentValueIndex = generateValueIndexInPuzzle(row, column);

    // obtain next value index i.e. 
    // let nextValueIndex = currentValueIndex + 1;

    // set next value to be tested
    let nextPossibleValue;
    if(nextValue < 9){
        nextPossibleValue = nextValue + 1;
    }else{
        nextPossibleValue = 1;
    };
    
    // determine if the nextInvalidValue would be in the current row/column or the next one // if next obtain the next row or column
    let nextOrCurrentRow = determineIfnextOrCurrentRowOrColumn(row, column).row;
    let nextOrCurrentColumn = determineIfnextOrCurrentRowOrColumn(row, column).column;

    // collect possible valid puzzles
    let validPossiblePuzzles = []

    // iterate selected puzzles and predict among the above in which of them the next invalid value would be valid
    for(let i=0; i<possiblePuzzels.length; i++){
        // select test puzzle
        let testPuzzel = possiblePuzzels[i]; 

        //check if puzzle is solved and if value is in row/column/grid
        let checks = checkPuzzle(testPuzzel, nextOrCurrentRow, nextOrCurrentColumn, nextPossibleValue);
        // console.log("checks", checks);

        // check to detect if there are issues with row, column, grid and puzzle
        let response = checkToDetectIssues(checks);
        // console.log("response", response);

        if(response.valid){
            // value is not in row/column/grid

            // collect the testpuzzle
            validPossiblePuzzles.push(testPuzzel);
        }

    };

    // console.log('validPossiblePuzzles', validPossiblePuzzles);
    return validPossiblePuzzles

    // if value is valid, add it to the respective cordinate
    // check if value is added, it will not be similar to another one in the same row/column/region
}

module.exports = selectBestPossiblePuzzel;





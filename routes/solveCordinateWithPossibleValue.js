const updatePuzzleString = require("./updatePuzzleString.js");
// const possiblePuzzelItems = require("./possiblePuzzelItems.js");
const checkIfThereIsAValidAlreadyAddedToPuzzle = require('./checkIfThereIsAValidAlreadyAddedToPuzzle.js');
const checkIfvalueIsPresentMoreThanOnce = require('./checkIfvalueIsPresentMoreThanOnce.js');
const selectBestPossiblePuzzel = require('./selectBestPossiblePuzzel.js');

const solveCordinateWithPossibleValue = (puzzle, row, column, possiblePuzzelItems) =>{
    // console.log('puzzle before', puzzle);

    // check if there is a valid digit already at the specified cordinates
    let isThereAValueAlreadyAddedToPuzzle = checkIfThereIsAValidAlreadyAddedToPuzzle(puzzle, row, column);
    
    if(isThereAValueAlreadyAddedToPuzzle){
    // if there is a valid digit already at the specified cordinates, dont work on the puzzle, return it

        return puzzle;
    }else{
        // there is no valid digit already at the specified cordinates, therefore work on the puzzle
        let updatedPuzzleString;
        let possiblePuzzels = [];
        let possiblePuzzel;
        let newpossiblePuzzelItems;
        let nextValue;

        // console.log('possiblePuzzelItems before', possiblePuzzelItems);

        let invalidValue // get value not added to array

        for(let i=0; i < possiblePuzzelItems.length; i++){
            // check among digits 1-9 which one can be added

            // set the value to be tested
            let value = possiblePuzzelItems[i];
            // console.log('value', value);

            // check if the value is valid and try to add the value onto the puzzle
            updatedPuzzleString = updatePuzzleString(puzzle, row, column, value);
            // console.log('updatedPuzzleString in solveCordinateWithPossibleValue.js', updatedPuzzleString);
            
            if(updatedPuzzleString.valueAddedToPuzzle === true){
                // check if the value was added to puzzle 

                // console.log('puzzle after: possiblePuzzel', possiblePuzzel);
                // return updatedPuzzleString.regeneratedPuzzle

                // add modified puzzle to the list of possible puzzles
                possiblePuzzels.push(updatedPuzzleString.regeneratedPuzzle);
                // console.log('updatedPuzzleString', updatedPuzzleString);

                // set next value to be tested
                if(value < 9){
                    nextValue = value + 1
                }else{
                    nextValue = 1;
                };

            }else{
               // the value is not valid and was not added to puzzle  

               // remove the value from the possible list
                invalidValue = value;
                // console.log('invalid value', value)
            };
        };

        // newpossiblePuzzelItems = possiblePuzzelItems.filter(item => {
        //         return item !== invalidValue;
        //     });
        // console.log('possiblePuzzelItems after', newpossiblePuzzelItems);

        // console.log('possiblePuzzels', possiblePuzzels);
        // console.log('nextValue', nextValue);

        // select the first random puzzle in the list of possible puzzles
        // possiblePuzzel = possiblePuzzels[1] // yields > 7 empty fields
        possiblePuzzel = possiblePuzzels[0] // yields 7 empty fields
        // possiblePuzzel = possiblePuzzels[Math.floor(Math.random()*possiblePuzzels.length)] // yields > 7 empty fields
        // possiblePuzzel = possiblePuzzels[0]
        // console.log('possiblePuzzel', possiblePuzzel);

        // select possible valid puzzle whose next value to be added will be valid
        // possiblePuzzel = selectBestPossiblePuzzel(row, column, nextValue, possiblePuzzels)

        if(possiblePuzzel){
            // check if there is a selected first puzzle in the list of possible puzzles;

            // console.log('puzzle after', possiblePuzzel);
    
            // return the seleced puzzle
            return possiblePuzzel;

        } else if(invalidValue){
            // there is no selected first puzzle in the list of possible puzzles
            // the previous value was not valid and was not added onto the puzzle
            // therefore try the next set of values

            // discard invalid value form possiblePuzzelItems and set new possible values
            newpossiblePuzzelItems = possiblePuzzelItems.filter(item => {
                return item !== invalidValue;
            });
            // console.log('possiblePuzzelItems after', newpossiblePuzzelItems);

            // check if puzzle is valid i.e. if there is no value present more than once in any of the rows
            let isValueIsPresentMoreThanOnce = checkIfvalueIsPresentMoreThanOnce(puzzle);

            if(!isValueIsPresentMoreThanOnce){
                // there is no value present more than once in any of the rows

                console.log('********invalid value, check other values******')

                // the above values in the list of possible value is not valid. therefore repeat
                return solveCordinateWithPossibleValue(puzzle, row, column, newpossiblePuzzelItems);
            }else{
                return puzzle
            };
            
        }else{
            console.log('------newpossiblePuzzelItems.length <= 0-------');
            return puzzle;
        };
    };
};
module.exports = solveCordinateWithPossibleValue;
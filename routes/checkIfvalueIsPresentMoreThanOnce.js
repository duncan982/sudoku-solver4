const checkIfvalueIsPresentMoreThanOnce = (puzzle) => {
  let valueIsPresentMoreThanOnce;
  // let puzzle = "9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
  let splitedPuzzle = puzzle.match(/.{1,9}/g);
  // console.log(splitedPuzzle)

  for (let i = 0; i < splitedPuzzle.length; i++) {
    // console.log(splitedPuzzle[i])

    let posibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let j = 0; j < posibleValues.length; j++) {
      let regex = new RegExp(`${posibleValues[j]}`, "g");
      // console.log('regex', regex)
      if ((splitedPuzzle[i].match(regex) || []).length > 1) {
        valueIsPresentMoreThanOnce = true;
        // console.log(valueIsPresentMoreThanOne)
        // console.log(splitedPuzzle[i]);
      }
    }
  }

  // console.log(valueIsPresentMoreThanOnce);
  return valueIsPresentMoreThanOnce;
};

module.exports = checkIfvalueIsPresentMoreThanOnce;

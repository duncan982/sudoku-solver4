let splittedPuzzle = [
  '1', '.', '5', '.', '.', '2', '.', '8', '4', '.',
  '.', '6', '3', '.', '1', '2', '.', '7', '.', '2',
  '.', '.', '5', '.', '.', '.', '.', '.', '9', '.',
  '.', '1', '.', '.', '.', '.', '8', '.', '2', '.',
  '3', '6', '7', '4', '.', '3', '.', '7', '.', '2',
  '.', '.', '9', '.', '4', '7', '.', '.', '.', '8',
  '.', '.', '1', '.', '.', '1', '6', '.', '.', '.',
  '.', '9', '2', '6', '9', '1', '4', '.', '3', '7',
  '.'
];

let valueIndex = '1';
let value = '1';
let newPuzzle =''
    
for(let i=0; i<splittedPuzzle.length; i++){

  if(i===Number(valueIndex)){
    newPuzzle = newPuzzle + value;
    // console.log('newPuzzle', newPuzzle);
  }else{
    newPuzzle = newPuzzle + splittedPuzzle[i];
  }
};

console.log('newPuzzle', newPuzzle);
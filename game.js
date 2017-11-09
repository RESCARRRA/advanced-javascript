 
var wordList = ['cat', 'dog', 'monkey', 'snake', 'goat', 'fox', 'shark', 'owl', 'zebra', 'bear'];
var wordPick = [Math.floor(Math.random()* wordList.length)];
var chosenWord = wordList[wordPick];
// console.log('GAME: '+ chosenWord);
exports.chosenWord = chosenWord;
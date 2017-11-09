var game = require("./game.js");
var Wrd = require("./words.js");
var Lttr = require("./letter.js");
var inquirer = require("inquirer");
var chosenWord = game.chosenWord;
exports.letter;

// startGame();

var userWord = new Wrd.Wrd(game.chosenWord);
var guessLimit = 10;

// // Option to Start or End game
// // -----------------------------------------------------------------------------

// function startGame(){
// 	var chosenWord = game.chosenWord;
// 	var userWord = new Wrd.Wrd(game.chosenWord);
// 	var guessLimit = 10;

// 	// var args = process.argv.slice(2);
// 	// if (args = 'QUIT'){
// 	// process.exit();
// 	// }




// Game Start: Prompt user for letter/guess
//-----------------------------------------------------------------------------
function userGuess(){
		console.log("");
		console.log("");
		console.log("");
		console.log("~~~~~~~~********************************~~~~~~~~\n");
		console.log("\n" + 
		" . . . .-. .   .-. .-. .  . .-.   .-. .-.   \n"+
		" | | | |-  |   |   | | |` | |-     |  | |  \n"+
		" `.'.' `-' `-' `-' `-' '  ' `-'    '  `-'  \n"+
		'\n\r'+                                           
		"~	~	~	~	~	~\n"+
		  " _   _ \n"  +                                      
		  "| | | | __ _ _ __   __ _ _ __ ___   __ _ _ __  \n"+
		  "| |_| |/ _` | '_  `/ _` | '_ ` _ ` / _` | '_ ` \n"+
		  "|  _  | (_) | | | | (_) | | | | | | (_) | | | |\n"+
		  "|_| |_||__,_|_| |_||__, |_| |_| |_||__,_|_| |_|\n"+
		  "                   |___/                       \n"+
		  "\n   ....or me after this weeeeeeekkkkkk!!!! j/k :/ "
		);
		console.log("~~~~~~~~********************************~~~~~~~~\n");
		console.log("To begin, follow the prompts below. You can quit at anytime by typing [ QUIT ].");
		console.log("");
		console.log("");
	// gamePrompt();
		// userGuess();
	console.log(userWord.toString());
	if (userWord.guesses.length >= guessLimit){
		console.log('Blërg!! You ran out of guesses! The mystery word was ' + chosenWord + '. GAME OVER!!!');
		gamePrompt();
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Guess a letter: ',
		validate: function(value) {
			return value !== ' ' && value.length == 1 && value.typeof !== "";
		}
		// validate: function (value){
		//    	if( value !== ' ' && value.length == 1 && value.typeof !== "")
		//    		return;
		//   	}

		// validate: function(value) {
		// 		if (isNaN(value) === true) {
		// 			return false;
		//      }
		// 			return true;
		//      }

	}]).then(function(answers){
		var letter = answers.letter;  

		userWord.checkAgainst(letter);
		console.log("");
		
		if(userWord.renderWord()){
			console.log('Correct! The answer was ' + userWord.toString() + '! You won!'+
		
			"\n"+					
			"/**   *  /**      /**      /**/*    /**\n"+
			"/**  *** /**      /**      /**/**   /**\n"+
			"/** **/**/**      /**      /**  /** /**\n"+
			"/**** //****      /**      /**   //****\n"+
			"////   ////       ///      ///    /////\n"+
			"\n\r");
			// return;
			// process.exit();
			gamePrompt();
			return;

		}
		console.log('<><><><><><><><><><><><><><><><><><><><><>\n');
		console.log('You have ' + (guessLimit - userWord.guesses.length) + ' guesses remaining.');
		console.log("");
		gamePrompt();
		userGuess();
		}
	);
}
userGuess();

function gamePrompt() {
  inquirer.prompt([{
      name: "play",
      type: "input",
      message: 'Too bad! Byyeee!'
      // default: ['y']
    }])
    .then(function(answer) {
      // based on their answer, either call the start or the end functions
  //  	if (answer.play = 'no'){
		// process.exit();
  //  	};
	if (answer.play === 'QUIT'){
		process.exit();
   	}
  });
};
// gamePrompt();

// function gameOver(){
// 	console.log('Sad to see you go! Until next time!!!');
// 	process.exit();
// 	stop();

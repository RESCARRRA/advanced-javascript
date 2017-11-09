var game = require("./game.js");
var Wrd = require("./words.js");
var Lttr = require("./letter.js");
var inquirer = require("inquirer");
var term = require('terminal-kit').terminal;
var chosenWord = game.chosenWord;
var letterGuessed;
exports.letter;
var userWord = new Wrd.Wrd(game.chosenWord);
var guessLimit = 10;
// question();
// return;
function start(){
		var chosenWord = game.chosenWord;
		var letterGuessed;
		exports.letter;
		var userWord = new Wrd.Wrd(game.chosenWord);
		var guessLimit = 10;
		console.log("");
		console.log("");
		console.log("");
		console.log("~~~~~~~~********************************~~~~~~~~\n");
		console.log("\n" + 
			" . . . .-. .   .-. .-. .  . .-.   .-. .-.   \n" +
			" | | | |-  |   |   | | |` | |-     |  | |  \n" +
			" `.'.' `-' `-' `-' `-' '  ' `-'    '  `-'  \n" + 
			'\n\r' + "~	~	~	~	~	~\n" +
			" _   _ \n" + 
			"| | | | __ _ _ __   __ _ _ __ ___   __ _ _ __  \n" +
			"| |_| |/ _` | '_  `/ _` | '_ ` _ ` / _` | '_ ` \n" +
			"|  _  | (_) | | | | (_) | | | | | | (_) | | | |\n" +
			"|_| |_||__,_|_| |_||__, |_| |_| |_||__,_|_| |_|\n" +
			"                   |___/                       \n");
		// console.log("Start by typing a letter to guess the mystery word!\n");
		// console.log("You may stop playing at anytime by typing 'quit'\n");

// CHOSEN WORD!!!!
		console.log(chosenWord)
		console.log("~~~~~~~~********************************~~~~~~~~\n");
		console.log("To being, follow the prompts below. ");
		console.log(
			"You can quit at anytime by pressing the [CTRL] & [C] keys simultaneously.");
		console.log("");
		console.log("");
question();
return;

function question() {
	term('Do you want to play? [y|n]\n');
	term.yesOrNo({
		yes: ['y', 'ENTER'],
		no: ['n']
	}, function(error, result) {
		if (result) {
			term.green("'Get ready!!\n");
			start();
			userGuess();
		}
		else {
			term.red("Oh bummer! Well, until next time! \n");
			process.exit();
		}
	});
}
// question();
// userGuess();
// gamePrompt();
// // Option to Start or End game
// // -----------------------------------------------------------------------------
// function gamePrompt() {
//   inquirer.prompt({
//       name: "startOrEnd",
//       type: "text",
//       message: "Would you like to [START] a new game or [QUIT]?",
//       choices: ["START", "QUIT"]
//     })
//     .then(function(answer) {
//       // based on their answer, either call the start or the end functions
//       if (answer.startOrEnd.toUpperCase() === "START") {
//       	console.log("");
//       	console.log("");
//       	console.log("PLAY GAME!!!");
//       	console.log("");
//       	console.log("");
//         userGuess();
//       }
//       else if (answer.startOrEnd.toUpperCase() === "QUIT") {
//         gameOver();
//       }
//       else{
//       	return;
//       }
//     });
// }
// Game Start: Prompt user for letter/guess
//-----------------------------------------------------------------------------
function userGuess() {
	// var userWord = userWord.toString();
	console.log(userWord.toString());
	if (userWord.guesses.length >= guessLimit) {
		console.log('Oh shucks! You ran out of guesses! The mystery word was ' +
			chosenWord + '. GAME OVER!!!');
		question();
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: '\n' + 'Guess a letter: ',
		validate: function(value) {
			// return value !== ' '; 
			return value !== ' ' && value.length == 1 && value.typeof !== "";
		}
	}]).then(function(answers) {
		var letter = answers.letter;
		userWord.checkAgainst(letter);
		console.log('<><><><><><><><><><><><><><><><><><><><><>\n')
		console.log('You have ' + (guessLimit - userWord.guesses.length) +
			' guesses remaining.');

		if (userWord.renderWord()) {
			console.log('Correct! The answer was ' + userWord.toString() +
				'! You won!' + "\n\r" + 
	   			" **       **       **      /***     /**		\n" +
				"/**      /**      /**      /**/**   /**		\n" +
				"/**   *  /**      /**      /**//**  /**		\n" +
				"/**  *** /**      /**      /** //** /**		\n" +
				"/** **/**/**      /**      /**  //**/**		\n" +
				"/**** //****      /**      /**   //****		\n" +
				"/**/   ///**      /**      /**    //***		\n" +
				"//       //       //       //      /// 		\n" + 
				"\n\r");
			
			question();


		};
		// question();
		userGuess();
	});
}
start();
};
start();
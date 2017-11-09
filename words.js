 var Lttr = require("./letter.js");

function word(value){
	this.value = value;
	this.letters = [];
	this.guesses = "";
	for (var i =0; i < this.value.length; i++){
		this.letters.push(new Lttr.letter(this.value[i]));
	}
};

word.prototype.renderWord = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].show)
		return false;
	}
		return true;
}
//validation optional
word.prototype.checkAgainst = function (letter){
	var userLetter = letter.toUpperCase() ;
	if (this.guesses.indexOf(userLetter) != -1){
		return "You've already guessed that letter!";
	}

	this.guesses += userLetter;
	for(var i = 0;  i <  this.letters.length; i++){
		if (this.letters[i].value.toUpperCase() == userLetter){
		this.letters[i].show = true;
		}
	}
}; // end duplicate/verify

word.prototype.toString = function() {
	var outcome = '';
	for(var i=0; i<this.letters.length; i++){
		outcome += this.letters[i].printInfo();
	}
	return outcome;
}
exports.Wrd = word;




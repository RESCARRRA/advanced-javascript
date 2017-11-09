exports.letter = letter;

function letter(value){
	this.value = value;
	this.show = false;
	if (this.value == ' ')
	this.show = true;
}

letter.prototype.printInfo = function() {
	if(this.show) {
		return this.value;
	}
		return "_ ";
		//to string in words.js to sub
}
// 	this.letterRender = function(){
// 		return !(this.appear);
// 	};
// };

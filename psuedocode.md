#Psuedocode Hangman (Node)

Pick a random word

While the word has not been guessed {
	Show the player their current progress
	Get a guess from the player

	If the player wants to quit the game{
		Quit the game
	}
	Else if the guess is not a single letter {
		Tell the player to pick a single letter
	}
	Else {
		If the guess is in the word {
			Update the players progress with their guess
		}
	}
}

Congratulate the player on guessing the word

///

## Tracking the state of the word
- Represent each blank by using '_'.
- Create answer array to hold blanks equal to the number of letters in each word.
- if user guesses correctly, the '-' is replaced by the letter.
	* this continues until the letter is guessed!
	for each letter correctly guessed, the lettersRemaining is decreased by 1. Once it hits 0, the player wins.

## Designing the Game Loop
- Main game takes place in while loop
1. display current state of word (beginning with the blanks)
2. ask player for a guess (ensure its a valid letter)
3. update the answer array with chosen letter, if it appears in word.
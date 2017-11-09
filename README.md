# Advanced Javascript
## Constructor Hangman

### Overview

Hangman command-line (CLI) game using constructor functions.

The completed game meets the following criteria:

1. Receives user input using the`inquirer npm` package.

2. Constructor functions:

  * **Word**: An object representing the current word the user is attempting to guess.

  * **Letter**: Each letter object either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

3. The user's remaining guesses are tracked and shown to the user on each guess.

4. The user is prompted if they would like to end the game when they've run out of guesses.

5. Each constructor function is in it's own file; exported and required when/where needed.


- - -

### Dependencies

* See `package.json` file containing project dependencies


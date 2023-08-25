# EX-and-OS
RULES OF THE GAME

-The game is played on a grid that's 3 squares by 3 squares.
- You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares.
-The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
-When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

CODE EXPLANATION

1.Firstly i want to get the nine blocks or nine div tags and the restart button,so i have to set my variables.
To avoid an html collection and keep my code simple ,i converted my html collection into an array and saving that into our boxes variable,by using the built in function called array.from .

2.Creating some functionality for my game; set up a variable called const O_TEXT and X_TEXT.I'll start my game off with X_Text.
To keep track of which block was clicked of the nine blocks and save that so the O_Text doesnt select the clicked box :i created a variable (let spaces) = an array and an array of 9() spaces.

3.To start this game i created a function.I looped over boxes and added an eventListener to each one of the dom elements.
I used an if statement in order to change between xoxo and i did by taking the current player variable saying its equal to whatever the following if statement is going to return.Then saved O_Text or X_Text inside the variable im overriding.

4.Last thing i did was to craete a player has won function and resetting a basic reset button.To reset the game i called the restartbutton and added an eventListener to it.I also created a restart Function which clears out everything on the gameboard and clear out spaces array.
playerHasWon Function: before creating this function i had to creat a variable(winningCombos) because with X and Os,there are certain combintions that a player needs to hit in order to win the game.In order to check if the player filled all three of the spaces and if so that player has won,i looped over the winningCombos.
Now i created a new variable for my winningCombo array: the variable calls winningblocks.I maped over the winning blocks in order to give some type of indivation that player has won.i also grabbed my css variable and created a variable called winning blocks with a highlight background in order to highlight the blocks that has the actual winning combination.
 
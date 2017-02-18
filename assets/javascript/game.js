
// declairing variables
var game = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 1;			
var loss = 1;		
var guessLeft = 8;
	 
//getting the id
function getElementbyId(element){
	var information = document.getElementById(element);
	return information;
} 

// press a key the game will recgnoze it
document.onkeyup = function(event){

	// The number the game guessed
	var gameGuessingNumber = Math.floor(Math.random() * game.length),

		// The choice of the game
		randomGuess = game[gameGuessingNumber],

		information = document.createTextNode(event.key + ", ");
		//letters being typed
		getElementbyId("guess").appendChild(information);

		// to see if the guess was right 
		if(randomGuess === event.key){
			getElementbyId("win").textContent = "Win: " + win++;
			

			// win then you get a point 
			if(win >= 1){
				
				getElementbyId("guessLeft").textContent = "Guess Left: " + 9;
				guessLeft = 8;
				//alert to tell you won
				alert("You won!");
			} 
			
		} 


		
		else{
			//if your guess is wrong 
			getElementbyId("guessLeft").textContent = "Guess Left: " + guessLeft--;
			
			
			if(guessLeft <= -1){

				
				getElementbyId("loss").textContent = "Loss: " + loss++;
				//alert to tell you that you lost
				alert("You Lost");

				//this starts again if you have no more guesses
				getElementbyId("guessLeft").textContent = "Guess Left: " + 9;
				guessLeft = 8;



			} 

		} 

} 


// =======================================================================
// --------Javascript for Crystal Collector. Daniel Milham 2016-----------
// =======================================================================

// ========picks random number between 19 and 120=========================

min = 19;
max = 120;
var computerPick = Math.floor(Math.random() * (max - min + 1)) + min;
	var	printguess = $('#computerPick');
 			printguess.addClass('computerPick');
		    printguess.attr('computerPick');
		    printguess.text("Dragon's Number:" + " " + computerPick);
		    console.log("computerPick is:" +" "+ "=" + " " +computerPick);

// Need something that generates a number based on a specific jewel=======
$( "#redGem" ).click(function() {	

redGem = (Math.floor(Math.random() * 10)+4);
			/*printredGem = $('#playerSum');
 			printredGem.addClass('playerSum');
		    printredGem.attr('playerSum');
		    printredGem.text()*/
		    console.log("redGem is:" +" "+ " " +redGem);
		   
		    
		}); 

$( "#blueGem" ).click(function() {

blueGem = (Math.floor(Math.random() * 15)+2);
			/*printblueGem = $('#playerSum');
 			printblueGem.addClass('playerSum');
		    printblueGem.attr('playerSum');
		    printblueGem.text()*/
		    console.log("blueGem is:" +" " + " " +blueGem);
		}); 

$( "#greenGem" ).click(function() {	

greenGem = (Math.floor(Math.random() * 10)+4);
			/*printgreenGem = $('#playerSum');
 			printgreenGem.addClass('playerSum');
		    printgreenGem.attr('playerSum');
		    printgreenGem.text()*/
		    console.log("greenGem is:" +" " + " " +greenGem);
		}); 

$( "#rubyGem" ) .click(function() {		

rubyGem = (Math.floor(Math.random() * 10)+7);
			/*printrubyGem = $('#playerSum');
 			printrubyGem.addClass('playerSum');
		    printrubyGem.attr('playerSum');
		    printrubyGem.text*/
		    console.log("rubyGem is:" +" "+ " " +rubyGem);
		}); 
// this will sum the variables and print the result
	
playerSum = (redGem) + (blueGem) + (greenGem) + (rubyGem);

	

// need to make a method to compare the user guess and the computer guess. if user is greater than computer user loses
if (printguess < playerSum){
	loses++
} 			 
			// ('#playerSum');
 			// printrubyGem.addClass('playerSum');
		  //   printrubyGem.attr('playerSum');
		  //   printrubyGem.text('playerSum')

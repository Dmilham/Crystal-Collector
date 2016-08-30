// picks random number between 19 and 120=================================
var min = 19; 
var max = 120; 
var dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;

	var	printguess = $('#dragonPick');
 			printguess.addClass('dragonPick');
		    printguess.attr('dragonPick');
		    printguess.text("Dragon's Number:" + " " + dragonPick);
		    console.log("dragonPick is:" +" "+ "=" + " " + dragonPick);

// need to make something that generates a number based on a specific jewel=====================================================================

$( "#redGem" ).click(function() {	
	 redGem = (Math.floor(Math.random() * 10)+4);
			
			printredGem = $('#playerSum');
 			printredGem.addClass('playerSum');
		    printredGem.attr('playerSum');
		    printredGem.text("Player Number:" + " " + redGem);
		    $('#valueRed').html(redGem);
		    console.log("redGem is:" +" "+ "=" + " " +redGem);
		}); 

$( "#blueGem" ).click(function() {	
	 blueGem = (Math.floor(Math.random() * 15)+2);
			
			printblueGem = $('#playerSum');
 			printblueGem.addClass('playerSum');
		    printblueGem.attr('playerSum');
		    printblueGem.text("Player Number:" + " " + blueGem);
		    $('#valueBlue').html(blueGem);
		    console.log("blueGem is:" +" "+ "=" + " " +blueGem);
		}); 

$( "#greenGem" ).click(function() {	
	 greenGem = (Math.floor(Math.random() * 10)+4);
			
			printgreenGem = $('#playerSum');
 			printgreenGem.addClass('playerSum');
		    printgreenGem.attr('playerSum');
		    printgreenGem.text("Player Number:" + " " + greenGem);
		    $('#valueGreen').html(greenGem);
		  	console.log("greenGem is:" +" "+ "=" + " " +greenGem);
		}); 
$( "#rubyGem" ).click(function() {		
	rubyGem = (Math.floor(Math.random() * 10)+7);
			
			printrubyGem = $('#playerSum');
 			printrubyGem.addClass('playerSum');
		    printrubyGem.attr('playerSum');
		    printrubyGem.text("Player Number:" + " " + rubyGem);
		    $('#valueRuby').html(rubyGem);
		    console.log("rubyGem is:" +" "+ "=" + " " +rubyGem);
		}); 
 				

// need to make a method to combine jewel values and display the sum value in playerSum===============================================================

// need to make a method to compare the user guess and the computer guess. if user is greater than computer user loses


 $(document).ready(function(){
// picks random number between 19 and 120============================================================================================================
	var min = 19; 
	var max = 120; 
	var dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
	var gemValue = 0;
	var redGem = Math.floor(Math.random() * 12)+1;
	var blueGem = Math.floor(Math.random() * 12)+1;
	var rubyGem = Math.floor(Math.random() * 12)+1;
	var greenGem = Math.floor(Math.random() * 12);+1;
	var counter = 1;

// This calls the dragonPick variable



// This generates the computers number===============================================================================================================
	var	printguess = $('#dragonPick');
	printguess.addClass('dragonPick');
    printguess.attr('dragonPick');
    printguess.text("Dragon's Number:" + " " + dragonPick);
    console.log("dragonPick is:" +" "+ "=" + " " + dragonPick);

// This generates a number when a specific jewel is clicked===========================================================================================
	$( "#redGem" ).click(function() {

// This combines the jewel values and display the sum value in playerSum div as "Player Guess:"=======================================================
		gemValue = gemValue + redGem;
		console.log("redGem is:" +" "+ "=" + " " +redGem);
		console.log("gemValue is:" +" "+ "=" + " " +gemValue);
		$('#playerSum').html("Player Guess:" +" "+ gemValue);

// This compares the user guess and the computer guess================================================================================================

		if   	(gemValue== dragonPick){

		    	alert ("winner");
		    	$("#playerSum").empty();
		    	$('#dragonPick').empty();
		    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
		    	$('#playerSum').html("Players Number:");
		    	wins++;
		 		gemValue = 0;
		 		console.log("gemValue is:" +" "+ "=" + " " +gemValue);
		    	document.getElementById("wins").innerHTML ="Wins:" + " " + counter++;
		    }
// If user is greater than computer user loses==========================================================================================================		  	else {
		    	
		    	if (gemValue > dragonPick){
		    		$('#dragonPick').empty();
		    		dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
			    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
			    	$("#playerSum").empty();
			    	$('#playerSum').html("Players Number:");
			    	gemValue = 0;
			    	losses++;
			    	console.log("gemValue is:" +" "+ "=" + " " +gemValue);
					document.getElementById("losses").innerHTML ="Losses:" + " " + counter++;

			    }
		    }
		 
		);


	$( "#blueGem" ).click(function() {	
// this combines the jewel values and display the sum value in playerSum div as "Player Guess:"==========================================================
		
		gemValue = gemValue + blueGem;
		$('#playerSum').html("Player Guess:" +" "+ gemValue);
		console.log("blueGem is:" +" "+ "=" + " " +blueGem);
		console.log("gemValue is:" +" "+ "=" + " " +gemValue);
		
// This compares the user guess and the computer guess===================================================================================================

		if   	(gemValue== dragonPick){

		    	alert ("winner");
		    	$("#playerSum").empty();
		    	$('#dragonPick').empty();
		    	dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
		    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
		    	$('#playerSum').html("Players Number:");
		        gemValue = 0;
		    	wins++;
		    	document.getElementById("wins").innerHTML ="Wins:" + " " + counter++;
		    }
		    
		  	else {
		    	if (gemValue > dragonPick){
// If user is greater than computer user loses==========================================================================================================
			    	$("#playerSum").empty();
			    	$('#dragonPick').empty();
			    	dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
			    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
			    	$('#playerSum').html("Players Number:");
			    	gemValue = 0;
			    	losses++;
			    	console.log("gemValue is:" +" "+ "=" + " " +gemValue);
					document.getElementById("losses").innerHTML ="Losses:" + " " + counter++;

			    }
		    }
		 
		});

$( "#greenGem" ).click(function() {	
			
			gemValue = gemValue + greenGem;
			console.log("gemValue is:" +" "+ "=" + " " +gemValue);
		    console.log("greenGem is:" +" "+ "=" + " " +greenGem);
		    $('#playerSum').html("Player Guess:" + " " +  gemValue);
// This compares the user guess and the computer guess================================================================================================
			
		if   	(gemValue== dragonPick){

		    	alert ("winner");
		    	$("#playerSum").empty();
		    	$('#dragonPick').empty();
		    	dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
		    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
		    	$('#playerSum').html("Players Number:");
		    	gemValue = 0;
		    	wins++;
		    	console.log("gemValue is:" +" "+ "=" + " " +gemValue);
		    	document.getElementById("wins").innerHTML ="Wins:" + " " + counter++;
		    }
// If user is greater than computer user loses==========================================================================================================		    
		  	else {
		    	if (gemValue > dragonPick){

			    	$("#playerSum").empty();
			    	$('#dragonPick').empty();
			    	dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
			    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
			    	$('#playerSum').html("Players Number:");
			    	gemValue = 0;
			    	losses++;
			    	console.log("gemValue is:" +" "+ "=" + " " +gemValue);
			    	document.getElementById("losses").innerHTML ="Losses:" + " " + counter++;

			    }
		    }
		 
		}); 

$( "#rubyGem" ).click(function() {		
// this combines the jewel values and display the sum value in playerSum div as "Player Guess:"==========================================================
				gemValue = gemValue + rubyGem;
				console.log("rubyGem is:" +" "+ "=" + " " +rubyGem);
		    	$('#playerSum').html("Player Guess:" +" "+ gemValue);
// This compares the user guess and the computer guess===================================================================================================

		if   	(gemValue== dragonPick){

		    	alert ("winner");
		    	$("#playerSum").empty();
		    	$('#dragonPick').empty();
		    	dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
		    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
		    	$('#playerSum').html("Players Number:");
		    	gemValue = 0;
		    	wins++;
		    	console.log("gemValue is:" +" "+ "=" + " " +gemValue);
		    	document.getElementById("wins").innerHTML ="Wins:" + " " + counter++;
		    }
// If user is greater than computer user loses==========================================================================================================		    
		  	else {
		    	if (gemValue > dragonPick){

			    	$("#playerSum").empty();
			    	$('#dragonPick').empty();
			    	dragonPick = Math.floor(Math.random() * (max - min + 1)) + min;
			    	$('#dragonPick').html("Dragon's Pick" + " " + dragonPick);
			    	$('#playerSum').html("Players Number:");
					gemValue = 0;
			    	losses++;
			    	console.log("gemValue is:" +" "+ "=" + " " +gemValue);
					document.getElementById("losses").innerHTML ="Losses:" + " " + counter++;

			    }
		    }
		 
		});

})

			 


		    
	
		
 				








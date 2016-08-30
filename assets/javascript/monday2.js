var redGem = "";
var blueGem = "";
var greenGem = "";
var rubyGem = "";
var dragonPick = "";
var playerSum="";

$("#btn-group").on("click", function(){;

dragonPick = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$('#dragonPick').html("Dragon's Number:" +"		 "+ dragonPick);
console.log(dragonPick)


$("#btn-group").on("click", function(){;

playerSum = $("#valuered, #valuegreen, #valueblue, #valueruby")()
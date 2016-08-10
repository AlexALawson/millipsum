//create ipsum//
function millipsumBank(elem){
	var millipsum = new Array("duh", 
	"omg", "bae", "netflix and chill?", "pokemon go", "bernie", "the struggle.", "AF", "literally.", "10/10", "tho",
	 "said no one ever", "I can't even", "#sorrynotsorry", "haters", "this.", "bro", "white girl", "first world probs", 
	 "rachet", "turnt", "lulz.", "burn", "foolishness", "basic", "thirsty", "THOT", "on fleek.", "it me", "fam", "no chill", "epic", "for reals", "turn down for what", 
	 "throw shade", "yasss", "bye felicia", "squad", "#goals", "cray", "hella", "flex", "mcm", "the feels", "swerve.", "woke.", "doe", "amirite?", "keep it 100", "tbh", "dat", "shots fired", 
	 "lit", "swipe right", "low key", "savage", "smh", "fail", "win", "lol", "you need to stop", "ICYMI", "TL;DR", "catfish", "slay", "facepalm", "swag");

	var minWord = 75; 
	var maxWord = 150; 

	var random = Math.floor(Math.random()**(maxWord - minWord)) + minWord; 

	var result = ""; 
	for (i = 0; i < random; i++){
		var newText = millipsum[Math.floor(Math.random()* (millipsum.length - 1 ))];
		if(result.substring(result.length-1, result.length) == "." || result.substring(result.length-1, result.length) == "?"){
			newText = newText.substring(0,1).toUpperCase() + newText.substring(1, newText.length); 
		}
		result += " " + newText; 
	}
	document.getElementById(elem).innerHTML = document.getElementById(elem).innerHTML + "<p id='ipsum'>" + result.substring(0, result.length-1) + ".</p>";
};

var answer = [
"You are right!",
"Definetly!",
"Thats more like it",
"I dont agree with you",
"Hmmm, im not sure",
"Your soul will be mine no matter what you say!",
"Dont get carried away",
"Life is short, dont worry about it",
"Dont worry , Be happy!",
"I hear you ",
"SHHH, did you hear that!?",
"ITS TIME!"

];


function response(){
	var string = Math.floor(Math.random()* 12);
	document.getElementById("response").innerHTML = answer[string];
	
}
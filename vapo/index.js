
	   document.getElementById("form1").onsubmit=function() {
	   
	   if(document.querySelector('input[name = "age"]:checked') &&  document.querySelector('input[name = "activity"]:checked') && document.querySelector('input[name = "genre"]:checked')){
	   
	   age = parseInt(document.querySelector('input[name = "age"]:checked').value);  
	  
	  activity = parseInt(document.querySelector('input[name = "activity"]:checked').value);
	   
	  genre = parseInt(document.querySelector('input[name = "genre"]:checked').value);
	   
	   total= age + activity + genre;
	   
	  
	   document.getElementById("answer").innerHTML = total;	   

	   if(total < 4) {
document.getElementById("answer2").innerHTML = "You got Quiet Company.";
}

   if(total >=4 && total < 7) {
document.getElementById("answer2").innerHTML = "You got Spoon.";
}
	
	if(total >=7) {
document.getElementById("answer2").innerHTML = "You got Willie Nelson.";
}   
}

else {
alert("Fill out all questions before submitting.");
}
		   
	   return false; // required to not refresh the page; just leave this here
	   }// end the submit function




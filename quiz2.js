var pos = 0, test, test_status, question, choices, chA, chB, chC, chD, correct = 0;
	var questions =[
	["What is 20 + 3?" , "23" , "17" , "15", "none of the above","A"],
	["What is 20 x 3?" , "60" , "23" , "600", "none of the above", "A"],
	["What is 21 / 3?" , "60" , "3" , "7", "none of the above" , "C"],
	["What is 20 - 3?" , "6" , "7" , "17", "none of the above" , "C"]	
	];
		function _(x){
			return document.getElementById(x);
		}
function renderQuestion(){
test = _("test");
if(pos >= questions.length){
	test.innerHTML = "<h2> You got "+correct+" of "+questions.length+" questions correct</h2>";
	 _("test_status").innerHTML ="Test Completed";
	 pos=0;
	 correct= 0;
	 return false;
}
 _("test_status").innerHTML ="Questions " +(pos+1)+" of " +questions.length;
 question = questions[pos][0];
 chA = questions[pos][1];
 chB = questions[pos][2];
 chC = questions[pos][3];
 chD = questions[pos][4];
  test.innerHTML = "<h3>" +question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+ "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+ "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+ "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+ "<br> <br>";
  test.innerHTML += "<button onclick = 'checkAnswer()'> Submit Answer</button>";
}	
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for( var i=0; i<choices.length; i++){
		if (choices[i].checked){
			choice= choices[i].value;
		}
	}
	if(choice == questions[pos][5]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load" , renderQuestion, false);
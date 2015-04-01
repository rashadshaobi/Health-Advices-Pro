// JavaScript Document
var x;
var y;
var sum;
  

  function m(){	
		 x= document.getElementById('num1').value;
		 y= document.getElementById('num2').value;
	     sum = +x / (+y * +y);
		 document.getElementById('res').innerHTML ="The result:";
	 if (sum>=18 && sum<=25){
	 document.getElementById('text').innerHTML ="The BMI= "+ sum + " ----> and this means it is:";
	 document.getElementById('t').innerHTML = "Good, the lenght and weight convenient.";	
	 document.getElementById("good").style.visibility = "visible"; 
	  document.getElementById("fat").style.visibility = "hidden";
     document.getElementById("scrawny").style.visibility = "hidden"; 
	 }
 else if (sum<=17){
	 document.getElementById('text').innerHTML ="The BMI= "+ sum + " ----> and this means it is:";
	 document.getElementById('t').innerHTML = "Bad, you are Scrawny. You need to eat some foods such as meat, eggs and other foods to make your lenght fits with your weight.";
	  document.getElementById("scrawny").style.visibility = "visible";
	   document.getElementById("good").style.visibility = "hidden";
	 document.getElementById("fat").style.visibility = "hidden";
	  
	   }   
else if (sum >= 26){ 
	document.getElementById('text').innerHTML ="The BMI= "+ sum + " ----> and this means it is:";
	 document.getElementById('t').innerHTML = "Bad, you are fat. You have to do diet, and my advice for you practice some sport to make your weight fits with your lenght.";
	  document.getElementById("fat").style.visibility = "visible"; 
	  document.getElementById("good").style.visibility = "hidden";
	 document.getElementById("scrawny").style.visibility = "hidden"; 
 }		 
}
	
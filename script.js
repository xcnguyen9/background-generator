var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.getElementById("randomColor");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColorGenerator() {
	var letters = '0123456789ABCDEF'; // assigns letters variable to all the possible letters in hex values
	var color = '#'; // assigns color variable to the unique # sign in hex value
  	for (var i = 0; i < 6; i++) { // generate random hex value through iterating variable letters to produce corresponding color  
    	color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

function randomGradient() {
	// assigns color1 and color2 values using randomColorGenerator method
	color1.value = randomColorGenerator(); 
	color2.value = randomColorGenerator();
	setGradient();
}

// add listeners to color1 input
color1.addEventListener("input", setGradient);

// add listeners to color2 input
color2.addEventListener("input", setGradient);

// add listeners to randomColor button
randomColor.addEventListener("click", randomGradient);

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var RandomBtn = document.querySelector('.randomButton');

function setGradient(){
	body.style.background = 
	'linear-gradient(to right, ' 
	+ color1.value 
	+ ', ' 
	+ color2.value 
	+ ')';

	css.textContent = body.style.background;
}

// Random Color function
function randomColors() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

RandomBtn.addEventListener('click', function(){
	color1.value = randomColors();
	color2.value = randomColors();
	setGradient();
})


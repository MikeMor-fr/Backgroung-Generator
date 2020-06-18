let css = document.querySelector('h3');
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.querySelector(".randomButton");

setBackgroundColor = () => { 
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background; 
}

randomColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

color1.addEventListener("input", setBackgroundColor);
color2.addEventListener("input", setBackgroundColor);

randomBtn.addEventListener("click", () => {
	color1.value = randomColor();
	color2.value = randomColor();
	setBackgroundColor();
})
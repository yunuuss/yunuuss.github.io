let range = document.getElementById("range");
let header = document.getElementById("value");
let container = document.getElementById("container");
let toggle = document.getElementById("toggle-switch");

let isChecked = false;

update();

toggle.onchange = () => {
	isChecked = !toggle.checked;
	console.log(isChecked);
	update();
};

range.oninput = () => {
	update();
};

function update() {
	if (isChecked) {
		let val = celsiusToFahrenheit(range.value);
		header.innerText = val + "°C";
	} else {
		header.innerText = range.value + "°F";
	}

	let value = parseInt(range.value, 10) + 125;
	let r = value;
	let g = 255 - 255 * (Math.abs(value - 127) / 128);
	let b = 255 - value;
	let color = `rgb(${r}, ${g}, ${b})`;
	container.style.background = color;

	let br = r - 50;
	let bg = g - 50;
	let bb = b - 50;
	let bcolor = `rgb(${br}, ${bg}, ${bb})`;
	container.style.boxShadow = `15px 15px 2px 1px ${bcolor}`;
}

function celsiusToFahrenheit(fahrenheit) {
	return (celsius = Math.round((fahrenheit - 32) / 1.8));
}
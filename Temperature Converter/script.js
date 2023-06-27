fahrenheit = document.querySelector("#fahrenheit-ip");
celsius = document.querySelector("#celsius-ip");
tempConvert = document.querySelector("#temp-conv-btn");

var tempSwitch = true

function changeFocus1(val) {
	tempSwitch = val;
}

tempConvert.addEventListener
(
	"click",
	() =>
	{
		if(tempSwitch == 1)
			fahrenheit.value = (parseInt(celsius.value) * 1.8) + 32;
		else
			celsius.value = (parseInt(fahrenheit.value) - 32) / 1.8;
	}
);


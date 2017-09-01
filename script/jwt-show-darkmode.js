document.addEventListener("DOMContentLoaded", function(event) { 
	getLatLng();
	toggle();
	if (document.getElementById("prefer-darkmode") != null) {
		document.getElementById("prefer-darkmode").checked = doesPreferDarkmode();
	}
});

function getLatLng() {
	fetch('https://ipinfo.io/json')
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			var lat = parseFloat(json.loc.split(',')[0]);
			var lng = parseFloat(json.loc.split(',')[1]);
			localStorage.setItem("lat", lat);
			localStorage.setItem("lng", lng);
			toggle();
		});
}

function toggle() {
	if (doesPreferDarkmode()) {
		toggleDarkmode(true);
	} else {
		var lat = localStorage.getItem("lat");
		var lng = localStorage.getItem("lng");
		if (lat && lng) {
			var now = new Date();
			var sun = SunCalc.getTimes(now, lat, lng);
			var timeForDarkmode = now >= sun.sunsetStart || now <= sun.sunrise;
			toggleDarkmode(timeForDarkmode);
		}
	}
}

function doesPreferDarkmode() {
	return localStorage.getItem("preferDarkmode") === "true";
}

function setDarkmodePreference() {
	var preferDarkmode = document.getElementById("prefer-darkmode").checked.toString();
	localStorage.setItem("preferDarkmode", preferDarkmode);
	toggle();
}

function toggleDarkmode(enable) {
	document.getElementsByTagName("body")[0].className = enable ? "dark" : "light";
}

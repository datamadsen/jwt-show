window.onload = function() {
	getLatLng();
	toggle();
	document.getElementById("prefer-darkmode").checked = doesPreferDarkmode();
}

function getLatLng() {
	fetch('https://ipinfo.io/json')
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			var lat = Number.parseFloat(json.loc.split(',')[0]);
			var lng = Number.parseFloat(json.loc.split(',')[1]);
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
			toggleDarkmode(SunCalc.getTimes(new Date(), lat, lng).sunsetStart <= new Date());
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

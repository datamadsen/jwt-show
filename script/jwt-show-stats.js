document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("encoded").addEventListener("change", function() {
		fetch("/stats/decode.html", {cache: "no-cache"});
	});

	document.getElementById("prefer-darkmode").addEventListener("change", function(event) {
		if (event.target.checked) {
			fetch("/stats/prefer-darkmode-true.html", {cache: "no-cache"});
		} else {
			fetch("/stats/prefer-darkmode-false.html", {cache: "no-cache"});
		}
	});
});

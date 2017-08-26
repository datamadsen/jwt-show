document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("encoded").addEventListener("change", function() {
		fetch("/stats/decode.html");
	});

	document.getElementById("prefer-darkmode").addEventListener("change", function(event) {
		if (event.target.checked) {
			fetch("/stats/prefer-darkmode-true.html");
		} else {
			fetch("/stats/prefer-darkmode-false.html");
		}
	});
});

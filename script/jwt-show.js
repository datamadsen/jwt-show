document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('encoded').focus();
	var querystringParameter = getParameterByName("jwt");
	if (querystringParameter)
	{
		document.getElementById('encoded').value = querystringParameter;
		document.getElementById('encoded').onchange();
    }
    document.clipboard = new ClipboardJS('#copy-button');
});

function decode() {
	setTimeout(function() {
		try {
			var encoded = document.getElementById('encoded').value;

			if (encoded === "") {
				document.getElementById('decoded').textContent = "";
				return;
			}

			var urlEncodedPayload = encoded.split('.')[1];
			var base64Payload = urlEncodedPayload.replace('-', '+').replace('_', '/');
			var payloadString = decodeURIComponent(escape(atob(base64Payload)));
			var payload = JSON.parse(payloadString);
			if ("exp" in payload) {
				countdown(payload.exp * 1000);
			} else {
				clearCountdown();
			}
			document.getElementById('decoded').textContent = JSON.stringify(payload, null, 2);
			document.getElementById('encoded').blur();
			if ("hljs" in window)
				hljs.highlightBlock(document.getElementById('decoded'));
		}
		catch (e) {
			document.getElementById('decoded').textContent = "invalid jwt";
			clearCountdown();
		}
	}, 0);
}

function countdown(expirationDate) {
	expirationDate = new Date(expirationDate).getTime();

	if (window.countdownInterval)
		clearInterval(window.countdownInterval);

	window.countdownInterval = setInterval(function() {
		var remaining = (expirationDate - new Date().getTime()) / 1000;
		var minutes = parseInt(remaining / 60);
		var seconds = parseInt(remaining % 60);

		if (minutes <= 0) {
			document.getElementById('expiration').className = "expired";
			document.getElementById('expire-text-front').innerHTML = "expired";
			document.getElementById('expire-text-rear').innerHTML = "ago on " + new Date(expirationDate);
		} else {
			document.getElementById('expiration').className = "not-expired";
			document.getElementById('expire-text-front').innerHTML = "expires in";
			document.getElementById('expire-text-rear').innerHTML = "on " + new Date(expirationDate);
		}

		document.getElementById('expire-countdown').innerHTML = makeCountdownString(minutes, seconds);
	}, 500);
}

function makeCountdownString(minutes, seconds) {
	var result = "";

	if (Math.abs(minutes) < 10)
		result += "0";

	result += Math.abs(minutes);

	result += ":";

	if (Math.abs(seconds) < 10)
		result += "0";

	result += Math.abs(seconds);

	return result;
}

function clearCountdown() {
	if (window.countdownInterval)
		clearInterval(window.countdownInterval);

	document.getElementById('expire-text-front').innerHTML = "";
	document.getElementById('expire-text-rear').innerHTML = "";
	document.getElementById('expire-countdown').innerHTML = "";
}

function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

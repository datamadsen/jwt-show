window.onload = function() {
	document.getElementById('encoded').focus();
	var querystringParameter = getParameterByName("jwt");
	if (querystringParameter)
	{
		document.getElementById('encoded').value = querystringParameter;
		document.getElementById('encoded').onchange();
	}
}

function decode() {
	setTimeout(function() {
		try {
			var encoded = document.getElementById('encoded').value;
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
			document.getElementById('expire-text-front').innerHTML = "expired";
			document.getElementById('expire-text-rear').innerHTML = "ago (" + new Date(expirationDate) + ")";
		} else {
			document.getElementById('expire-text-front').innerHTML = "expires in";
			document.getElementById('expire-text-rear').innerHTML = "(" + new Date(expirationDate) + ")";
		}

		if (Math.abs(minutes) <= 1 && Math.abs(minutes) > 0) {
			document.getElementById('expire-minutes-text').innerHTML = "minute";
		} else {
			document.getElementById('expire-minutes-text').innerHTML = "minutes";
		}

		if (Math.abs(seconds) <= 1 && Math.abs(seconds) > 0) {
			document.getElementById('expire-seconds-text').innerHTML = "second";
		} else {
			document.getElementById('expire-seconds-text').innerHTML = "seconds";
		}

		document.getElementById('expire-minutes').innerHTML = Math.abs(minutes);
		document.getElementById('expire-seconds').innerHTML = Math.abs(seconds);
	}, 500);
}

function clearCountdown() {
	if (window.countdownInterval)
		clearInterval(window.countdownInterval);

	document.getElementById('expire-text-front').innerHTML = "";
	document.getElementById('expire-text-rear').innerHTML = "";
	document.getElementById('expire-minutes').innerHTML = "";
	document.getElementById('expire-minutes-text').innerHTML = "";
	document.getElementById('expire-seconds').innerHTML = "";
	document.getElementById('expire-seconds-text').innerHTML = "";
}

function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

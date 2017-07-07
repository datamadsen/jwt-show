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
			document.getElementById('decoded').textContent = JSON.stringify(payload, null, 2);
			document.getElementById('encoded').blur();
		}
		catch (e) {
			document.getElementById('decoded').textContent = "invalid jwt";
		}
	}, 0);
}

function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

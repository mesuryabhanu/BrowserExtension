chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.action == "xhttp") {
        var xhttp = new XMLHttpRequest();
        var method = request.method ? request.method.toUpperCase() : 'GET';
        xhttp.open(method, request.url, true);
		xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(request.data));
        xhttp.onload = function() {
            callback(xhttp.responseText);
        };
        return true
    }
});
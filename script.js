window.onload = function() {
	document.querySelector("#app > div.ms-Fabric > div:nth-child(2) > div > div > div:nth-child(4), #app > div.ms-Fabric > div:nth-child(2) > div > div:nth-child(2)").remove();
	// make sure
	setTimeout(function() {
		document.querySelector("#app > div.ms-Fabric > div:nth-child(2) > div > div > div:nth-child(4), #app > div.ms-Fabric > div:nth-child(2) > div > div:nth-child(2)").remove()
	}, 1000);
};
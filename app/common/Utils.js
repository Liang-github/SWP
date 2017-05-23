

let Util = {

	get: (url, successCallback, failCallback) => {
		fetch(url)
		.then((response) => response.text())
		.then((responseText) => {
			successCallback(JOSN.parse(responseText));
		})
		.catch((err) => {
			failCallback(err);
		})
	}
}

export default Util;
export function getQuery(querystring) {
	//GET request
	const res = fetch("http://192.168.29.195:8080/get/" + querystring, {
		method: "GET",
		//Request Type
	});
	const res2 = res.then((response) => response.json())
		//If response is in json then in success
		.then((responseJson) => {
			//Success
            console.log(JSON.stringify(responseJson)+querystring);
            console.log(responseJson+querystring);
			alert(JSON.stringify(responseJson));
            return responseJson;
		})
		//If response is not in json then in error
		.catch((error) => {
			//Error
			console.error(error);
		});
}

export function postQuery(querystring) {
	//POST json
	fetch("http://192.168.29.195:8080/post", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			querystring: querystring,
		}),
	})
		.then((response) => {
			alert(response.text());
			response.json();
		})
		//If response is in json then in success
		.then((responseJson) => {
			//Success
			alert(JSON.stringify(responseJson));
			console.log(responseJson);
		})
		//If response is not in json then in error
		.catch((error) => {
			//Error
			alert(JSON.stringify(error));
			console.error(error);
		});
}

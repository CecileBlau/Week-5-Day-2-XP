
// let request = new XMLHttpRequest();

// function requestData () {
// 	request.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
// 	request.responseType = 'json'; 
// 	request.send();
// }

// request.onload = function() {
// 	if (request.status != 200) {
// 		console.log("error status")
// 		displayError(request)
// 	} else {
// 		console.log("Finished Loading")
// 		console.log(request.response)
// 		displayUser(request.response) 
// 	}
// };

// function displayUser(userArr){
// 	console.log()
// }
// displayUser()




function requestData () {
	let request = new XMLHttpRequest();
	request.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
	request.responseType = 'json'; 
	request.send();


	request.onload = function() {
		if (request.status != 200) {
			console.log("error status")
			displayError(request)
		} else {
			
			console.log(request.response)

		}
	};
}
requestData()

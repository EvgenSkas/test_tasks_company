window.onload = function() {

	function handlerMessage(event){

		if (event.origin !== 'http://localhost:8080') return false;
		console.log(JSON.parse(event.data));
	}

	const readLocalStorage = () => {
		let win = window.frames.target;

		win.postMessage(JSON.stringify("read"), "http://localhost:8080");

		window.addEventListener('message', handlerMessage);
	}


	const removeValLocalStorage = (obj) => {
		let win = window.frames.target;
		let key = Object.keys(obj)[0];
		let messageObj = {[key]: obj[key], value: "del"};

		win.postMessage(JSON.stringify(messageObj), "http://localhost:8080");

		window.addEventListener('message', handlerMessage);
	}


	const setValLocalStorage = (obj) => {
		let win = window.frames.target;

		win.postMessage(JSON.stringify(obj), "http://localhost:8080");

		window.addEventListener('message', handlerMessage);
	}


	setValLocalStorage({user: 'EvgenSk'});

	removeValLocalStorage({admin: 'Gora'});

	readLocalStorage();

}


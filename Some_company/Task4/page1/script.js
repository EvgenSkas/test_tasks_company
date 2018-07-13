
window.onload = function() {

localStorage.setItem('admin', 'EvgSk');

function listener(event) {
	let storage = this.localStorage;
	let message = JSON.parse(event.data);

	if (event.origin != 'http://localhost:8000') return false;

	switch( typeof(message) ) {
		case 'string':

			parent.postMessage(JSON.stringify(storage), 'http://localhost:8000');
			break;

		case 'object':

			let key = Object.keys(message)[0];
			let keyVal = Object.keys(message)[1];

			if(message[keyVal] === 'del') {
				localStorage.removeItem(key, message[key]);
				parent.postMessage(JSON.stringify("removed"), 'http://localhost:8000');
				break;
			}
		localStorage.setItem(key, message[key]);
		parent.postMessage(JSON.stringify("written"), 'http://localhost:8000');
		break;
	}
}

	window.addEventListener("message", listener);
	
}
let button = document.getElementById('button');


function loadPhones(url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url);

		xhr.onload = function() {
			if (xhr.status === 200) {
				resolve(xhr.response);
			} else {
				reject(xhr.status + ': ' + xhr.statusText);
			}
		}

		xhr.send();	

		button.innerHTML = 'Загружаю...';
		button.disabled = true;

	})

}

button.addEventListener('click', () => {
	let req1 = loadPhones('phones.json')
		.then(response => {
			let phones = JSON.parse(response);
			console.log(phones)
		});
	let req2 = loadPhones('mebel.json')
		.then(response => {
			let mebel = JSON.parse(response);
			console.log(mebel)
		});
	Promise.all([req1, req2])
		.then(() => {
			button.innerHTML = 'Загружено';
			console.log('оба ответа получены')
		})
		.catch(err => console.log(err));
});

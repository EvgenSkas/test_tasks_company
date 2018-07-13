const getQueryString = () => {
	let args = {};
	let query = location.search.substring(1);
	let pairs = query.split("&");

	for( let i = 0; i < pairs.length; i++) {

		let pos = pairs[i].indexOf('=');
		if (pos == -1) {
			continue;
		}

		let argname = pairs[i].substring(0, pos);
		let value = pairs[i].substring(pos + 1);

		args[argname] = value;
	}

	return args;

}

const setLoadValue = () => {
	let args = getQueryString();
	let argsColor = args.color.split(',');
	let argsManufacturer = args.manufacturer.split(',');

	document.querySelector(`input[value="${args.size}"]`).checked = true;

	for(let i = 0; i < argsColor.length; i++) {
		document.querySelector(`input[value="${argsColor[i]}"]`).checked = true;
	}

	for(let i = 0; i < argsManufacturer.length; i++) {
		document.querySelector(`option[value="${argsManufacturer[i]}"]`).selected = true;
	}

}

const getUrlParams = () => {
	let argsElemsSize = document.querySelectorAll(`input[name="size"]`);
	let argsElemsColor = document.querySelectorAll(`input[name="color"]`);
	let argsElemsManufacturer = document.querySelectorAll(`option[name="manufacturer"]`);

	let sizeObj = {};
	let colorObj = {
		color: []
	};
	let manufacturerObj = {
		manufacturer: []
	};

	for(let i = 0; i < argsElemsSize.length; i++) {
		if(argsElemsSize[i].checked) {
			sizeObj[argsElemsSize[i].name] = argsElemsSize[i].value;
		}
	}

	for(let i = 0; i < argsElemsColor.length; i++) {
		if(argsElemsColor[i].checked) {
			colorObj.color.push(argsElemsColor[i].value);
		}
	}

	for(let i = 0; i < argsElemsManufacturer.length; i++) {
		if(argsElemsManufacturer[i].selected) {
			manufacturerObj.manufacturer.push(argsElemsManufacturer[i].value)
		}
	}

	console.log(`?size=${sizeObj.size}&color=${colorObj.color.join(',')}&manufacturer=${manufacturerObj.manufacturer.join(',')}`)

}

setLoadValue();


const handle = event => {
  if (event.target.tagName === 'INPUT' || 'SELECT') {
		getUrlParams();
  }
}

document.querySelector('form').addEventListener('change', handle);






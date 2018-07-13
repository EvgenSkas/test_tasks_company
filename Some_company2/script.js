let cityes = [
  ["Nashville, TN", 36.17, -86.78],
  ["New York, NY", 40.71, -74.00],
  ["Atlanta, GA", 33.75, -84.39],
  ["Denver, CO", 39.74, -104.98],
  ["Seattle, WA", 47.61, -122.33],
  ["Los Angeles, CA", 34.05, -118.24],
  ["Memphis, TN", 35.15, -90.05]
];

class Map {
  constructor( cityes ) {             
     this.cityes = cityes.map( city => {

			let cityName = city[0].split(', ')[0];
			let cityAbb = city[0].split(', ')[1];

			return { 
				name: cityName,
				abb: cityAbb,
				cityLatitude: city[1],
				cityLongitude: city[2]
			};
		});
  }

  directionCity( direction ) {

		const cityObject = this.cityes;

		switch ( direction ) {
			case 'northernmost':
				return cityObject.sort( ( city1, city2 ) => {
					return city1.cityLatitude - city2.cityLatitude;
				})[cityObject.length - 1].name;
			case 'southernmost':
				return cityObject.sort( ( city1, city2 ) => {
					return city1.cityLatitude - city2.cityLatitude;
				})[0].name;
			case 'westernmost':
				return cityObject.sort( ( city1, city2 ) => {
					return city1.cityLongitude - city2.cityLongitude;
				})[0].name;
			case 'easternmost':
				return cityObject.sort( ( city1, city2 ) => {
					return city1.cityLongitude - city2.cityLongitude;
				})[cityObject.length - 1].name;
		}
	}

  nameCity( latitude, longitude ) {

		let newCityObject = this.cityes.map( city => {
			let distanceCity = Math.sqrt(( city.cityLatitude - latitude ) ** 2 + ( city.cityLongitude - longitude ) ** 2);
				return {
					name: city.name,
					distance: distanceCity
				}
		}).sort( ( city1, city2 ) => {
			return city1.distance - city2.distance;
		});
		return newCityObject[0].name;
  }

  getNamesStates() {
		let newNamesCity = [];
		this.cityes.map( city => {
			if( newNamesCity.indexOf(city.abb) === -1 ) newNamesCity.push( city.abb );
		})	
		return newNamesCity.join(' ').trim();
  }
};

let newMap = new Map( cityes );

let directionCity = newMap.directionCity( 'northernmost' );

let nameCity = newMap.nameCity( 39.75, -104.39 );

let namesStates = newMap.getNamesStates();


console.log(directionCity);

console.log(nameCity);

console.log(namesStates);

console.log(newMap);
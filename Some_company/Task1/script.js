let input = document.querySelector( 'input' );
let currentValue = input.value;

input.addEventListener('input', ( e ) => {
	let target = e.target;
	target.value !== currentValue ? target.classList.add( "red" ) : target.classList.remove( "red" );
});

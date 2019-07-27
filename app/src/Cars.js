import React from 'react';

function CarCard(props) {
	return (
		<div>
			<img src={props.car.thumbnail.url} />
			<p>{props.car.manufacturer} {props.car.model} {props.car.edition}</p>
		</div>
	);
}

export function CarsList(props) {
	const carsCards = props.cars.map(car => <CarCard car={car}/>);
	return (
		<div>
			{carsCards}
		</div>
	);
}
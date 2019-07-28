import React from 'react';
import './Cars.css';

function CarCard(props) {
	console.log(props);
	const style = {
		backgroundImage: 'url(http://localhost:1337' + props.car.thumbnail.url + ')'
	};
	return (
		<div style={style} className="Car-card">
			<div className="Car-cardOverlay">
				<h3>{props.car.manufacturer} {props.car.model} {props.car.edition}</h3>
			</div>
		</div>
	);
}

export function CarsList(props) {
	const carsCards = props.cars.map(car => <CarCard car={car}/>);
	return (
		<div className="Car-list">
			{carsCards}
		</div>
	);
}
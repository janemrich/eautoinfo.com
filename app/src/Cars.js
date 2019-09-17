import React from 'react';
import './Cars.css';
import {Card, Box, CardActions, CardActionArea, CardContent, Typography, CardMedia, CardHeader, CardText} from '@material-ui/core';

function CarCard(props) {
	console.log(props);
	const style = {
		backgroundImage: 'url(https://api.eautoinfo.com' + props.car.thumbnail.url + ')',
	};
	return (
		<Card className="car-card">
			<CardActionArea>
				<CardMedia className="car-media"
					image={'https://api.eautoinfo.com' + props.car.thumbnail.url}
				/>
				<CardContent>
					<Typography variant="h6" component="h2">
            			{ props.car.manufacturer + ' ' + props.car.model + ' ' + props.car.edition}
          			</Typography>
					<Typography color="h6" component="h2">
            			{ (props.car.price_de).toLocaleString('de-DE', {
																			style: 'currency',
																			currency: 'EUR',
																			maximumFractionDigits: '2',}) }
          			</Typography>
					<Typography component="p">
          	{ 'Reichweite: ' +  props.car.range_wlpt + ' km' } <br />
						{ 'Effizienz: ' +  props.car.efficiency + ' kWh/100km' }
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
		
	);
}

export function CarsList(props) {
	const carsCards = props.cars.map(car => <CarCard car={car}/>);
	return (
		<Box className="Car-list">
			{carsCards}
		</Box>
	);
}

import React from 'react';
import './Cars.css';
import {Card, Box, CardActions, CardActionArea, CardContent, Typography, CardMedia, CardHeader, CardText, Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BatteryStdIcon from '@material-ui/icons/BatteryStd';
import EcoIcon from '@material-ui/icons/Eco';

function CarCard(props) {
	console.log(props);

	const style = {
		backgroundImage: 'url(https://api.eautoinfo.com' + props.car.thumbnail.url + ')',
	};
	return (
		<Card className="car-card">
			<CardActionArea  onClick={ () => props.onClick(props.car.id) }>
				<CardMedia className="car-media"
					image={'https://api.eautoinfo.com' + props.car.thumbnail.url}
				>
				</CardMedia>
				<CardContent className="card-content">
					<Typography variant="h6" component="h2">
						{ props.car.manufacturer
							+ ' ' + props.car.model
							+ ' ' + props.car.edition
						}
          			</Typography>
					<Typography color="h6" component="h2">
            			{ (props.car.price_de).toLocaleString('de-DE', {
								style: 'currency',
								currency: 'EUR',
								maximumFractionDigits: '2',}) }
          			</Typography>
				<div>
					{/*<Typography component="p">
          				{ 'Reichweite: ' +  props.car.range_wlpt + ' km' } <br />
						{ 'Verbrauch: ' +  props.car.efficiency + ' kWh/100km' }
					</Typography>
					*/}<div class="metric-container">
						<div className="car-metric">
							<div className="metric-title">
								<BatteryStdIcon />
							</div>
							<div className="metric-cell">
								{ props.car.range_wlpt + ' km' }
							</div>
						</div>
						<div className="car-metric">
							<div className="metric-title">
							<EcoIcon />
							</div>
							<div className="metric-cell">
								{ props.car.efficiency + ' kWh/100km' }
							</div>
						</div>
					</div>
				</div>
				</CardContent>
			</CardActionArea>
			<Button className="add-button"
				color="primary"
				onClick={ () => props.onAddClick(props.car.id) }>
				<AddIcon />
				vergleiche
			</Button>
		</Card>
	);
}

export function CarsList(props) {
	const carsCards = props.cars.map(car => <CarCard
												car={car}
												onClick={(id) => props.onClick(id) }
												onAddClick={(id) => props.onAddClick(id)}
											/>);
	return (
		<Box className="Car-list"> 
			{carsCards}
		</Box>
	);
}

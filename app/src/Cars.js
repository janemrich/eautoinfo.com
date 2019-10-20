import React from 'react';
import './Cars.css';
import {Card, Box, CardActions, CardActionArea, CardContent, Typography, CardMedia, CardHeader, CardText, Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BatteryStdIcon from '@material-ui/icons/BatteryStd';
import EcoIcon from '@material-ui/icons/Eco';
import EvStationIcon from '@material-ui/icons/EvStation';
import SpeedIcon from '@material-ui/icons/Speed';
import TimerIcon from '@material-ui/icons/Timer';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

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
				<div>
					<div class="metric-container">
						<div className="car-metric">
							<div className="metric-title">
								<EuroSymbolIcon />
							</div>
							<div className="metric-cell">
								{ (props.car.price_de).toLocaleString('de-DE', {
										style: 'currency',
										currency: 'EUR',
										maximumFractionDigits: '2',}) }
							</div>
						</div>
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
								<TimerIcon /> 0 - 100
							</div>
							<div className="metric-cell">
								{ props.car.acceleration + ' s'}
							</div>
						</div>
					</div>
					<div className="metric-container">
						<div className="car-metric">
							<div className="metric-title">
								<SpeedIcon />
							</div>
							<div className="metric-cell">
								{ props.car.top_speed + ' km/h'}
							</div>
						</div>
						<div className="car-metric">
							<div className="metric-title">
								<EvStationIcon />
							</div>
							<div className="metric-cell">
								{ props.car.fast_charge + ' km/h'}
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

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
import { styled } from '@material-ui/styles';

function CarCard(props) {
	console.log(props);

	const style = {
		backgroundImage: 'url(https://api.eautoinfo.com' + props.car.thumbnail.url + ')',
	};

	const greenTimerIcon = styled(TimerIcon)({
		color: 'green',
	});
	return (
		<Card className="car-card">
			<div className="car-action-area">
			{//<CardActionArea  className="car-action-area" >
			}
				<CardMedia className="car-media"
					image={'https://api.eautoinfo.com' + props.car.thumbnail.url}
					onClick={ () => props.onClick(props.car.id) }
				>
				</CardMedia>
				<CardContent className="card-content">
					<div className="card-top">
						<Typography className="Car-name"
							variant="h6"
							component="h2"
							onClick={ () => props.onClick(props.car.id) }
						>
							{ props.car.manufacturer
								+ ' ' + props.car.model
								+ ' ' + props.car.edition
							}
						</Typography>
						<Button className="add-button"
							color="primary"
							onClick={ () => props.onAddClick(props.car.id) }>
							<AddIcon />
							vergleichen
						</Button>
					</div>
					<div className="car-metric-group">
						<div class="metric-container"
							onClick={ () => props.onClick(props.car.id) }
						>
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
									<TimerIcon className={greenTimerIcon} /> 0 - 100
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
								<EcoIcon/>
								</div>
								<div className="metric-cell">
									{ props.car.efficiency + ' kWh/100km' }
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			{//</CardCardActionArea>
			}
			</div>
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

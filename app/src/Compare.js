import React from 'react' 
import { Box, Paper} from '@material-ui/core';
import {Bar} from './Bar.js'
import './Compare.css';
import { Redirect } from 'react-router';

import BatteryStdIcon from '@material-ui/icons/BatteryStd';
import EcoIcon from '@material-ui/icons/Eco';
import EvStationIcon from '@material-ui/icons/EvStation';
import SpeedIcon from '@material-ui/icons/Speed';
import TimerIcon from '@material-ui/icons/Timer';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

class Compare extends React.Component {
  state = {
	cars: this.props.location.state.cars,
	showCompare: true,
  }

  handleMainClick() {
	  this.setState({ showCompare: false });
  }

  render() {
	if (!this.state.showCompare) {
		return <Redirect to={'/'}></Redirect>
	}
		return (
				<div className="App">
					<Bar onClick={ () => this.handleMainClick()}
					/>
					<Paper className="Compare-paper">
						<CompareList cars={this.state.cars}/>
					</Paper>
				</div>
		);
	}
}

function CompareList(props) {
	const carsCards = props.cars.map(car => <CompareBox car={car} />);

	return (
		<div className="Compare-table">
			<Categories/>
			{carsCards}
		</div>
	);
}

function CompareBox(props) {
	console.log(props);

	return (
		<div>
			<h1 className="Compare-name">
				{ props.car.manufacturer
					+ ' ' + props.car.model
					+ ' ' + props.car.edition
				}
			</h1>
			<div className="Compare-image-container">
				<img 
					className="Compare-image"
					src={ 'https://api.eautoinfo.com' + props.car.thumbnail.url}>
				</img>
			</div>
			
			<div className="Compare-data">
				{ (props.car.price_de).toLocaleString('de-DE', {
						style: 'currency',
						currency: 'EUR',
						maximumFractionDigits: '2',}) }
			</div>
			<div className="Compare-data">
					{ props.car.range_wlpt + ' km' }
			</div>
			<div className="Compare-data">
					{ props.car.top_speed + ' km/h'}
			</div>
			<div className="Compare-data">
					{ props.car.acceleration + ' s'}
			</div>
			<div className="Compare-data">
					{ props.car.fast_charge + ' km/h'}
			</div>
			<div className="Compare-data">
					{ props.car.efficiency + ' kWh/100km' }
			</div>
		</div>
	);
}

function Categories(props) {
	return (
		<div className="Compare-metric-group">
			<div className="Compare-spacer"></div>
			<div className="Compare-metric">
				<div className="metric-title">
					<EuroSymbolIcon />
				</div>
				<div className="metric-cell">
					Preis
				</div>
			</div>
			<div className="Compare-metric">
				<div className="metric-title">
					<BatteryStdIcon />
				</div>
				<div className="metric-cell">
					Reichweite
				</div>
			</div>
			<div className="Compare-metric">
				<div className="metric-title">
					<TimerIcon/> 0 - 100
				</div>
				<div className="metric-cell">
					Beschleunigung
				</div>
			</div>
			<div className="Compare-metric">
				<div className="metric-title">
					<SpeedIcon />
				</div>
				<div className="metric-cell">
					Höchstgeschwindigkeit
				</div>
			</div>
			<div className="Compare-metric">
				<div className="metric-title">
					<EvStationIcon />
				</div>
				<div className="metric-cell">
					Schnell-Laden
				</div>
			</div>
			<div className="Compare-metric">
				<div className="metric-title">
				<EcoIcon/>
				</div>
				<div className="metric-cell">
					Verbrauch
				</div>
			</div>
		</div>
		)
	}
export default Compare
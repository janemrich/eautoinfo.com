import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {Bar} from './Bar.js'
import './Detail.css';
import { Redirect } from 'react-router';

class Detail extends React.Component {
  state = {
	cars: [],
	showDetail: true,
  }

  componentDidMount() {
    fetch('https://api.eautoinfo.com/cars/' + this.props.match.params.id)
    .then(res => res.json())
    .then((data) => {
      this.setState({ cars: [data]})
		})
    .catch(console.log);
  }

  handleMainClick() {
	  this.setState({ showDetail: false });
  }

  render() {
	if (!this.state.showDetail) {
		return <Redirect to={'/'}></Redirect>
	}
		return (
				<div className="App">
					<Bar onClick={ () => this.handleMainClick()}
					/>
					<CarsListb cars={this.state.cars}/>
				</div>
		);
	}
}

function CarsListb(props) {
	const carsCards = props.cars.map(car => <CarCardb car={car} />);

	return (
		<Box className="Car-list"> 
			{carsCards}
		</Box>
	);
}

function CarCardb(props) {
	console.log(props);

	return (
		<div>
		<Paper className="Detail-paper">
			<h1 className="Detail-name">
				{ props.car.manufacturer
					+ ' ' + props.car.model
					+ ' ' + props.car.edition
				}
			</h1>
			<img src={ 'https://api.eautoinfo.com' + props.car.thumbnail.url}></img>
			<h2 className="Detail-price">
				{ (props.car.price_de).toLocaleString('de-DE', {
						style: 'currency',
						currency: 'EUR',
						maximumFractionDigits: '2',}) }
			</h2>
		</Paper>
		<Paper className="Detail-paper">
			<div className="Detail-metrics">
			<table className="Detail-table">
			<tr>
				<td>
					Reichweite
				</td>
					{ props.car.range_wlpt + ' km' }
			</tr>
			<tr>
				<td>
					Höchstgeschwindigkeit
				</td>
					{ props.car.top_speed + ' km/h'}
			</tr>
			<tr>
				<td>
					0 - 100 km/h
				</td>
					{ props.car.acceleration + ' s'}
			</tr>
			<tr>
				<td>
					Schnell-Laden
				</td>
					{ props.car.fast_charge + ' km/h'}
			</tr>
			<tr>
				<td>
					Verbrauch
				</td>
					{ props.car.efficiency + ' kWh/100km' }
			</tr>
			</table>
			</div>
		</ Paper>
		</div>
	);
}

export default Detail
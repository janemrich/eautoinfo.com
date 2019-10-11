import React from 'react' 
import {Card, Box, CardActions, CardActionArea, CardContent, Typography, CardMedia, CardHeader, CardText, Paper} from '@material-ui/core';
import {Bar} from './Bar.js'
import { classes } from 'istanbul-lib-coverage';
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

	const style = {
		backgroundImage: 'url(https://api.eautoinfo.com' + props.car.thumbnail.url + ')',
	};

	return (
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
			<Typography component="p">
				{ 'Reichweite: ' +  props.car.range_wlpt + ' km' } <br />
				{ 'Effizienz: ' +  props.car.efficiency + ' kWh/100km' }
			</Typography>
		</Paper>
	);
}

export default Detail
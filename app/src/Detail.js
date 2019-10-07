import React from 'react' 
import {Card, Box, CardActions, CardActionArea, CardContent, Typography, CardMedia, CardHeader, CardText} from '@material-ui/core';
import {Bar} from './Bar.js'

class Detail extends React.Component {
  state = {
    cars: [],
  }

  componentDidMount() {
    fetch('https://api.eautoinfo.com/cars/' + this.props.match.params.id)
    .then(res => res.json())
    .then((data) => {
      this.setState({ cars: [data]})
		})
    .catch(console.log);
  }

  render() {
		return (
				<div className="App">
					<Bar />
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
		<Card className="car-card"  >
			<CardActionArea>
				<CardMedia className="car-media"
					image={'https://api.eautoinfo.com' + props.car.thumbnail.url}
				/>
				<CardContent>
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
					<Typography component="p">
          				{ 'Reichweite: ' +  props.car.range_wlpt + ' km' } <br />
						{ 'Effizienz: ' +  props.car.efficiency + ' kWh/100km' }
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
		
	);
}

export default Detail
import React, { Component } from 'react';
import { Paper, Box, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilterListIcon from '@material-ui/icons/FilterList';
import Chip from '@material-ui/core/Chip';
import "./Sort.css";

class Sort extends Component {

	state = {
		showBrandSelection: false,
	}

	handleClose() {
		this.setState({
			showBrandSelection: false,
		})
	}

	handleBrandClick() {
		this.setState({
			showBrandSelection: true,
		})
	}	

	render() {
		return (
			<Paper className="filters">
				<Box className="filter-inputs">
					{!this.state.showBrandSelection &&
					<>
						<div className="textField">
							<TextField
								className="textInput"
								id="outlined-adornment-amount"
								variant="outlined"
								label="Preis ab"
								value={this.props.price}
								onChange={ this.props.onPriceChange }
								InputProps={{
								startAdornment: <InputAdornment position="start">€</InputAdornment>,
								}}
							/>
						</div>
						<div className="textField">
							<TextField
								className="textInput"
								id="outlined-adornment-amount"
								variant="outlined"
								label="Reichweite ab"
								value={this.props.range}
								onChange={ this.props.onRangeChange }
								InputProps={{
								startAdornment: <InputAdornment position="start">km</InputAdornment>,
								}}
							/>
						</div>
						<Button className="brand-Button"
						variant="outlined"
						onClick={ () => this.handleBrandClick() }
						>
						Marken
						</Button>
						<Filters
							sortby = {this.props.sortby}
							onSortChange={(type) => this.props.onSortChange(type)}
						/>
					</>
					}
					{this.state.showBrandSelection &&
						<BrandSelector 
              onClose={ () => this.handleClose() }
							brands={this.props.brands}
							filter_brands={this.props.filter_brands}
							onBrandChange={ ( brand ) => this.props.onBrandChange( brand )}
						/>
					}
				</Box>
			</Paper>
		);
	}
}

function Filters(props) {
	return (
		<div className="filter-sort">
			<FilterListIcon />  
						<Chip
							className="filter-chip"
							{...((props.sortby == 'price') ? {color: 'primary'} : {})}
							label="Preis"
							clickable
							onClick={ () => props.onSortChange('price')}
						/>
						<Chip
							className="filter-chip"
							{...((props.sortby == 'range') ? {color: 'primary'} : {})}
							label="Reichweite"
							clickable
							onClick={ () => props.onSortChange('range')}
						/>
						<Chip
							className="filter-chip"
							{...((props.sortby == 'efficiency') ? {color: 'primary'} : {})}
							label="Effizienz"
							clickable
							onClick={ () => props.onSortChange('efficiency')}
						/>
						<Chip
							className="filter-chip"
							{...((props.sortby == 'fast_charge') ? {color: 'primary'} : {})}
							label="Schnellladen"
							clickable
							onClick={ () => props.onSortChange('fast_charge')}
						/>
						<Chip
							className="filter-chip"
							{...((props.sortby == 'top_speed') ? {color: 'primary'} : {})}
							label="Höchstgeschwindigkeit"
							clickable
							onClick={ () => props.onSortChange('top_speed')}
						/>
						<Chip
							className="filter-chip"
							{...((props.sortby == 'acceleration') ? {color: 'primary'} : {})}
							label="Beschleunigung"
							clickable
							onClick={ () => props.onSortChange('acceleration')}
						/>
		</div>
	)
}

function BrandSelector(props) {
	return (
		<div
			className='brand-filter'
		>
			<Button
				className="Sort-brandButton"
				onClick={() => props.onBrandChange('alle')}
				variant='outlined'
			>
				Alle
			</Button>
			<Button
				className="Sort-brandButton"
				onClick={() => props.onBrandChange('keine')}
				variant='outlined'
			>
				Keine
			</Button>
			{Array.from(props.brands).map(
                brand => <Chip
							className="filter-chip"
							{... ((props.filter_brands.includes(brand)) ? {} : {color: 'primary'} )}
							label={brand}
							clickable
							onClick={ () => props.onBrandChange(brand) }
                        />
            )
            }
			<p />
			<Button
				className='brand-button-done'
				onClick={ () => props.onClose() }
				variant='contained'
			>
				Fertig
			</Button>
		</div>
	)
}

export default Sort;
import React from 'react';


import { Paper, Box} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilterListIcon from '@material-ui/icons/FilterList';
import Chip from '@material-ui/core/Chip';

export function Sort(props) {
	return (
		<Paper className="filters">
			<Box className="filter-inputs">
			<div className="textField">
			<TextField
				className="textInput"
				id="outlined-adornment-amount"
				variant="outlined"
				label="Preis ab"
				value={props.price}
				onChange={ props.onPriceChange }
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
				value={props.range}
				onChange={ props.onRangeChange }
				InputProps={{
				startAdornment: <InputAdornment position="start">km</InputAdornment>,
				}}
			/>
			</div>
			</Box>
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
		</Paper>
	)
}
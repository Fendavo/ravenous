/*
The App component renders a SearchBar component and a BusinessList component. 
The final product is a simulation of how the Ravenous project will look and work.

When the Yelp API is implemented, a list of businesses will be returned to App.js. 
Therefore, we should create a hard-coded list of businesses there and then pass them to the appropriate components.

*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

//Business object
const business = [
  {
	imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'BNE',
	postCode: '4001',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90
  }
];

const businesses = [business,
					business,
					business,
					business,
					business,
					business,];

class App extends Component {
	render() {
		return (
			<div className="App">
			  <h1>ravenous</h1>
			  <SearchBar />
			  <BusinessList businesses={businesses} /> 
			</div>
		);
	}
}

export default App;

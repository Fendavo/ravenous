/*A SearchBar component that will be used in the future to search for business*/

import React from 'react';
//import ReactDOM from 'react-dom';
import './SearchBar.css';

/*The search bar will communicate with the Yelp API, but you'll build the functionality to communicate with the API in a later project. Today, you'll build part of the structure that's needed to communicate with the Yelp API. Specifically, requests to the Yelp API must follow formatting and naming conventions set by the API. For example, the search bar should allow users to search businesses by:

Best Match
Highest Rated
Most Reviewed

To achieve this, you'll create an object with keys and values that conform to what the API expects to receive (as shown in the documentation https://www.yelp.com/developers/documentation/v3/business_search). Let's see what this looks like.

Start by creating an object called sortByOptions*/

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

//Use the React library to create the SearchBar component
class SearchBar extends React.Component {

	/*The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.*/
	renderSortByOptions(){
		/*To iterate through the object, you'll need to start by accessing the keys of the sortByOptionsobject. Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument. Now that you have access to the keys, you'll iterate through them using the map() method. Call the map() method by chaining it to the end of the line you just wrote. Pass a callback function to the map() method as an argument. The callback function should have one parameter called sortByOption. The callback function should use arrow syntax.*/
		return Object.keys(sortByOptions).map(sortByOption => {
			/*Inside of the callback function, access the sortByOptions values using the sortByOption parameter of the callback function. Store values in variable called sortByOptionValue*/
			let sortByOptionValue = sortByOptions[sortByOption];
			/*On the next line, return a <li> element. The list item should have an attribute called key set to sortByOptionValue (don't forget to use curly braces to inject JavaScript). The content of the list item should be sortByOption. Again, use curly braces to achieve the JavaScript injection.*/
			return <li key={sortByOptionValue}>{sortByOption}</li>;
		});
	}	
	render() {
		/*
		Inside of the .render() method, add a return statement with JSX that renders this HTML.
		https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/search-bar.txt			*/
		return (
				<div className="SearchBar">
				  <div className="SearchBar-sort-options">
					<ul>
					  {this.renderSortByOptions()}
					</ul>
				  </div>
				  <div className="SearchBar-fields">
					<input placeholder="Search Businesses" />
					<input placeholder="Where?" />
				  </div>
				  <div className="SearchBar-submit">
					<a>Let's Go</a>
				  </div>
				</div>
		);
	}
}

/*This list component will need to be rendered again by another component, so you'll need to export it.*/
export default SearchBar;
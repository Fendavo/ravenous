import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      where: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleWhereChange = this.handleWhereChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    //this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
	console.log("in getSortByClass with this.state.sortBy=" + this.state.sortBy);
	console.log("in getSortByClass with sortByOption=" + sortByOption);
    if (this.state.sortBy === sortByOption) {
      return 'active'; //CSS class for visual feedback to user
    }
	//else
	//	console.log("no match found");
    return '';
  }

  handleSortByChange(sortByOption) {
	console.log("in handleSortByChange with sortByOption=" + sortByOption);
	console.log("in handleSortByChange with this.state.sortBy = " + this.state.sortBy);
    this.setState({sortBy: sortByOption});//set the sortBy - useful when commnunicating with the Yelp API
	//console.log(this.state.sortBy);
  }

  handleTermChange(event) {
	//console.log("in handleTermChange with event.target.value=" + event.target.value);
    this.setState({term: event.target.value});
  }

  handleWhereChange(event) {
	//console.log("in handleWhereChange with event.target.value=" + event.target.value);
    this.setState({where: event.target.value});
  }

  handleSearch(event) {
	console.log("in handleSearch with this.state.sortBy=" + this.state.sortBy);
	//console.log("in handleSearch with event.target.value=" + event.target.value);
	//use the searchYelp() method from App.js
    this.props.searchYelp(this.state.term, this.state.where, this.state.sortBy);
    //prevent the default action of clicking a link from triggering
	event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
	  console.log("in renderSortByOptions with sortByOptionValue=" + sortByOptionValue);
	  //console.log("sortByOption = " + sortByOption);
	  //console.log("this.sortByOptions[sortByOption]=" + this.sortByOptions[sortByOption]);
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleWhereChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
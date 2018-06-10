const apiKey = 'hJU0RRbPA3_qtAlR3bcxkHAOiJpckt3jqj2RDjVxbQR78jYytzu0PzEtzB6AU1fasqbvjfDR1hoJcLcxMX9XIZSIVnWvdWo47AiKmmbIWQ2tVKcc3mx1MM3x_rIcW3Yx'; // Insert API key here.

const Yelp = {
  search(term, location, sortBy) {
    
	return fetch(
	`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
	{headers: {Authorization: `Bearer ${apiKey}`}    }
	).then(response => {
	  //convert the returned response to JSON to effectively use the list of businesses.
      return response.json();
    }
	).then(jsonResponse => {
	   /*Inside of the callback function, add an if statement that checks to see if 
	   jsonResponse has a businesses key (this would represent a valid response returned 
	   by the Yelp API) Return an array. If it doesn't, we don't want the app to crash trying to render 
	   a list of businesses that don't exist.*/
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map( business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        })
		);
      }
	  
    });
  }
};

//Finally, export the Yelp module.
export default Yelp;

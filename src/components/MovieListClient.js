
const getMovieList = async (searchValue,setMovies) => {
	const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=62f9364d`;

	const response = await fetch(url);
	const responseJson = await response.json();

	if (responseJson.Search) {
		setMovies(responseJson.Search);
	}
};

export{
    getMovieList
};
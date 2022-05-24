import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getMovieList } from './components/MovieListClient';
import { MovieListHeading , SearchBox  } from './components/MovieListHeader';
export function App(){
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	
	useEffect(() => {
		getMovieList(searchValue,setMovies);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='rows'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
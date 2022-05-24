import React from "react";
import '../styles/MovieList.css'

export function MovieList(props){
    return (
        <div className="images-container d-flex">
            {props.movies.map((movie,index) => ( 
                <div className="image-container d-flex justify-content-start m-3 margin: auto; ">
					<img 
                        src={movie.Poster} 
                        className="img-fluid"
                        alt='movie'
                    />
                    <div className='overlay d-flex justify-content-center'>
						Add to Favourites
					</div>
				</div>  
            ))}
        </div>
    );
};

export default MovieList;
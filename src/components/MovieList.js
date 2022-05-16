import React from "react";
import '../styles/MovieList.css'

export function MovieList(props){
    return (
        <div class="images-container d-flex">
            {props.movies.map((movie,index) => ( 
                <div class="image-container d-flex justify-content-start m-3 width: max-content; margin: auto; ">
					<img 
                        src={movie.Poster} 
                        className="img-fluid"
                        alt='movie'
                    />
				</div>  
            ))}
        </div>
    );
};

export default MovieList;
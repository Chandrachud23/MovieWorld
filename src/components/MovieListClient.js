import axios from "axios";
let getMovieList=(
    setMovies
) => 
{
    axios
        .get("http://www.omdbapi.com/?s=star wars&apikey=62f9364d")
        .then((response) => {
            setMovies(response.data.Search);
        })
        .catch((error) => {
            console.log(error);
        });
};

export{
    getMovieList
};
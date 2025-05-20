const tmdbKey = "9cc947a3d5f936495e305b9f41ca4182";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");
const genreRequestEndpoint = "/genre/movie/list";
const discoverMovieEndpoint = "/discover/movie";
const selectedGenre = getSelectedGenre();

const getGenres = async () => {
    const requestParams = "?api_key=" + tmdbKey;
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const genres = jsonResponse.genres;
            console.log(genres);
            return genres;
        }
    } catch (error) {
        console.log(error);
    }
};

const getMovies = async () => {
    const requestParams = "?api_key=" + tmdbKey + "&with_genres=" + selectedGenre;
    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const movies = jsonResponse.results;
            return movies;
        }
    } catch(error) {
        console.log(error);
    }
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
    const movieInfo = document.getElementById("movieInfo");
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;

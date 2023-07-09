import axios from "axios";

const Apikey = process.env.REACT_APP_APIKEY
const BaseUrl = process.env.REACT_APP_BASEURL

export const getMovieData = async () => {
    const movie = await axios.get(`${BaseUrl}/movie/popular?page=1&api_key=${Apikey}`)
    return movie.data.results;
}

export const searchMovie = async (e) => {
    const search = await axios.get(`${BaseUrl}/search/movie?page=1&query=${e.target.value}&api_key=${Apikey}`)
    return search.data.results;
}
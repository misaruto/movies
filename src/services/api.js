import axios from "axios";

const defaultParams = {
    api_key:process.env.REACT_APP_TMDB_API_KEY,
    language:'pt-BR'
}


export const movieApi = axios.create({
    params:defaultParams,
    baseURL:"https://api.themoviedb.org/3"
})


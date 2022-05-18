import axios from "axios";

export const defaultParams = {
    api_key:process.env.TMDB_API_KEY,
    language:'pt-BR'
}


export const movieApi = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})


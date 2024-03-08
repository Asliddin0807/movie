import { apiRequest } from "./axios"
import { api_key } from '../constants/api_key'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjgxNTQ0NGNjZDFmNzcxM2UzNTY3MmMxMzkyNTkxYyIsInN1YiI6IjY1ZTMyODc5Yzk5ODI2MDE3YjYxNjdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzivOy_U5XkToyw75ojutQg-5hiVQLxLgbQFKDLa2ps'


// const tradingMovie = `${base_Url}/trading/movie/day?api_key=${api_key}`
const base_url = 'https://api.themoviedb.org/3'
const url = `${base_url}/tv/popular?api_key=${api_key}`
const upComingMovie = `${base_url}/movie/upcoming?api_key=${api_key}`
const topRated = `${base_url}/movie/top_rated?api_key=${api_key}`



const movieDetail = id => `${base_url}/movie/${id}?api_key=${api_key}`
const movieCredits = id => `${base_url}/movie/${id}/credits?api_key=${api_key}`
const movieSimilar = id => `${base_url}/movie/${id}/similar?api_key=${api_key}`


export const fetchTradingMovie = () => {
    return apiRequest(url)
}

export const fetchUpComingMovie = () => {
    return apiRequest(upComingMovie)
}

export const fetchTopRated = () => {
    return apiRequest(topRated)
}

export const fetchMovieDetail = (id) => {
    return apiRequest(movieDetail(id))
}

export const fetchMovieCredits = (id) => {
    return apiRequest(movieCredits(id))

}

export const fetchMovieSimilar = (id) => {
    return apiRequest(movieSimilar(id))
}

export const image500 = (posterPath) => {
    return posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null
}

export const image342 = (posterPath) => {
    return posterPath ? 'https://image.tmdb.org/t/p/w342' + posterPath : null
}

export const image185 = (posterPath) => {
    return posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null
}

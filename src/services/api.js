import axios from 'axios'

//URL FILMES EM CARTAZ
// https://api.themoviedb.org/3/movie/now_playing?api_key=ff0cedc0fe9bf8cc44b2ff7bc93d97ba&language=pt-BR&page=1

export const key = 'ff0cedc0fe9bf8cc44b2ff7bc93d97ba'
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;
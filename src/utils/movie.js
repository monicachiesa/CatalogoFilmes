//Gerar uma lista de filmes com o tamanho que eu quero
export function getListMovies(size, movies) {
    let popularMovies = [];

    for (let i = 0, l = size; i < l; i++) {
        popularMovies.push(movies[i])
    }
    return popularMovies;
}

//Gerar um num aleatório pra mostrar no "em cartaz"
export function randomBanner(movies) {
    return Math.floor(Math.random() * movies.length)
    
}
import AsyncStorage from '@react-native-async-storage/async-storage'
import SweetAlert from 'react-native-sweet-alert';

//buscar filmes
export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key);

   try {
    let moviesSave = JSON.parse(myMovies) || []; //se não tiver nenhum, retorna lista vazia
    return moviesSave;
   }
    catch (error) {
        // Tratar o erro adequadamente
    }
}

//salvar
export async function saveMovie(key, newMovie) {
    let moviesStored = getMoviesSave(key);

    //se tiver filme com o mesmo id ou salvo é pra ignorar
    const hasMovie = moviesStored.some(item => item.id === newMovie.id);   // o some verifica dentro do array

    if (hasMovie) {
        console.log('Este filme já existe na sua lista!')
        return;
    }

    moviesStored.push(newMovie);
    try { //coloca dentro da variável de filmes o filme
        await AsyncStorage.setItem(key, JSON.stringify(moviesStored)); //salva o filme
        alert('Salvo')
    }
    catch (error) {
        // Tratar o erro adequadamente
    }

}
//deletar um filme
export async function deleteMovie(id) {
    let moviesStored = getMoviesSave('@primereact');

    let myMovies = moviesStored.filter( item => {
        return (item.id !== id)  //deleta o filme que quiser
    })
    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
    console.log('Filme deletado com sucesso');
    return myMovies;
}

//filtrar pra ver se já está salvo
export async function hasMovie(movie) {
    let moviesStored = getMoviesSave('@primereact');
    const hasMovie = moviesStored.find(item => item.id === movie.id) //o find passa por todo array pra procurar

}
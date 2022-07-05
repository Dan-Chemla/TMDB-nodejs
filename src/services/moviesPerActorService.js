const { creditsByMovie, getMovieName } = require('./moviesService');
const { actors } = require('../config/dataForQuestions');


const moviesPerActor = async () => {
    const data = await creditsByMovie();

    const reduseData = [];
    let minimal;
    data.forEach((entry) => {
        minimal = { movie: getMovieName(entry.id), cast: entry.cast.map(c => c.name) }
        reduseData.push(minimal)
    })

    const moviesByActor = [];
    let actorToMovies = {};

    actors.forEach((actor) => {
        actorToMovies[actor] = reduseData.map(th => {
            if (th.cast.includes(actor)) {
                return th.movie
            } else return
        }).filter(movie => !!movie)
        moviesByActor.push(actorToMovies);
    });
    return moviesByActor
}


module.exports = {
    moviesPerActor
}
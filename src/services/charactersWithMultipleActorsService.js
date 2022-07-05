const { creditsByMovie, getMovieName } = require('./moviesService');
const { actors } = require('../config/dataForQuestions');


const charactersWithMultipleActors = async () => {
    const data = await creditsByMovie();

    const actorsByMovieCharacter = [];
    let responce = {}

    data.forEach((movie) => {
        let characterToActors = {};

        movie.cast.forEach(castItem => {
            const { character, name } = castItem

            if (actors.includes(name)) {
                characterToActors[character] = movie.cast.filter(act => act.character == character).map(ca => ca.name)
            }

        })


        responce[getMovieName(movie.id)] = characterToActors

        actorsByMovieCharacter.push(responce);
    });
    return actorsByMovieCharacter
}


module.exports = {

    charactersWithMultipleActors
}
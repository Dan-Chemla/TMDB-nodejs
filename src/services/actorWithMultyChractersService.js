const { creditsByMovie, getMovieName } = require('./moviesService');
const { actors } = require('../config/dataForQuestions');


const actorWithMultyChracters = async () => {
    const data = await creditsByMovie();

    const moviesByActor = [];
    let obj = {}

    actors.forEach((actor) => {
        const mc = [];
        let cmo;

        data.forEach(th => {
            if (th.cast.map(c => c.name).includes(actor)) {
                cmo = { movie: getMovieName(th.id), character: th.cast.filter(act => act.name == actor)[0].character }
            } else cmo = null
            mc.push(cmo)

        })

        obj[actor] = mc.filter(movie => !!movie)

        moviesByActor.push(obj);
    });
    return moviesByActor
}


module.exports = {

    actorWithMultyChracters
}
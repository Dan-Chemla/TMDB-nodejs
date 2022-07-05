const express = require('express');
const dotenv = require('dotenv');
const { actorWithMultyChracters } = require('./services/actorWithMultyChractersService');
const { charactersWithMultipleActors } = require('./services/charactersWithMultipleActorsService');
const { moviesPerActor } = require('./services/moviesPerActorService');



dotenv.config();

const app = express();

const server = app.listen(process.env.PORT, () => {
    console.log(`server listening onprt ${server.address().port}`)
})


app.get('/moviesPerActor', async (req, res) => {
    try {
        const data = await moviesPerActor();
        return res.status(200).json({
            status: 200,
            message: "movies per actor.",
            data
        })
    } catch (error) {
        return res.status(500).json(error)
    }

})

app.get('/actorsWithMultipleCharacters', async (req, res) => {
    try {
        const data = await actorWithMultyChracters();
        return res.status(200).json({
            status: 200,
            message: "actors with multiple characters.",
            data
        })
    } catch (error) {
        return res.status(500).json(error)
    }

})

app.get('/charactersWithMultipleActors', async (req, res) => {
    try {
        const data = await charactersWithMultipleActors();
        return res.status(200).json({
            status: 200,
            message: "characters with multiple actors",
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

})







const sayHey = (name) => {
    return `Hey ${name}`
}



module.exports = {
    sayHey
}



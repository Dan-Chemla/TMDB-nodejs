const { movies } = require('../config/dataForQuestions');
const dotenv = require('dotenv');
const axios = require('axios');

const getrequests = () => {
  const movieIds = Object.values(movies)
  return movieIds.map(id => axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY_VALUE}`))

}

const creditsByMovie = () => {

  return Promise.all(getrequests()).then((responses) => {
    const data = responses.map(res => res.data);
    return data;
  }).catch((err) => {
    console.log("PromiseService error " + err)
  });

}

const getMovieName = (id) => Object.keys(movies).find(key => movies[key] === id)




module.exports = {
  creditsByMovie,
  getMovieName
}
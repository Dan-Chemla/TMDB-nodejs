const { creditsByMovie, getMovieName} = require('../../src/services/moviesService');

describe('getMovieName', () => {
    it('should return name to given id', () => {
        expect(getMovieName(10138)).toBe('Iron Man 2')
    })
})

describe('creditsByMovie', () => {
    it('should return list of credits from TMDB', () => {
       // verify I'm sending the right amont of call
       // working with mock data 
    })
})
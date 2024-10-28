// import the Media class:
let Media = require('./Media')

// create your Movie class:

class Movie extends Media {
    constructor(director, rating, summary, duration, title, year, genre, ) {
        super(title, year, genre)
        this.director = director
        this.rating = rating
        this.summary = summary
        this.duration = duration
    }
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(movies) {
        return movies.reduce((longest, current) => {
            return (current.duration > longest.duration) ? current : longest;
        });
    }

}

// don't change below
module.exports = Movie;
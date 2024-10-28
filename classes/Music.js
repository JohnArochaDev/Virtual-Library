// import the Media class:
let Media = require('./Media')

// create your Music class:

class Music extends Media {
    constructor(artist, length, year, genre, title) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    // Method to return a summary of the music
    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
    static shortestAlbum(albums) {
        return albums.reduce((shortest, album) => {
            return album.length < shortest.length ? album : shortest;
        });
    }
}

// don't change below
module.exports = Music;

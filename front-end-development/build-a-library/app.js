class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(isCheckedOut) {
        this._isCheckedOut = isCheckedOut;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        const sum = this._ratings.reduce((acc, current) => {
            return acc + current}, 0)
        return sum / this._ratings.length;
    }
    addRating(rating) {
        this._ratings.push(rating);
    }
}
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get title() {
        return this._title;
    }
}
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}
class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get songs() {
        return this._songs;
    }
    get artist() {
        return this._artist;
    }
    shuffle() {
        // Randomly pick a song from the list and insert it into a new list, remove the song picked, eventually the new list will contain all songs in a random order.
        let currentIndex = this._songs.length, randomIndex, tempCopyOfSongs = this._songs, shuffledSongs = [];
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            shuffledSongs.push(tempCopyOfSongs[randomIndex]);
            tempCopyOfSongs.splice(randomIndex, 1);
            currentIndex -= 1;
        }
        return shuffledSongs;
    }
}

// Example usage:
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
const album = new CD('AC/DC', 'Back in Black', ['Hells Bells', 'Shoot to Thrill', 'What Do You Do for Money Honey']);
console.log(album.shuffle())

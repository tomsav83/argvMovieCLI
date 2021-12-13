const movieArr = [];

class Movie {
  constructor(
    title,
    actor = 'Not specified',
    additionalInfo = 'Additional info goes here.'
  ) {
    this.title = title;
    this.actor = actor;
    this.additionalInfo = additionalInfo;
  }

  add() {
    movieArr.push(this);
    console.log(movieArr);
  }
  list() {
    console.log(movieArr);
  }
}

module.exports = Movie;

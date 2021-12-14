const fs = require('fs');
let movieArr;
// JSON.parse will convert from JSON to a JS object so speechmarks around keys and integers will be gone
// readFileSync will grab information from file (storage.json) if it exists
const pullMovieData = () => {
  try {
    movieArr = JSON.parse(fs.readFileSync('./storage.json'));
  } catch (error) {
    movieArr = [];
  }
};

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
  }
  list() {
    console.log(movieArr);
  }
  save() {
    // save movie array to json file
    fs.writeFileSync('./storage.json', JSON.stringify(movieArr));
    // writeFileSync will find file, if it doesn't exist it will create it
    // movieArr needs to be convested into JSON by using JSON.stringify method
  }
}

module.exports = { Movie, pullMovieData };

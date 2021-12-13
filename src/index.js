const yargs = require('yargs');
const Movie = require('./utils/utils.js');
const args = yargs.argv;

const app = () => {
  switch (args.command) {
    case 'add':
      // function that adds movie from process.argv into an array and console.logs the array.
      const newMovie = new Movie(args.title, args.actor, args.additionalInfo);

      newMovie.add();
      newMovie.list();
      break;

    case 'add multi':
      const movie1 = new Movie(args.title1, args.actor1, args.additionalInfo1);
      const movie2 = new Movie(args.title2, args.actor2, args.additionalInfo2);
      movie1.add();
      movie2.add();
      movie1.list();
      break;

    default:
      console.log('Incorrect command');
  }
};

app();

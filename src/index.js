const Movie = require('./utils/utils.js');

const app = () => {
  switch (process.argv[2]) {
    case 'add':
      // function that adds movie from process.argv into an array and console.logs the array.
      const newMovie = new Movie(
        process.argv[3],
        process.argv[4],
        process.argv[5]
      );
      newMovie.add();
      newMovie.list();
      break;

    case 'add multi':
      const movie1 = new Movie(
        process.argv[3],
        process.argv[4],
        process.argv[5]
      );
      const movie2 = new Movie(
        process.argv[6],
        process.argv[7],
        process.argv[8]
      );
      movie1.add();
      movie2.add();
      movie1.list();
      break;

    default:
      console.log('Incorrect command');
  }
};

app();

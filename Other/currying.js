const movies = [
  {
    "id": 1,
    "name": "Matrix"
  },
  {
    "id": 2,
    "name": "Star Wars"
  },
  {
    "id": 3,
    "name": "The wolf of Wall Street"
  }
]
const series = [
  {
    "id": 4,
    "name": "South Park"
  },
  {
    "id": 5,
    "name": "The Simpsons"
  },
  {
    "id": 6,
    "name": "The Big Bang Theory"
  }
]

// NOT GOOD
console.log(movies.map((movie) => movie.id)) // should return [ 1, 2, 3 ])
console.log(series.map((serie) => serie.id)) // should return [ 1, 2, 3 ])

// GOOD
const get = property => (object) => object[property];
const getId = get('id'); // if need get name then get('name')
console.log(movies.map(getId)); // should return [ 1, 2, 3 ]
console.log(series.map(getId)); // should return [ 4, 5, 6 ]
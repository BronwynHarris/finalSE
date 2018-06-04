const Chance = require("chance");
const chance = new Chance();
const faker = require("faker");
const { db, Student, Campus } = require("./server/db");

//returns array of promises for use in Promise.all below
const create = (n, func) => {
  const results = [];
  while (n--) {
    results.push(func());
  }
  return results;
};

const planets = [
  "edmunds",
  "mann",
  "miller",
  "Saturn"
];

const campuses = [
  {
    name: "Planet Edmunds",
    city: chance.city(),
    state: chance.state(),
    description: `Edmunds is a habitable planet in the star-system that also contains Miller and Mann. While Miller orbits close to Gargantua, Edmunds lies farther away, likely orbiting Pantagruel, the system's neutron star - a factor that Dr. Amelia Brand presents as an argument for why Edmunds might be more favourable than Mann for humanity to inhabit.`,
    planet: "Edmunds",
    imageUrl: `/images/database/${planets[0]}.jpg`
  },

  {
    name: "Planet Mann",
    city: chance.city(),
    state: chance.state(),
    description: `Mann is an ice planet that orbits the black hole Gargantua. The planet is named after the first astronaut to land there named Dr. Mann.`,
    planet: "Mann",
    imageUrl: `/images/database/${planets[1]}.jpg`
  },

  {
    name: "Planet Miller",
    city: chance.city(),
    state: chance.state(),
    description: `Miller is a water-world and the first planet in the system orbiting Gargantua. Miller takes its name from Dr. Miller, who landed on the planet and activated the "thumbs up" beacon. It is also the first location the crew of the Endurance visit.`,
    planet: "Miller",
    imageUrl: `/images/database/${planets[2]}.jpg`
  },

  {
    name: "Saturn",
    city: chance.city(),
    state: chance.state(),
    description: `Saturn is a ringed gas giant orbiting the Sun, and the sixth planet in the Solar System in order from the Sun. It has many natural satellites. In Interstellar, a wormhole is discovered near Saturn. `,
    planet: "Saturn",
    imageUrl: `/images/database/${planets[3]}.jpg`
  }
];

const allStudents = [
  'ameliaBrand',
  'cooper',
  'drMann',
  'ET',
  'murphyCooper',
  'tars'
]
const students = [
  {
    firstName: "Amelia",
    lastName: "Brand",
    email: "ab@nasa.com",
    gpa: chance.floating({ min: 3, max: 4, fixed: 2 }),
    imageUrl: `/images/database/${allStudents[0]}.jpg`,
    campusId: 1
  },
  {
    firstName: "Joseph",
    lastName: "Cooper",
    email: "jc@nasa.com",
    gpa: chance.floating({ min: 3, max: 4, fixed: 2 }),
    imageUrl: `/images/database/${allStudents[1]}.jpg`,
    campusId: 1
  },
  {
    firstName: "Dr.",
    lastName: "Mann",
    email: "mann@nasa.com",
    gpa: chance.floating({ min: 0, max: 2, fixed: 2 }),
    imageUrl: `/images/database/${allStudents[2]}.jpg`,
    campusId: 2
  },
  {
    firstName: "Murphy",
    lastName: "Cooper",
    email: "mc@nasa.com",
    gpa: chance.floating({ min: 3, max: 4, fixed: 2 }),
    imageUrl: `/images/database/${allStudents[4]}.jpg`,
    campusId: 3
  },
  {
    firstName: "TARS",
    lastName: "Robot",
    email: "tars@nasa.com",
    gpa: chance.floating({ min: 3, max: 4, fixed: 2 }),
    imageUrl: `/images/database/${allStudents[5]}.jpg`,
    campusId: 4
  }
]

db
  .sync({ force: true })
  .then(() => {
    return Promise.all(campuses.map(campus => Campus.create(campus)));
  })
  .then(() => {
    return Promise.all(students.map(student => Student.create(student)));
  })
  .finally(() => {
    db.close();
    return null;
  });

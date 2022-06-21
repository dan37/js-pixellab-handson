var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);

Object.keys(person.pets).forEach(function (petName) {
  var pet = person.pets[petName];

  console.log(`${pet.name}`);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);

var sum = 0;

Object.keys(person.pets).forEach(function (petAge) {
  var pet = person.pets[petAge];

  sum += pet.age;
});

console.log(sum);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc.`,
);

Object.keys(person.pets).forEach(function (pet) {
  var pet = person.pets[pet];

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.log(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);

Object.keys(person.pets).forEach(function (pet) {
  var pet = person.pets[pet];
  var ageDiff = Math.abs(new Date().getFullYear() - person.birthYear - pet.age);

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);
Object.keys(person.pets)
  .reverse()
  .forEach(function (pet) {
    var pet = person.pets[pet];

    console.log(`Animalul meu se numeste ${pet.name}`);
  });

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” `,
);
var maxValue = 0;
var ageDiff = 0;

Object.keys(person.pets).forEach(function (pet) {
  var pet = person.pets[pet];

  if (maxValue < pet.age) {
    maxValue = pet.age;
    ageDiff = new Date().getFullYear() - person.birthYear - maxValue;
  }

  console.log(
    `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
var message = 'Am ';

Object.keys(person.pets).forEach(function (typeName, index, speciesNames) {
  var pet = person.pets[typeName];

  var punctuation = `, `;
  var speciesCount = speciesNames.length;

  if (speciesCount - 2 === index) {
    punctuation = ` si `;
  }

  if (speciesCount - 1 === index) {
    punctuation = `.`;
  }

  message += `${pet.species}${punctuation}`;
});

console.log(message);

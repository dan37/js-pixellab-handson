console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

var elem01 = document.getElementById('prop01');
var elem02 = document.getElementById('prop02');
var elem03 = document.getElementById('prop03');
var elem04 = document.getElementById('prop04');

var person = {
  firstName: 'danut',
  lastName: 'gabrian',
  email: 'gabriandanut@yahoo.com',
  birthYear: 1977,
  zipCode: '45789',
  pets: [
    {
      name: 'lola',
      species: 'caine',
      age: 12,
    },
    {
      name: 'blaky',
      species: 'pisica',
      age: 6,
    },
    {
      name: 'pisi',
      species: 'pisica',
      age: 4,
    },
  ],
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2022 - person.pets[2].age).toString());

var difference = 2022 - person.birthYear - person.pets[0].age;
console.log(`${difference}`);

var dogAge = 2022 - person.pets[0].age;
var catAge = 2022 - person.pets[1].age;
var birdAge = 2022 - person.pets[2].age;
var differenceAge = person.pets[0].age - person.pets[2].age;

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

elem01.innerHTML =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa.';

elem02.innerHTML =
  'Diferenta de varsta dintre ' +
  person.pets[0].name +
  ' si ' +
  person.pets[1].name +
  ' este: ' +
  differenceAge +
  ' ani.';

elem03.innerHTML =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', ' +
  ' m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode +
  '.';

elem04.innerHTML =
  'Animalele mele s-au nascut in ' +
  dogAge +
  ', ' +

const person = {
  getName: function () {
    return 'Gabrian Danut';
  },

  getAge: function () {
    return 40;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;
  // return person.getName
  // return person.getAge

  return person[methodName]();
}

console.warn(`Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);

const personFirstName = accessor(`Name`);
console.log(`Eu sunt ${personFirstName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);
var personBirthYear = new Date().getFullYear() - accessor('Age');
console.log(personBirthYear.toString());

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
`);
var personAge = accessor('Age');
console.log(
  `Ma numesc ${personFirstName}, am ${personAge} ani si m-am nascut in anul ${personBirthYear}.`,
);

console.warn(`Folosind accesorul afiseaza numele persoanei.`);
console.log(`${personFirstName}`);

console.warn(`Afiseaza varsta persoanei.`);
console.log(`${personAge}`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”
`);
console.log(`M-am nascut in ${personBirthYear}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`Ma numesc ${personFirstName} si am ${personAge} ani!`);

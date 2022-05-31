var person = {
  name: 'Danut',
  surname: 'Gabrian',
  age: 40,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Afiseaza propozitia: “Ma numesc xxx yyy si stiu html si css.”
  Foloseste notatia cu paranteze patrate
`);
console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.warn(`
  Afiseaza propozitia “Sunt xxx si acum invat JavaScript.”
  Nu folosi valoarea din arrayul de skills.
`);
console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.warn(`
  Afiseaza propozitia “Am x prieteni: Larry, Steven si Carol.”
  Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.
`);
console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invat ' +
    person.skills[1] +
    '.',
);

console.log('Sunt ' + person.name + ' si stiu HTML si CSS.');

console.log(
  'Am ' +
    person.friends.length.toString() +
    ' prieteni: ' +
    person.friends[0].surname +
    ', ' +
    person.friends[1].surname +
    ' si ' +
    person.friends[2].surname +
    '.',
);

console.log(
  'Numele meu este ' +
    person.name +
    ' ' +
    person.surname +
    ',' +
    ' am ' +
    person.age +
    ' ani' +
    ' si ' +
    person.friends.length.toString() +
    ' prieteni.',
);

var person = {
  name: 'Danut',
  surname: 'Gabrian',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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
In mod similar, afiseaza skillurile care NU incep cu j.
`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

console.warn(`
Folosind un for afiseaza propozitia:
"Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    // ultima iteratie
    punctuation = '.';
  }
  // v1 concatenare
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(`
  Afiseaza diferenta de varsta dintre persoana
  si prietenii din arrayul friends doar daca
  aceasta este mai mare de 2 ani.
`);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(`
  Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele
  arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.
`);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.',
);

for (var i = 0; i <= person.skills.length - 1; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

console.warn(
  'Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.',
);
var sum = 0;

for (var i = 0; i <= person.friends.length - 1; i++) {
  if (person.friends[i].age >= 30) {
    sum += person.friends[i].age;
  }
  console.log(sum.toString());
}

console.warn(
  'Folosind un for, afiseaza suma anilor de nastere a persoanelor. ',
);

var sum = 0;

for (var i = 0; i <= person.friends.length - 1; i++) {
  sum += 2022 - person.friends[i].age;
}
console.log(sum.toString());

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.  ',
);

var message = ``;
for (var i = 0; i <= person.friends.length - 1; i++) {
  var friend = person.friends[i];

  if (friend.age % 2 !== 0 && friend.age < 30) {
    var ageDiff = Math.abs(person.age - friend.age);
    var message = `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.`;
  }
}
console.log(message);

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana ',
);
for (var i = 0; i <= person.skills.length - 1; i++) {
  console.log(person.skills[i]);
}

console.warn('In mod similar, afiseaza skillurile care incep cu c  ');

for (var i = 0; i <= person.skills.length - 1; i++) {
  if (person.skills[i].startsWith('c') !== false) {
    console.log(person.skills[i]);
  }
}

console.warn(
  'Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."',
);
var message = `Numele de familie ale prietenilor mei sunt: `;

for (var i = 0; i <= person.friends.length - 1; i++) {
  var friendName = person.friends[i].surname;
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message += friendName + punctuation;
}
console.log(message);

console.warn(
  ' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.',
);
var message = ``;
for (var i = 0; i <= person.friends.length - 1; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);
  var messagePart = `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.`;
  var space = ' ';

  if (i === person.friends.length - 1) {
    space = '';
  }
  message += messagePart + space;
}
console.log(message);

console.warn(
  'Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).',
);
var message = 'Prietenii mei sunt: ';
for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }

  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);

var sum = 0;

for (var i = 0; i <= person.friends.length - 1; i++) {
  var friend = person.friends[i];
  sum += friend.age;
}

console.log(sum.toString());

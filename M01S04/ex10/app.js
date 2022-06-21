var person = {
  name: 'danut',
  surname: 'marian',
  age: 40,
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
    { name: 'Larry', surname: 'Larryson', age: 33 },
    { name: 'Steven', surname: 'Stevenson', age: 33 },
    { name: 'Carol', surname: 'Carolson', age: 31 },
  ],
};

console.warn(
  `Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.`,
);

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`In mod similar, afiseaza skillurile care contin litera a.`);
person.skills.forEach(function (skill, index) {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

console.warn(
  `Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."`,
);
var message = `Prietenii mei se numesc `;
person.friends.forEach(function (friend, index) {
  var punctuation = ', ';

  if (index === person.friends.length - 1) {
    punctuation = '.';
  }
  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.`,
);

var sum = 0;
person.friends.forEach(function (friend, index) {
  if (friend.age > 30) {
    sum += friend.age;
  }
});
console.log(sum.toString());

console.warn(
  `Folosind forEach, afiseaza suma anilor de nastere ai persoanelor care au varsta impara. `,
);

var sum = 0;
person.friends.forEach(function (friend, index) {
  if (friend.age % 2 !== 0) {
    sum += 2022 - friend.age;
  }
});
console.log(sum.toString());

console.warn(
  ` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.`,
);

var ageDiff = 0;
person.friends.forEach(function (friend, index) {
  if (Math.abs(person.age - friend.age) >= 2) {
    ageDiff = Math.abs(person.age - friend.age);
  }
});
console.log(ageDiff);

console.warn(
  `Afiseaza fraza: "Intre Alina si Larry este o diferenta de xx ani. Intre Dragos si Steven... "`,
);

var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  // v2 concatenare

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
  console.log(message.trim());
});

console.warn(
  'metoda reverse afiseaza in ordine inversa elementele arrayului skills',
);

person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  ` Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);

var message = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach(function (friend, index) {
  var punctuation = ', ';

  if (index === person.friends.length - 1) {
    punctuation = '.';
  }

  message += friend.surname + punctuation;
});

console.log(message);

console.warn(
  `Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);

person.friends.forEach(function (friend, index) {
  console.log(Math.abs(person.age - friend.age));
});

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);
var sum = 0;
person.friends.forEach(function (friend, index) {
  sum += friend.age;
});
console.log(sum.toString());

console.warn(
  'Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.',
);
person.friends.reverse().forEach(function (friend) {
  console.log(`${friend.name} ${friend.surname}`);
});

const fs = require('fs');


genders = ['F', 'M'];
maleNames =['Kamil', 'Rafał', 'Piotr', 'Mikołaj' ];
femaleNames = ['Paulina', 'Justyna', 'Ala', 'Sylwia'];
lastNames = ['Styczeń', 'Piątek','Wiosna', 'Kwiecień'];

const randChoice = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = (gender == 'F') ? randChoice(femaleNames) : randChoice(maleNames);
    const age = Math.floor(Math.random() * 78) + 18;
    const lastName = randChoice(lastNames);

    const person = {
        gender,
        firstName,
        lastName,
        age,
    };
    people.push(person);
};


const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
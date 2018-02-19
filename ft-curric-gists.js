function yearOfBirth(age) {
  let yearOfBirth = 2018 - age;
  return yearOfBirth;
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  console.log(`my name is ${name} and I\'m ${age} years old.`);
  console.log('I was born in ' + yob + '.');
}

whoAmI('Kevin', 25);
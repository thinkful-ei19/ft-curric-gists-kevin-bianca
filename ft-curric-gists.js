function yearOfBirth(age) {
  let yearOfBirth = 2018 - age;
  return yearOfBirth;
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  try {
    if (age <= 0) {
      throw new Error('must be at least 1 years old.');
    }

    if (typeof name !== 'string') {
      throw new Error('must enter a valid name.')
    }
  } catch(e) {
    console.error(e);
  }

  console.log(`my name is ${name} and I\'m ${age} years old.`);
  console.log('I was born in ' + yob + '.');
}

whoAmI('Kevin', 25);
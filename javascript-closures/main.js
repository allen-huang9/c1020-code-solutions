
function graduate(credentials) {

  return function (name) {
    return `${name}, ${credentials}`;
  };
}

const medicalSchool = graduate('M.D.');

const lawSchool = graduate('Esq');

console.log(medicalSchool('Dan Abramov'));
console.log(lawSchool('Ryan Florence'));

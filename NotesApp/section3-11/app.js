const validator = require('validator');

console.log(`Valid Email? ${validator.isEmail('guilherme@gmail.com')}`);
console.log(`Valid URL? ${validator.isURL('https://mead.io')}`)
// Importa la biblioteca 'jsonwebtoken'
const jwt = require('jsonwebtoken');

// Define una clave secreta para firmar el token
const secret = 'myCat';

// Define un objeto de carga útil (payload) que se incluirá en el token
const payload = {
  sub: 1,          // Identificador único del sujeto (subject)
  role: 'customer' // Rol del sujeto
};

// Define una función para firmar un token JWT utilizando el payload y la clave secreta proporcionada
function signToken(payload, secret) {
  // Utiliza el método sign de jwt para firmar el payload utilizando la clave secreta proporcionada
  return jwt.sign(payload, secret);
}

// Genera un token JWT firmado utilizando la función signToken
const token = signToken(payload, secret);

// Imprime el token generado
console.log(token);

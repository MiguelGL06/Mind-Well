// Importa la biblioteca 'jsonwebtoken'
const jwt = require('jsonwebtoken');

// Define una clave secreta para la firma del token
const secret = 'myCat';

// Define un token JWT (este token se usa solo para demostración, normalmente se generaría dinámicamente)
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxNzM4NjgyNn0.yapi5NdxGD_7rLUIUwqPOP1wJEtqpuq4oeiH1KxCKz4';

// Define una función para verificar el token JWT
function verifyToken(token, secret) {
  // Utiliza el método verify de jwt para verificar el token utilizando la clave secreta proporcionada
  return jwt.verify(token, secret);
}

// Verifica el token utilizando la función verifyToken
const payload = verifyToken(token, secret);

// Imprime el payload decodificado del token
console.log(payload);

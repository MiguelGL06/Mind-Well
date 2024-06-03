// Importa la biblioteca 'bcrypt'
const bcrypt = require('bcrypt');

// Define una función asincrónica para generar un hash de la contraseña
async function hashPassword() {
  // Define la contraseña que se desea hashear
  const myPassword = 'admin 123 .202';

  // Utiliza el método hash de bcrypt para generar un hash de la contraseña
  // El segundo argumento (10) es el costo del algoritmo de hash, que determina la complejidad computacional del proceso de hashing
  // Cuanto mayor sea el costo, más lento será el proceso de hashing, lo que hace que sea más difícil de romper mediante ataques de fuerza bruta
  const hash = await bcrypt.hash(myPassword, 10);

  // Imprime el hash generado
  console.log(hash);
}

// Llama a la función hashPassword para generar el hash de la contraseña
hashPassword();

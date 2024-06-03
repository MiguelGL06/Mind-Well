// Importa la biblioteca 'bcrypt'
const bcrypt = require('bcrypt');

// Define una función asincrónica para verificar la contraseña
async function verifyPassword() {
  // Define la contraseña que se verificará
  const myPassword = 'admin 123 .202';

  // Define el hash de la contraseña almacenado
  const hash = '$2b$10$.q.8/z3PP1KrruUqNuK9quJgCHQ.5S4w3.FyKmHEGEFqc19OVEqBW';

  // Utiliza el método compare de bcrypt para comparar la contraseña proporcionada con el hash almacenado
  const isMatch = await bcrypt.compare(myPassword, hash);

  // Imprime el resultado de la comparación (true si coinciden, false si no)
  console.log(isMatch);
}

// Llama a la función verifyPassword para realizar la verificación
verifyPassword();

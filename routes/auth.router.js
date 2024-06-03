const express = require('express'); // Importa Express para crear un enrutador
const passport = require('passport'); // Importa Passport para manejar la autenticación de usuarios
const AuthService = require('./../services/auth.service'); // Importa el servicio de autenticación para realizar operaciones relacionadas con la autenticación

const router = express.Router(); // Crea un enrutador de Express
const service = new AuthService(); // Crea una instancia del servicio de autenticación

// Maneja las solicitudes POST para iniciar sesión
router.post('/login',
  passport.authenticate('local', {session: false}), // Autentica al usuario utilizando la estrategia local de Passport
  async (req, res, next) => {
    try {
      const user = req.user; // Obtiene el usuario autenticado de la solicitud
      res.json(service.signToken(user)); // Envía la respuesta con el token de acceso generado para el usuario autenticado
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

// Maneja las solicitudes POST para enviar un correo electrónico de recuperación de contraseña
router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body; // Obtiene la dirección de correo electrónico del cuerpo de la solicitud
      const rta = await service.sendRecovery(email); // Envía un correo electrónico de recuperación de contraseña utilizando el servicio de autenticación
      res.json(rta); // Envía la respuesta con el resultado de la solicitud de recuperación de contraseña
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

// Maneja las solicitudes POST para cambiar la contraseña utilizando un token de recuperación
router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body; // Obtiene el token de recuperación y la nueva contraseña del cuerpo de la solicitud
      const rta = await service.changePassword(token, newPassword); // Cambia la contraseña utilizando el token de recuperación y la nueva contraseña proporcionada
      res.json(rta); // Envía la respuesta con el resultado del cambio de contraseña
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

module.exports = router; // Exporta el enrutador para su uso en otras partes de la aplicación

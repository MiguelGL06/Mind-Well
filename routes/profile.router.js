const express = require('express'); // Importa Express para crear un enrutador
const passport = require('passport'); // Importa Passport para la autenticación de JWT

const router = express.Router(); // Crea un enrutador de Express

// Maneja las solicitudes GET para obtener las órdenes del usuario autenticado
router.get('/my-orders',
  passport.authenticate('jwt', { session: false }), // Autentica la solicitud utilizando JWT y deshabilita el uso de sesiones
  async (req, res, next) => {
    try {
      const user = req.user; // Obtiene el usuario autenticado desde el objeto de solicitud
      const orders = await service.findByUser(user.sub); // Obtiene las órdenes del usuario utilizando el servicio
      res.json(orders); // Envía la respuesta con las órdenes del usuario en formato JSON
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

module.exports = router; // Exporta el enrutador para su uso en otras partes de la aplicación

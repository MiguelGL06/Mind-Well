// Importa el paquete boom para generar errores HTTP de manera fácil y consistente
const boom = require('@hapi/boom');
// Importa la configuración de la aplicación, que incluye la apiKey
const { config } = require('./../config/config');

// Middleware para verificar la apiKey en las solicitudes entrantes
function checkApiKey(req, res, next) {
  // Obtiene la apiKey del encabezado 'api' de la solicitud
  const apiKey = req.headers['api'];
  // Comprueba si la apiKey coincide con la apiKey configurada en la aplicación
  if (apiKey === config.apiKey) {
    // Si la apiKey es válida, pasa al siguiente middleware
    next();
  } else {
    // Si la apiKey no es válida, genera un error de no autorizado con el paquete boom y pasa al siguiente middleware de manejo de errores
    next(boom.unauthorized());
  }
}

// Middleware para verificar si el usuario tiene el rol de administrador
function checkAdminRole(req, res, next) {
  // Obtiene el usuario de la solicitud, que debería haber sido autenticado previamente
  const user = req.user;
  // Comprueba si el rol del usuario es 'admin'
  if (user.role === 'admin') {
    // Si el usuario tiene el rol de administrador, pasa al siguiente middleware
    next();
  } else {
    // Si el usuario no tiene el rol de administrador, genera un error de no autorizado con el paquete boom y pasa al siguiente middleware de manejo de errores
    next(boom.unauthorized());
  }
}

// Middleware para verificar si el usuario tiene alguno de los roles proporcionados
function checkRoles(...roles) {
  return (req, res, next) => {
    // Obtiene el usuario de la solicitud
    const user = req.user;
    // Comprueba si el rol del usuario está incluido en la lista de roles proporcionados
    if (roles.includes(user.role)) {
      // Si el usuario tiene alguno de los roles proporcionados, pasa al siguiente middleware
      next();
    } else {
      // Si el usuario no tiene ninguno de los roles proporcionados, genera un error de no autorizado con el paquete boom y pasa al siguiente middleware de manejo de errores
      next(boom.unauthorized());
    }
  }
}

// Exporta los middlewares para que puedan ser utilizados en otros archivos
module.exports = { checkApiKey, checkAdminRole, checkRoles };

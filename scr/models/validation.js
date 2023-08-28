const { checkSchema } = require('express-validator');

const validateUser = checkSchema({
  nombre: {
    notEmpty:{
      errorMessage:"¡El campo Nombre es obligatorio!"
    },
    isString:true
  },
  apellido: {
    notEmpty:{
      errorMessage:"¡El campo Apellido es obligatorio!"
    },
    isString:true
  },
  email: {
    isEmail: true,
    errorMessage: 'Email no valido'
  },
  contraseña: {
    isLength: {
      options: { min: 8 },
      errorMessage: '¡La contraseña debe tener minimo 8 caracteres!'
    }
  }
});

const validatePost = checkSchema({
  titulo :{
    isString: true
  },
  descripcionPost: {
    notEmpty: {
      errorMessage: "¡Tu post debe tener contenido para publicarlo!"
    },
    isString: true
  }
});

const validateComment = checkSchema({
  descripcionComentario: {
    notEmpty: {
      errorMessage: "¡No puedes enviar un comentario vacio!"
    }
  }
});

module.exports = {validateUser, validatePost, validateComment};
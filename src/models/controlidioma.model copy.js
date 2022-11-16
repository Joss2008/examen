const { model, Schema } = require('mongoose');

const ControlSchema = Schema(
    {
        porcentaje_lectura:{
            type: String,
            required: [ true, 'El porcentaje de lectura es necesario'],
            unique:true
        },

        replicated:{
            type: Boolean,
            default: false,
            required:true
        },

        porcentaje_escritura:{
            type: String,
            required: [ true, 'El porcentaje de escritura es necesario'],

            unique:true            

        },
        porcentaje_escuchar_y_hablar:{
            type: String,
            required: [ true, 'El porcentaje de escchar y hablar es necesario'],
            unique:true            

        }
    }
);


module.exports = model('Control', ControlSchema );
const mongoose = require('mongoose');


// Employee Schema
const Employee = mongoose.model('Employee', {
    nombre:{
        type: String,
        required:true
    },
    apellido_p:{
        type: String,
        required:true
    },
    apellido_m:{
        type: String,
        required:true
    },
    cel:{
        type: String,
        required:true
    }

});


module.exports = { Employee }
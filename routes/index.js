const express = require('express');
const router = express.Router();

const { Employee } =require('../models/employee');


//Get All Employees
router.get('/api/empleados', (req, res) => {
    Employee.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//Save Employee
router.post('/api/empleados/agregar', (req, res) => {
    const emp = new Employee({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        cel: req.body.cel
    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Empleado Agreado Con Exito', addEmployee: data})
        } else {
           console.log(err);
        }
    });
});


//Delete Employee
router.delete('/api/employee/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Empleado Eliminado Con Exito', deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
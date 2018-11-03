//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_vicroni(){
    let universidades;
    await Universidad.find({}, function (err, obj) {
        universidades = obj;
    });
    let categorias;
    await Categoria.find({}, function (err, obj) {
        categorias = obj;
    });
    let sedes;
    await Sede.find({}, function (err, obj) {
        sedes = obj;
    });

    const carrera = new Carrera({
        nombre: 'Hola',
        categoria: categorias[1]._id,
        semestres: 12,
        sede: sedes[1]._id,
        materias: []
    });
    console.log('Hola');
}

exports.work = function () {
    carga_carreras_vicroni();
};
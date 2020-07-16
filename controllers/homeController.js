
const express = require('express')
const haladera = require('../api/NumerosJaladera')
const Matrix = require('../api/Matrix')





 exports.haladera = function(req,res){
      
    res.json(haladera.NumerosJaladera)
   
 }

 exports.basetesla = function(req,res){
      const base = new Matrix(new Date()).getBaseTesla();
     // console.log(base)
      res.json(base)
 }


 exports.vibraciones = function(req,res){
    const matrix = new Matrix(new Date())
    const vibradia = matrix.getVibracion().VibracionDia;
    const NumsCalientes = matrix.getVibracion().NumsCalientes
    const ParejasCalientes = matrix.getVibracion().ParejasCalientes
    let dataVibraciones = {vibradia:vibradia,NumsCalientes:NumsCalientes,ParejasCalientes:ParejasCalientes
      }
     res.json(dataVibraciones)
}


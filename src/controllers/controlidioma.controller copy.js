const { response } = require('express');
const { ControlIdiomaModel } = require('../models');
const config = require('../config');

const getcontroles= async (req, res =  response)=>{
    const controles=  await ControlIdiomaModel.find();
    return res.send(controles)
}

const createControlcopy = async(req,res=response)=>{
    const { body } =  req;
    const createcontrol =  await ControlIdiomaModel.create(body )
    res.send(createcontrol);
}


 module.exports ={
    createControlcopy,
    getcontroles
 }


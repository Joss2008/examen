const { response } = require('express');
const { ControlIdiomaModel } = require('../models');
const { ControlIdiomaModelcopy } = require('../models');

const getcontroles= async (req, res =  response)=>{
    const controles=  await ControlIdiomaModel.find();
    return res.send(controles)
}

const createControl = async(req,res=response)=>{
    const { body } =  req;
    const createcontrol =  await ControlIdiomaModel.create(body )
    res.send(createcontrol);
}

// const copiardatos = async(req,res=response)=>{
//     const { replicated } =  req.params;
//     const { status, ...data } =  req.body;
//     const copiardato =  await ControlIdiomaModel.create(replicated,data, {new: true} )
//     res.send(copiardato);
// }

const getControl= async (req, res =  response)=>{
    const {replicated} = req.params
    const control=  await ControlIdiomaModel.findById(replicated);
    return res.send(control)
}

const copyControl= async (req, res =  response)=>{

    const {replicated} = req.params
    if (replicated==false){
        const datoscopy = await ControlIdiomaModelcopy.create(body)
            const {id} = req.params;
            const { body} =  req.body;
            const updatedcontrol =  await ControlIdiomaModel.findByIdAndUpdate(id,{replicated: false}, {new: true})
            res.json(updatedcontrol);
            res.send(datoscopy)
    }
}

 module.exports ={
    createControl,
    getcontroles,
    copyControl,
    getControl
 }


const express = require('express');
const router = express.Router();

//index
router.get('/', (req,res) => {
    res.send('Visualizzo tutti i piatti')
})

//show
router.get('/:id', (req,res)=>{
    res.send(`Visualizzo un solo piatto tramite id ${req.params.id}`)
})

//store
router.post('/', (req,res)=>{
    res.send('Creo un nuovo piatto')
})

//update
router.put('/:id', (req,res)=>{
    res.send(`Modifico interamente un piatto tramite id ${req.params.id}`)
})

//modify
router.patch('/:id', (req,res)=>{
    res.send(`Modifico parzialmente un piatto tramite id ${req.params.id}`)
})

//destroy
router.delete('/:id', (req,res)=>{
    res.send(`Elimino un elemento tramite id ${req.params.id}`)
})


module.exports = router;

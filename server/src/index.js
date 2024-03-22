const express = require('express');
const app = express();
const Television = require('./models/telModel')
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json())

require('./database/conn')

// POST

app.post('/television', async (req, res) => {

    try{

        const tData = new Television(req.body);
        const response = await tData.save();
        res.status(201).send(response);
        
    }catch(error){
        console.log(error)
    }

})


// GET

app.get('/television', async(req, res) => {
    try{

        const response = await Television.find();
        res.status(200).send(response);

    }catch(error){
        console.log(error)
    }
})

// get by id

app.get('/television/:id', async (req ,res) => {

    try{
        const _id = req.params.id;
        const response = await Television.findById(_id);
        res.status(200).send(response)

    }catch(error){
        console.log(error)
    }

})



// PUT/PATCH

// path request

app.patch('/television/:id', async (req, res) => {

    try{    
        const _id = req.params.id;
        const response = await Television.findByIdAndUpdate(_id, req.body, {new : true})
        res.status(201).send(response)

    }catch(error){
        console.log(error)
    }

})


// DELETE

app.delete('/television/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const response = await Television.findByIdAndDelete(_id);
        res.status(200).send(response);

    }catch(error){
        console.log(error)
    }
})


app.listen(8000, () => {
    console.log('server is listening on http://localhost:8000')
})
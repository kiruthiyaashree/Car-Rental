const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser=require('body-parser');
require('dotenv').config();
const app = express();
const url = process.env.mongodb_url;
mongoose.connect(url).then(()=>
{
  console.log("mongoose connected");
})
.catch(()=>
{
  console.log("error")
})
app.use(bodyParser.json());
app.use(cors());
const searchSchema=new mongoose.Schema({
    carType:String,
    yeat:String,
    seat:String,
    price:String,
});

const Form=mongoose.model('searchForm',searchSchema);

app.post('/search',async(req,res)=>
{
    try{
        const {carType,year,seat,price}=req.body;
        const formData=new Form({carType,year,seat,price});
        await formData.save();
        res.status(201).json({message:'Searching'});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({message:'Server error'});
    }
})

port = 5000
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
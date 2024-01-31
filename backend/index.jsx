const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt');
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
const signupSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmPassword:String,
})

const Form=mongoose.model('searchForm',searchSchema);
const signup_Details=mongoose.model('SignupDetails',signupSchema);
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

app.post('/signup',async(req,res)=>
{
    try{
        const {username,email,password,confirmPassword}=req.body;
        const signupData=new signup_Details({username,email,password,confirmPassword});
        await signupData.save();
        res.status(201).json("signed up successfully");
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({message:'Server error'});
    }
})
app.post('/signin', async (req, res) => {
    try {
        const { email_verify, password_verify } = req.body;

        // Find the user by email in the database
        const user = await signup_Details.findOne({ email: email_verify });

        if (!user) {
            // User not found
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password_verify, user.password);
        
        if (!passwordMatch) {
            // Passwords don't match
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If everything is okay, return success
        res.status(200).json({ message: 'Signed in successfully!' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

port = 5000
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
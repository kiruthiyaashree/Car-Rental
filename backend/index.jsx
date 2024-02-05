const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
const url = process.env.mongodb_url;

mongoose.connect(url).then(() => {
    console.log("mongoose connected");
}).catch(() => {
    console.log("error")
});

app.use(bodyParser.json());
app.use(cors());

const searchSchema = new mongoose.Schema({
    carType: String,
    year: String,
    seat: String,
    price: String,
});

const signupSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirm_password:String,
});

const Form = mongoose.model('searchForm', searchSchema);
const signup_Details = mongoose.model('SignupDetails', signupSchema);

app.post('/search', async (req, res) => {
    try {
        const { carType, year, seat, price } = req.body;
        const formData = new Form({ carType, year, seat, price });
        await formData.save();
        res.status(201).json({ message: 'Searching' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/signup', async (req, res) => {
    try {
        const existingUserName=await signup_Details.findOne({username:req.body.username});
        if(existingUserName){
            return res.json({message:'Username already exists'});
        }
        const signupData = new signup_Details({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            confirm_password: await bcrypt.hash(req.body.password, 10),

        });
        await signupData.save();
        res.status(201).json("signed up successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
app.post('/signin', async (req, res) => {
    try {
        const { email_verify, password_verify } = req.body;
        const user = await signup_Details.findOne({ email: email_verify });
        // console.log(user);
        if (!user) {
            return res.json({message:'User not found!'});
        }
        const passwordMatch = await bcrypt.compare(password_verify, user.password);
        if (!passwordMatch) {
            return res.json({message:'wrong credentials'});
        }
        res.status(200).json({ message: `${user.username} signed in` });
    } catch (error) {
        // console.error("Error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

const CarDetailsSchema = new mongoose.Schema({
    name: String,
    review: String,
    seat: String,
    year: String,
    fuel: String,
    doors: String,
    persons: String,
    kms: String,
    pay: String,
});

const CarDetails = mongoose.model("CarDetails", CarDetailsSchema);

app.get('/car-details', async (req, res) => {
    try {
        // console.log(CarDetails.find({}));
        const carDetails = await CarDetails.find();
        res.json(carDetails);
    } catch (error) {
        console.error('Error fetching car details:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

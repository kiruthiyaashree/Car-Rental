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

const signupSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirm_password:String,
    usertype:{
        type:String,
        default:"customer",
    }
});

const signup_Details = mongoose.model('SignupDetails', signupSchema);

app.post('/search', async (req, res) => {
    try {
        const { cartype, year, seat, pay } = req.body;
        // console.log(cartype,year,seat,pay);
        let query = {}; 
        if (cartype) {
            query.cartype = cartype;
        }
        if (year) {
            query.year = year;
        }
        if (seat) {
            query.seat = seat;
        }
        if (pay) {
            query.pay = pay;
        }

        const responseResults = await CarDetails.find(query);
        // console.log(responseResults);
        res.json({ responseResults });
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
const RentingSchema=new mongoose.Schema({
    username:String,
    name:String,
    image:String,
    seat:String,
    year:String,
    fuel:String,
    doors:String,
    persons:String,
    kms:String,
    pay:String,
    days:String,
    daysRenting:String,
    carsCount:String,
    checkInDate:String,
    checkOutDate:String,
    checkInTime:String,
    checkOutTime:String,
    total:String,
})
const RentingDetails=mongoose.model("rentingschema",RentingSchema);
app.post('/rent',async(req,res)=>
{
    try{
        const rentedCar=new RentingDetails({
            username:req.body.username,
            name:req.body.name,
            image:req.body.image,
            seat:req.body.seat,
            year:req.body.year,
            fuel:req.body.fuel,
            doors:req.body.doors,
            persons:req.body.persons,
            kms:req.body.kms,
            pay:req.body.pay,
            daysRenting:req.body.daysRenting,
            carsCount:req.body.carsCount,
            checkInDate:req.body.checkInDate,
            checkOutDate:req.body.checkOutDate,
            checkInTime:req.body.checkInTime,
            checkOutTime:req.body.checkOutTime,
            total:req.body.total,
        });
        await rentedCar.save();
        res.status(201).json({message:'Car rented successfully'});
    }
    catch(error)
    {
        console.log('renting errors',error);
    }
})
app.post("/rentedCarDetails",async(req,res)=>
{
    try{
        const responseRentedCarDetails=await RentingDetails.find({username:req.body.username});
        res.json({responseRentedCarDetails});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
})
app.post("/cancelingCar",async(req,res)=>
{
    try{
        // console.log(req.body);
        await RentingDetails.deleteOne({ carId: req.body.car_id });
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:'error on cancelation'});
    }
})

app.post("/add-administrator",async(req,res)=>
{
    try{
        const {username,email,password,confirm_password}=req.body;
        const existingAdmin = await signup_Details.findOne({email});
        if(existingAdmin){
            res.json({message:"User with this email is not authorized"});
        }
        const administrator = new signup_Details({
            username,
            email,
            password: await bcrypt.hash(password,10),
            confirm_password:await bcrypt.hash(confirm_password,10),
            usertype:'admin',
        })
        await administrator.save();
        res.status(200).json({message:"administrator added successfully"});
    }
    catch(error){
        console.log(error);
        res.send("wrong in signing up the administrator credentials");
    }
})

const port = 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

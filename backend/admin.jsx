const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const url = process.env.mongodb_url;

mongoose.connect(url).then(() => {
    console.log("mongoose connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

const adminDBUrl = process.env.administration_mongodb_url;
const adminDBConnection = mongoose.createConnection(adminDBUrl);

// Define admin schema
const adminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    usertype: {
        type: String,
        default: "admin",
    }
});

const AdminModel = adminDBConnection.model('Admin', adminSchema);

const p = "";
bcrypt.hash(p, 10, (err, hashedPassword) => {
    if (err) {
        console.error('Error hashing password:', err);
        return;
    }

    const adminData = new AdminModel({
        "username": "adminAtCarrental",
        "email": "administrator@carrental.in",
        "password": hashedPassword,
        "usertype": "admin"
    });

    adminData.save()
        .then(() => {
            console.log('Admin data saved successfully');
        })
        .catch((err) => {
            console.error('Error saving admin data:', err);
        });
});

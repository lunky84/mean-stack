const express = require('express');
const bodyParser = require("body-parser");
const Post = require("./models/post");
const mongoose = require("mongoose");



const app = express();

mongoose.connect("mongodb+srv://john:sZWN7ppjccxk2ZU@cluster0-sawjs.mongodb.net/test?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to database!');
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use((req, res, next) => {
    console.log('Frist middleware')
    next();
});


app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.use("/api/posts", (req, res, next) => {
    // res.send('Hello from express');
    const posts = [
    {
        id: 'fasd34424',
        title: 'First server-side post',
        content: 'This is coming from the server'
    },
    {
        id: 'sdfer3443',
        title: 'Second server-side post',
        content: 'This is coming from the server'
    }
    ];
    res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;
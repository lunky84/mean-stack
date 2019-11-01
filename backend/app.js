const express = require('express');

const app = express();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header",
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

app.use('/api/posts', (req, res, next) => {
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
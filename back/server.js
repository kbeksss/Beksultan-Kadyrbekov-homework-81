const express = require('express');
const cors = require('cors');
const links = require('./app/links');
const mongoose = require('mongoose');

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());

const run = async () => {
    await mongoose.connect('mongodb://localhost/urls', {
        useNewUrlParser: true,
        useUnifiedTechnology: true
    });

    app.use('/', links);

    app.listen(port, () => {
        console.log('Server running on port: ', port);
    })
};

run().catch(e => console.error(e));

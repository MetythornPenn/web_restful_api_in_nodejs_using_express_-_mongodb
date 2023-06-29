const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://mongo:27017/microservice', {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a sample model and route
const SampleModel = mongoose.model('Sample', new mongoose.Schema({
    name: String,
}));

app.get('/api/sample', async (req, res) => {
    try {
        const samples = await SampleModel.find();
        res.json(samples);
    } catch (error) {
        console.error('Error retrieving samples:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

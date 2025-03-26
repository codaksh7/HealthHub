const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/healthhub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const FacilitySchema = new mongoose.Schema({
    name: String,
    type: String,
    address: String,
    latitude: Number,
    longitude: Number,
});
const Facility = mongoose.model('Facility', FacilitySchema);

app.get('/facilities', async (req, res) => {
    const facilities = await Facility.find();
    res.json(facilities);
});

app.listen(5000, () => console.log('Server running on port 5000'));\
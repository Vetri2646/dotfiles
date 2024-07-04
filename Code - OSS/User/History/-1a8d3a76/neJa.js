const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://atlas-sql-668553942d96396c80b1040e-66q4x.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin'; // Replace with your MongoDB URI

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const UserDetailsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fullName: String,
    address: String,
    panNumber: String,
    company: String,
    currentSalary: Number,
    previousSalary: Number,
    ownsHouse: Boolean,
    rentAmount: Number,
    groceryExpense: Number,
    currentEMIs: Number,
    previousHikeDate: Date,
    nextHikeDate: Date,
    bankName: String,
    mallVisits: Number,
    // Add more fields as needed
});

const User = mongoose.model('User', UserSchema);
const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (err) {
        res.status(400).send('Error registering user');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(400).send('Invalid credentials');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
});

app.post('/questionaire', async (req, res) => {
    const { token, ...userData } = req.body;
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const newUserDetails = new UserDetails({ userId: decoded.userId, ...userData });
        await newUserDetails.save();
        // Here you can add the ML model prediction logic
        res.status(201).send('User details submitted');
    } catch (err) {
        res.status(400).send('Error submitting user details');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

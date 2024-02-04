const express = require('express');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`HTTP Method: ${req.method} and URL: ${req.url}`);
    next();
});

app.use('/users', userRouter);
app.use('/notes', noteRouter);


app.get('/', (req, res) => {
    res.send('Notes App API is running...');
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(5000, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log('Error:', error);
    });

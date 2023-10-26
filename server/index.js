require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const router = require('./router/index')
const formData = require('express-form-data')
const fileUpload = require('express-fileupload')
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.static('static'))
app.use(formData.parse())
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);
app.use(fileUpload({}))

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
        console.log("Maybe you don't have access to the database, I need to add your IP address in whitelist.");
    }
}

start()
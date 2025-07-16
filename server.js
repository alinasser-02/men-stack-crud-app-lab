const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require('path')
const methodOverride =require('method-override')


// CONTROLLERS
const foodController = require('./controllers/foodController')

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
console.log(`Conected to MongoDB${mongoose.connection.name}`);
});


// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(morgan('dev'))

// GET /(Landing Page)
app.get('/' ,(req,res)=>
{
res.render('index.ejs')
})

// ROUTES
// app.get('/test' ,(req,res)=>
// {
// res.send('<h1>Test test 1 2 3</h1>')
// })


app.use('/foods', foodController)

// APP LISTENING
app.listen(3001, () => {
  console.log("Listening to PORT: 3001");
});
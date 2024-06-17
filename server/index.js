// imports from packages
const express = require('express');
const mongoose = require('mongoose');

//imports from other files

const authRouter=require('./routes/auth.js');

//init
const PORT = 3000;
const app = express();
const DB ='mongodb+srv://sachinverma:1D8gh1CINalRWMj1@flutteramazonclonelearn.pdssicv.mongodb.net/?retryWrites=true&w=majority&appName=FlutterAmazonCloneLearning';

//middleware   // CLIENT -> middleware SERVER -> CLIENT
app.use(express.json())
app.use(authRouter);

//Connections
mongoose
.connect(DB)
.then(()=>{
    console.log("Connection Sunccessful");
})
.catch((e) => {
    console.log(e);
})


app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected at port${PORT}`);
})
// localhost
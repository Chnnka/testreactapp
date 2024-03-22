require('dotenv').config();

const express=require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');


const PORT = 3001;
const HOST = '127.0.0.1';

app.use(cors());
app.use(express.json());



const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error has occured ${error}`);
  }
}

connect();

const server =app.listen(PORT,HOST,()=>{
  console.log(`Server is listenning to ${server.address().port}`)
});


app.use('/api',router);
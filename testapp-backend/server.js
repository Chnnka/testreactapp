const express=require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3001;
const HOST = '127.0.0.1';

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://channakagunawardana:585@STgett@cluster0.hyu5srk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async() => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error has occured ${error}`);
  }
}

connect();

const server =app.listen(PORT,HOST,()=>{
  console.log(`Server is listenning to ${server.address().port}`)
});
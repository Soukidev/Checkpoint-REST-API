const mongoose = require("mongoose")
const express = require("express")

const path = require('path');
require('dotenv').config({path : path.join(__dirname,'config','.env')
})

// const User = require('./models/User') we already use it in routes.js file

const userRoutes = require('./user.routes'); // Make sure this path is correct


const app = express()

app.use(express.json())

const port = process.env.PORT || 4000

const mongooseOptions = {
    dbName: 'gmc'
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions )
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });



  app.use("/api/users",userRoutes )


app.listen(port, ()=>{
console.log(`you server is running on port localhost:${port}`)
})
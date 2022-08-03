const express = require("express");
require("./db/conn");
//import router

const studentRouter=require("./routers/student")

//model.student.js
const Student = require("./models/students");
const port = process.env.PORT || 2000;

const app = express();

//read below comment(we use express.json to use postman body)
app.use(express.json());

// You DO NOT NEED express.json()and express.urlencoded()
// for GET Request or DELETE Request.We only need it for post and put req.

// express.json() is a method inbuilt in express to recognize the incoming
// Request Object is a JSON Object.This method is called as a middleware
// in your application using the code: app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello p1234");
});







//1.create a new router
// const router=new express.Router(); 


//2.we need to define the router
// router.get("/kashaf",(req,res)=>{
//   res.send("hello ")
// })


//3.we need  to register our router

 app.use(studentRouter)





app.listen(port, () => {
    console.log("connection is setup " + port);
  });
  
  
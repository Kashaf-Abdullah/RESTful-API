const express =require("express")

const router=new express.Router();
const Student=require("../models/students")


//2.we need to define the router
router.get("/kashaf",(req,res)=>{
    res.send("hello ")
  })
  


//   .....




router.get("/", (req, res) => {
    res.send("hello p1234");
  });
  
//create a new students
router.post("/students", (req, res) => {
    //data insert  ,send post request from postman
    console.log(req.body);
  
    const user = new Student(req.body);
  
    //return promise
    user
      .save()
      .then(() => {
        res.status(201).send(user);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
    // res.send("hello people");
  });
  
  //using async/await
  
  // app.post("/",async(req,res)=>{
  //     try{
  //         const user=new Student(req.body);
  //         const createUser=await  user.save();
  //         res.status(201).send(createUser)
  //     }
  //     catch(err){
  //         res.status(400).send(err);
  //     }
  
  //     })
  
  //read the data of registered students
 router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (err) {
      res.send(err.message);
    }
  });
  
  //get the individual student data using id
  
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
  
      const studentData = await Student.findById(_id);
  console.log(studentData)
      if(!studentData){
          return res.status(404).send()
      }
      else{
      res.send(studentData);}
  
  
    } catch (err) {
      res.send(err.message);
    }
  });
  
  
  
  // ............
  // Update the student bby id
  
  router.patch("/students/:id",async(req,res)=>{
  try{
  const _id=req.params.id;
  //first _id is database id and second _id is ==>const _id=req.params.id;
  
  const updatebyid=await Student.findByIdAndUpdate(_id,req.body,{
  
  new:true
  });
  
  
  //so we write this Student.findByIdAndUpdate({_id:_id})
  res.send(updatebyid);
  }
  catch(err){
      res.status(404).send(err.message)
  
  }
  })
  
  
  //DELETE data by student id
  router.delete("/students/:id",async(req,res)=>{
      try{
          const _id=req.params.id;
         const deletestudent=await Student.findByIdAndDelete(_id);
      if(!_id){
          return res.status(404).send()
      }
      else{
           res.send(deletestudent)
      }
      }
      catch(err){
          return res.status(404).send(err)
      }
  })
  

  module.exports=router;
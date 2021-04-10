const express=require('express');
quizService=require('../Services/quizService');
questionService=require('../Services/questionFeeder');
sr=require('../Services/spaceRepetiion');
const router=express.Router();   
router.post('/submit',async (req,res)=>{
    userId=2;
result=await quizService.submit(req.body,userId);
 res.status(200).send({'result:':result});
});
module.exports=router;
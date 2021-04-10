const express=require('express');
questionService=require('../Services/questionFeeder');
sr=require('../Services/spaceRepetiion');
const router=express.Router();   
router.post('/add',async (req,res)=>{
    question=req.body;
   await questionService.addQuestion(question);
});
router.get('/test',(req,res)=>{
    res.send("working");
})
router.get('/top10',async (req,res)=>
{
    userId=2;
const questions=await questionService.getTopQuestion(userId);
res.status(200).send({'questions':questions});
});
module.exports=router;
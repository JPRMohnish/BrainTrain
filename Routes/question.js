const express=require('express');
questionService=require('../Services/questionFeeder');
const router=express.Router();
router.post('/add',async (req,res)=>{
    question=req.body;
   await questionService.addQuestion(question);
});
router.get('/top10',(req,res)=>
{
const questions=await questionService.getTopQuestion(req.body);
res.status(200).send({'questions':questions});
});
module.exports=router;
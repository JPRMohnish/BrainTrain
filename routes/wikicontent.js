const express = require('express');
const axios = require('axios');
const router= express.Router();
async function questionSets(x) {
    let result=[];
    await Promise.all(x.map(async (x) => {
        await axios.get('https://en.wikipedia.org/w/api.php',{params:{
        format:'json',
        action:'query',
        prop:'extracts',
        exintro:true,
        explaintext:true,
        redirects:1,
        titles:x
    }}).
    then(async (response)=> {
        var pages=response.data.query.pages;
        var pagekey=Object.keys(pages);
        var extract=pages[pagekey[0]].extract;
        //console.log(extract);
        await axios.get('http://localhost:5000',{params:{
        data:extract
        }}).then ( (response)=>{
            var quizSet=response.data;
            let res =[];
            quizSet.map((question) => {
                var l=question.length;
                res.push({
                    Question:question[l-1],
                    Answer:question[l-2]
                });
            });
            result.push({
                topic:x,
                questionSet:res
            });
            //console.log(res);
        }).catch((err)=>{
            //console.log(err);
            return {};
        })

    }).catch((err)=>{ 
        return {};
        //console.log(err);
    })
         
    }))
    return result;
}
router.get('/',async (req,res)=> {
    var x=req.query.topics;
    x=x.split(',');
    console.log(x[0]+" "+x[1]);
    let result=await questionSets(x);
    console.log(result);
    res.send(result);
});
module.exports=router;
//?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+x[0]
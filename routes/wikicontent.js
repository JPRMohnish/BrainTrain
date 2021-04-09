const express = require('express');
const request = require('request');
const router= express.Router();
router.get('/',function(req,res) {
    var x=req.query.topics;
    x=x.split(',');
    console.log(x[0]+" "+x[1]);
});
module.exports=router;
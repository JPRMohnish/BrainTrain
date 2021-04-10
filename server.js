const express=require('express');
const app=express();
const sequelize=require('./Services/mysqlConnection').sequelize;
port=3000;
app.get('/',(req,res)=>{
	console.log("Hello");
	res.send("Hello");
});
main=async()=>{
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
//app.get('/',function(req,res){console.log('routes are working');});



app.listen(3000,()=>{
	console.log("Server started listening at port no:"+port);
});
}
main();
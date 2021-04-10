const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const sequelize=require('./Services/mysqlConnection').sequelize;
port=3000;
app.get('/',(req,res)=>{
	console.log("Hello");
	res.send("Hello");
});
app.use('/question',require('./Routes/question'));
app.use('/quiz',require('./Routes/quiz'));
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
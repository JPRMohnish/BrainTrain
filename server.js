const express=require('express');
const bodyParser = require('body-parser');   
const app=express();
const cors=require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
app.set("view engine","ejs");

app.get ('/',(req , res) => {
	console.log("Hello");
	res.send("Hello");
});

router = express.Router();
app.use('/text',require('./routes/wikicontent'));
app.listen (3000 , (err) => {
	if(err) console.log(err);
	else console.log('Server Initiated\n');
});


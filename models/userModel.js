const {sequelize,DataTypes}=require('../Services/psqlConnection');
const hash=require('../Services/hashPassword');
userSchema= {
email:
{
	type:DataTypes.STRING,
	allowNull: false,
},
password:
{
	type:DataTypes.STRING,
	allowNull: false,
	set(x)
	{
		this.setDataValue('password',hash(x));
	}

},
ifEmailVerified:
{
	type:DataTypes.BOOLEAN,
	defaultValue:false,
},
phoneNumber:
{
	type:DataTypes.STRING,
	allowNull: true,
},
ifPhoneVerified:
{
	type:DataTypes.BOOLEAN,
	defaultValue:false,
},
};
module.exports=sequelize.define('user',userSchema);
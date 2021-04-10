const { sequelize, DataTypes } = require('../Services/mysqlConnection');
const questionModel=require('../models/questionModel')(sequelize, DataTypes);
const topicModel=require('../models/topicModel')(sequelize, DataTypes);
questionModel.topicModel=questionModel.belongsTo(topicModel,{ foreignKey: 'topicId' });
topicModel.hasMany(questionModel);
exports.addQuestion=async (question)=>
{
    try{
const {title,description,answer}=question;
console.log(title);
t=await topicModel.findOne({ where: { title:title} });
if(t==null)
{
    t=await topicModel.create({title:title});
   // console.log(p.topicId);return;
}
const u = await questionModel.create({
    description:description,
    answer:answer,
    title:title,
    topicId: t.topicId,
});
    }
    catch(e)
    {
        console.log(e);
    }
}
exports.getTopQuestion=(userId)=>{
// get top 5 topics
//get 2 questions from each topic

}
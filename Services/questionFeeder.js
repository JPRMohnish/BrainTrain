const { sequelize, DataTypes } = require('../Services/mysqlConnection');
const questionModel=require('../models/questionModel')(sequelize, DataTypes);
const topicModel=require('../models/topicModel')(sequelize, DataTypes);
//questionModel.topicModel=questionModel.belongsTo(topicModel,{ foreignKey: 'topicId' });
//topicModel.hasMany(questionModel);
spacerepetetion=require('../Services/spaceRepetiion');
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
exports.getTopQuestion=async (userId)=>{
const topics=await spacerepetetion.fetchTop5Topics(userId);
console.log('topicS:',topics);
var Questions=[];
for(topic of topics)
{
      var qIds=await spacerepetetion.fetchTop2Questions(topic.topicId,userId);
      console.log("questionId:\n",qIds);
      try{
      for(id of qIds)
      {
          console.log(id.questionId);
        q=await questionModel.findOne({where:{
            'id':id.questionId,
        }});
        console.log(q);
        Questions.push(q);
      }
    }
    catch(e)
    {
        console.log(e);
    }
}
return Questions;
//get 2 questions from each topic

}
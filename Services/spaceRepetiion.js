const { sequelize, DataTypes } = require('../Services/mysqlConnection');
const questionModel=require('../models/questionModel')(sequelize, DataTypes);
const topicModel=require('../models/topicModel')(sequelize, DataTypes);
const userQuestionModel=require('../models/userquestionModel')(sequelize, DataTypes);
const userTopicModel=require('../models/userTopicModel')(sequelize, DataTypes);
//topicModel.belongsTo(userTopicModel,{foreignKey:'topicId'});
exports.fetchTop5Topics=async (userId)=>{
    console.log("sdkdskds");
    console.log('userId:>',userId);
x=await topicModel.findAll({
    raw:true,
});
console.log('x:',x);
for(i of x){
temp=await userTopicModel.findAll({where:{topicId:i.topicId}});
    if(temp.length==0)
{
    userTopicModel.create(
        {
           userId:userId,
           topicId:i.topicId,
           attemptNo:0,
        }
    );
}
}
top5=await userTopicModel.findAll({
    limit:5,
    order:[
        ['nextPracticeDate','ASC']
    ],
    raw:true,
    attributes:['topicId']
});
console.log(top5);
return top5;
}
exports.fetchTop2Questions=async(topicId,userId)=>{

    x=await questionModel.findAll({
        raw:true,
    });
    for(i of x){
    temp=await userQuestionModel.findAll({where:{questionId:i.id}});
        if(temp.length==0)
    {
        userQuestionModel.create(
            {
               userId:userId,
               questionId:i.id,
               attemptNo:0,
            }
        );
    }
    }
    top2=await userQuestionModel.findAll({
        limit:2,
        order:[
            ['nextPracticeDate','ASC']
        ],
        raw:true,
        attributes:['questionId']
    });
    console.log(top2);
    return top2;



}
const { sequelize, DataTypes } = require('../Services/mysqlConnection');
const questionModel=require('../models/questionModel')(sequelize, DataTypes);
const topicModel=require('../models/topicModel')(sequelize, DataTypes);
const userQuestionModel=require('../models/userquestionModel')(sequelize, DataTypes);
const userTopicModel=require('../models/userTopicModel')(sequelize, DataTypes);
spacerepetetion=require('../Services/spaceRepetiion');
function calculate(d,n)
{
    relative_accuracy=user_accuracy/avg_accuracy;
    console.log(relative_accuracy);
    inc=Math.pow(1+relative_accuracy, n);
    console.log(d);
    console.log(inc);
    //return date+inc*1000*60;
    
   d+=3000;
   console.log(d);
return d;
}
exports.submit=async (quizResponse,userId)=>{
    score=0;
    console.log(quizResponse.questions);
    try{
    Q=quizResponse.questions;
    Q=JSON.parse(Q);
    console.log(Q);
}
catch(e)
{
    console.log(e);
} try{
    for(question of Q)
    {
        console.log(question);
       const {topicId,questionId,marked}=question;
        
        qs=await userQuestionModel.findOne({where:{questionId:questionId}});
        ts=await userTopicModel.findOne({where:{topicId:topicId}}); 
    
        avg_accuracy=await questionModel.findOne({where:{id:questionId}});
        user_accuracy=qs.score/qs.attemptNo;
        next_date_question=calculate(qs.nextPracticeDate,qs.attemptNo-qs.score+1,user_accuracy,avg_accuracy);
        avg_accuracy=await topicModel.findOne({where:{topicId:topicId}});
        user_accuracy=ts.score/ts.attemptNo;
        next_date_topic=calculate(ts.nextPracticeDate,ts.attemptNo-ts.score+1,user_accuracy,avg_accuracy);
         
        await questionModel.update({
        userAttempted: sequelize.literal('userAttempted + 1')
    },{
        where:{id:questionId}
    });
    await userQuestionModel.update({
        attemptNo: sequelize.literal('attemptNo + 1')
    },{
        where:{questionId:questionId}
    });
    await topicModel.update({
        userAttempted: sequelize.literal('userAttempted + 1')
    },{
        where:{topicId:topicId}
    });
    await userTopicModel.update({
        attemptNo: sequelize.literal('attemptNo + 1')
    },{
        where:{topicId:topicId}
    });
       if(marked==1)
       {
          score++;
        await questionModel.update({
            userCorrected: sequelize.literal('userCorrected + 1')
        },{
            where:{id:questionId}
        });
        await userQuestionModel.update({
            score: sequelize.literal('score + 1'),
            nextPracticeDate:next_date_question
        },{
            where:{questionId:questionId}
        });
        await topicModel.update({
            userCorrected: sequelize.literal('userCorrected + 1')
        },{
            where:{topicId:topicId}
        });
        await userTopicModel.update({
           score: sequelize.literal('score + 1'),
           nextPracticeDate:next_date_topic,
        },{
            where:{topicId:topicId}
        });
       }
       
    }}
    catch(e)
    {
        console.log('sdsjds:',e);
    }
    return score;
}
//submit([{topicId:1,questionId:2,marked:1}],2);
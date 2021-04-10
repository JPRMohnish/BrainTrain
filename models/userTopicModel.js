'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class userTopic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    userTopic.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId:
        {
          type: DataTypes.INTEGER,
           allowNull:false,
        },
        topicId:
        {
           type: DataTypes.STRING,
           allowNull:false,
        },
         score:
        {
           type: DataTypes.INTEGER,
           defaultValue:0,
        },
        lastAttempted:
        {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        nextPracticeDate:
        {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        attemptNo:
        {
           type: DataTypes.INTEGER,
           defaultValue:0,
        },
        deletedAt:
        {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'userTopic',
    });
    return userTopic;
};
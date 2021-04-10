'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class userQuestion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    userQuestion.init({
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
        questionId:
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
        deletedAt:
        {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'userQuestion',
    });
    return userQuestion;
};
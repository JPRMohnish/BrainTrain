'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class topic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    topic.init({
        topicId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title:
        {
          type: DataTypes.STRING,
           allowNull:false,
        },
        userAttempted:
        {
            type: DataTypes.INTEGER,
            default:0,
        },
        userCorrected:
        {
            type: DataTypes.INTEGER,
            default:0,
        },
        deletedAt:
        {
            type: DataTypes.DATE,
            allowNull: true,
          
        },
    }, {
        sequelize,
        modelName: 'topic',
    });
    return topic;
};
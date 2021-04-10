'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class question extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    question.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:
        {
          type: DataTypes.STRING,
           allowNull:false,
        },
        answer:
        {
           type: DataTypes.STRING,
           allowNull:false,
        },
        difficulty:
        {
            type: DataTypes.ENUM,
            values:['easy', 'medium', 'hard'],
            allowNull: true,
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
            allowNull:true,
        },
    }, {
        sequelize,
        modelName: 'question',
    });
    return question;
};
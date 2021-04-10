'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        topicId: {
          type: Sequelize.INTEGER,
         
      },
        description:
        {
          type: Sequelize.STRING,
           allowNull:false,
        },
        answer:
        {
           type: Sequelize.STRING,
           allowNull:false,
        },
        difficulty:
        {
            type: Sequelize.ENUM,
            values:['easy', 'medium', 'hard'],
            allowNull: true,
        },
        userAttempted:
        {
            type: Sequelize.INTEGER,
            default:0,
        },
        userCorrected:
        {
            type: Sequelize.INTEGER,
            default:0,
        },
        createdAt:
        {
            type: Sequelize.DATE,
            allowNull: true,
        },
        updatedAt:
        {
            type: Sequelize.DATE,
            allowNull: true,
        },
        deletedAt:
        {
          type: Sequelize.DATE,
            allowNull: true,
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('questions');
  }
};

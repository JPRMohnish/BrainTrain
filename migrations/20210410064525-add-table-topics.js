'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('topics', {
      topicId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title:
    {
      type: Sequelize.STRING,
       allowNull:false,
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
    deletedAt:
    {
        type: Sequelize.DATE,
        allowNull: true,
      
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('topics');
  }
};

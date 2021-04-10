'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('userQuestions', { 
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  userId:
  {
    type: Sequelize.INTEGER,
     allowNull:false,
  },
  questionId:
  {
     type: Sequelize.INTEGER,
     allowNull:false,
  },
  score:
  {
     type: Sequelize.INTEGER,
     defaultValue:0,
  },
  lastAttempted:
  {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
  },
  nextPracticeDate:
  {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  attemptNo:
  {
     type: Sequelize.INTEGER,
     defaultValue:0,
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
  }
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userQuestions');
     
  }
};

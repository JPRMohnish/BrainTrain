'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password:
      {
        type: Sequelize.STRING,
        allowNull: false,
        set(x) {
          this.setDataValue('password', hash(x));
        }

      },
      ifEmailVerified:
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      phoneNumber:
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ifPhoneVerified:
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');

  }
};

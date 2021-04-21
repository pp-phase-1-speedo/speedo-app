'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      CityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: "id",
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
      updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
    });
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
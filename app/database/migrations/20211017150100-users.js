'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      createdAt: {type: Sequelize.DATE, field: 'created_at'},
      updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
      deletedAt: {type: Sequelize.DATE, field: 'deleted_at'},
    },{
        uniqueKeys: {
          user_email_unique: {
            fields: ['email'],
            customIndex: true
          }
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
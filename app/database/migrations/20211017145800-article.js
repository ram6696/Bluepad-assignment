'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('articles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.STRING,
      },
      no_of_likes: {
        type: Sequelize.INTEGER
      },
      no_of_views: {
        type: Sequelize.INTEGER   
      },
      createdAt: {type: Sequelize.DATE, field: 'created_at'},
      updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
      deletedAt: {type: Sequelize.DATE, field: 'deleted_at'},
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('articles');
  }
};
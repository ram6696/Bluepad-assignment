'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('article_likes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      article_id: {
        type: Sequelize.STRING,
      },
      createdAt: {type: Sequelize.DATE, field: 'created_at'},
      updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
      deletedAt: {type: Sequelize.DATE, field: 'deleted_at'},
    },{
        uniqueKeys: {
          article_likes_user_article_unique: {
            fields: ['user_id', 'article_id'],
            customIndex: true
          }
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('article_likes');
  }
};
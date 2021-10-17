'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('article_views', {
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
      event: {
        type: Sequelize.ENUM,
        values: ['share','view']
      },
      createdAt: {type: Sequelize.DATE, field: 'created_at'},
      updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
      deletedAt: {type: Sequelize.DATE, field: 'deleted_at'},
    },{
        uniqueKeys: {
          article_views_user_article_unique: {
            fields: ['user_id', 'article_id'],
            customIndex: true
          }
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('article_views');
  }
};
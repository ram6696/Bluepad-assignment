'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('article_likes', [
            {
                user_id: 1,
                article_id: 1,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                user_id: 2,
                article_id: 1,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                user_id: 3,
                article_id: 1,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                user_id: 1,
                article_id: 2,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};

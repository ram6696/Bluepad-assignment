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
        return queryInterface.bulkInsert('articles', [
            {
                title: "article 1",
                body: "a crisp one liner that explains the title well",
                no_of_likes: 0,
                no_of_views: 0,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                title: "article 2",
                body: "body 2",
                no_of_likes: 10,
                no_of_views: 10,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                title: "article 3",
                body: "body 3",
                no_of_likes: 50,
                no_of_views: 10,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                title: "article 4",
                body: "body 4",
                no_of_likes: 100,
                no_of_views: 10,
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                title: "article 5",
                body: "body 5",
                no_of_likes: 5000,
                no_of_views: 10,
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

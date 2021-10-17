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
        return queryInterface.bulkInsert('users', [
            {
                name: "name 1",
                email: "name1@yopmail.com",
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                name: "name 2",
                email: "name2@yopmail.com",
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                name: "name 3",
                email: "name3@yopmail.com",
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                name: "name 4",
                email: "name4@yopmail.com",
                created_at:new Date(),
                updated_at: new Date(),
                deleted_at: null,
            },
            {
                name: "name 5",
                email: "name5@yopmail.com",
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

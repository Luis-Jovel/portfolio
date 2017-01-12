'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Images', [{
        url: 'http://localhost:3000/public/img/1.png',
        description: 'Image 1',
        ProjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        url: 'http://localhost:3000/public/img/2.png',
        description: 'Image 2',
        ProjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Images', null, {});
  }
};

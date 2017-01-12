'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Projects', [{
        title: 'BoTranslator',
        description: 'Facebook bot using Bot Framework',
        cover: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'Pokedex',
        description: 'Pokedex for pokemons from all generations',
        cover: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Projects', null, {});
  }
};

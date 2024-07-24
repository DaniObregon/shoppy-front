'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123', // Incluye una contraseña
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jane_doe',
        email: 'jane@example.com',
        password: 'password456', // Incluye una contraseña
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

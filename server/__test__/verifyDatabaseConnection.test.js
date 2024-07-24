// __test__/verifyDatabaseConnection.test.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false // deshabilita el registro para evitar confusión en los resultados del test
  }
);

describe('Database Connection', () => {
  it('should connect to the database successfully', async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error; // lanza el error para que el test falle si la conexión falla
    } finally {
      await sequelize.close();
    }
  });
});

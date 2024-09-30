import Sequelize from "sequelize";

const database = "general";
const username = "postgres";
const password = "Camilo1026";
const host = "localhost";

export const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});
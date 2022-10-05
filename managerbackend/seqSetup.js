import { Sequelize } from 'sequelize';
import User from './models/User.js'

const connection = new Sequelize("db", null, null, {
    host: "localhost",
    dialect: "sqlite",
    storage: "database.sqlite",
});

const modelDefiners = [
    User
]

for(const modelDefiner of modelDefiners){
    modelDefiner(connection);
}

export default connection;
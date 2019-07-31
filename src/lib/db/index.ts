import dotenv from 'dotenv';
import path from 'path';
import { Sequelize, Model } from 'sequelize';
import fs from 'fs';

dotenv.config();

const db: { [key: string]: any } = {};

export const sequelize = new Sequelize(
    String(process.env.DB_NAME), // db_name
    String(process.env.DB_USERNAME), // db_username
    process.env.DB_PASSWORD, // db_password
    /* options: */
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
);

fs.readdir(path.resolve(__dirname, './Models'), (err: Error | null, files: string[]): void => {
    files.forEach((file: string): void => {
        const fileName = file.split('.')[0];
        db[fileName] = sequelize.import(__dirname + `/Models/${file}`);
    });
});

db.sequelize = sequelize;

export default db;

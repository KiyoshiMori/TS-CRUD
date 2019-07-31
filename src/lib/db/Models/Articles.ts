import Sequelize, { Model } from 'sequelize';
import { sequelize } from '../index';

class Articles extends Model {}

Articles.init(
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        title: Sequelize.STRING,
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        createdOn: Sequelize.DATE,
    },
    {
        sequelize,
        modelName: 'articles',
    },
);

module.exports = () => Articles;

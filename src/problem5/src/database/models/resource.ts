import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/dbConfig';

class Resource extends Model {}

Resource.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Resource',
  tableName: 'Resource', // Ensure table name matches exactly
  timestamps: true, // Enables createdAt and updatedAt fields
});

export default Resource;
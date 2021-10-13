'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Range }) {
      // define association here
      this.belongsToMany(Range, {
        through: 'AdvertisementRange',
        foreignKey: 'advertisement_id',
        otherKey: 'range_id',
      });
    }
  };
  Advertisement.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};

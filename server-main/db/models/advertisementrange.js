'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdvertisementRange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Purchase_history, Range, Advertisement }) {
      this.hasMany(Purchase_history, {
        foreignKey: 'advertisementRange_id',
      });
      this.hasMany(Advertisement, {
        foreignKey: 'id',
      });
      this.hasMany(Range, {
        foreignKey: 'id',
      });
    }

  };

  AdvertisementRange.init({
    advertisement_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    range_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'AdvertisementRange',
  });
  return AdvertisementRange;
};

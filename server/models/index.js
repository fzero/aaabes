// Global model loader
// Receives a connected Sequelize instance
module.exports = sequelize => {
  let models = {
    User: require('./user')(sequelize),
    Key: require('./key')(sequelize)
  };
  // Define table relationships
  models.Key.belongsTo(models.User);

  models.syncAll = async options => {
    for (let key in models) {
      if (models[key].sync) {
        await models[key].sync(options);
      }
    }
  };

  return models;
};

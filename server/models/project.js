'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    portada: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Project.hasMany(models.Image);
      }
    }
  });
  return Project;
};

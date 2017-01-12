'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Project.hasMany(models.Image);
      }
    }
  });
  return Project;
};

module.exports = function(sequelize, DataType) {

  var User = sequelize.define('User', {
    nome: DataType.STRING,
    email: DataType.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Address);
      }
    }
  });

  return User;

};

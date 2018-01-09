module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fbId: {
      type: DataTypes.STRING,
      unique: true,
    }
  })

  return User
}

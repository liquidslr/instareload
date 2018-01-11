// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     fbId: {
//       type: DataTypes.STRING,
//       unique: true,
//     }
//   })

//   return User
// }

const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    fbId: String
});
mongoose.model('users', userSchema)
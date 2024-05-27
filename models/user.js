"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Store);
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        validate: {
          isUnique: async (value) => {
            const user = await User.findOne({ where: { username: value } });

            if (user) throw new Error("Username is already used!");
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: { msg: "Email format wrong!" },
        },
      },
      password: {
        type: DataTypes.STRING,
      },
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  });

  return User;
};

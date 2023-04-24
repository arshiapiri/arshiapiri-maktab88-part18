const { DataTypes } = require("sequelize");
const { connection} = require ("../database/connection")

const Food = connection.sequelize.define("Food", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Price : {
        type: DataTypes.NUMBER,
        allowNull: false
    }
},
{
    tableName:"foods",
    timestamps: true,
    
})

module.exports = { Food }
const { DataTypes } = require("sequelize");
const { connection} = require ("../database/connection")

const student = connection.sequelize.define("student", {
    fristName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName : {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalCode : {
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName:"students",
    timestamps: true,
    
})

module.exports = { student }
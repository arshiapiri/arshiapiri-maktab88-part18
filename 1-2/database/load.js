const { student } = require("../models/student");
const { Food } = require("../models/food");

const loadDatabase = async() => {
    await student.sync({ alter : process.env.MODE === "development"});
    await Food.sync({ alter : process.env.MODE === "development" })
}

loadDatabase().catch((e) => {
    console.log(e);
    process.exit(1)
})
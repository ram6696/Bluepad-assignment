require("dotenv").config();
console.log(process.env.DB_DIALECT);

module.exports = {
    [process.env.NODE_ENV || "local"]: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        migrationStorageTableName: "migrations",
        dialectOptions: {
            useUTC: true
        },
        timezone: "00:00"
    }
};

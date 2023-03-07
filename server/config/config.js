require("dotenv").config();

// port
process.env.PORT = process.env.PORT || 3000;

// enviroment
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//expiration time token
process.env.EXP_TOKEN = process.env.EXP_TOKEN || "48h";

// auth seed token
process.env.SEED = process.env.SEED || "development-seed";

// google client id
process.env.CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

// database
process.env.DB = process.env.DATABASE_URL || "mongodb://localhost:27017/test";

import { config } from "dotenv";

config();

export default {
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/app",
    PORT : process.env.PORT || 4000,
    SECRET : "prodict-plataforma"
};
require('dotenv').config();
const { MONGO_USER, MONGO_PASS, API_KEY } = process.env;
module.exports = {
    services: {
        clubes: {
            hostname: "https://localhost:3000",
            all_clubes: "/clubes",
            api_key: API_KEY,
        }
    },
    databases: {
        mongodb: {
            //connectionString: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.zo7rqbq.mongodb.net/test`
            connectionString: `mongodb://localhost:27017/clubes_db`
        }
    }
}
const app = require("./app");
const connectDb = require("./db/connectDb");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb();
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to launch server with error ${error.message}`);
    process.exit(1);
  }
};

start();

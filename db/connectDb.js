const mongoose = require("mongoose");

const connectDb = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connect;
};

module.exports = connectDb;

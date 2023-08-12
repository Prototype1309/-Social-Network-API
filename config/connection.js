const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://Mohamedhourri:Momoyates1@cluster0.yi7uyi7.mongodb.net/socialNetworkDB?retryWrites=true&w=majority";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
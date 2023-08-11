const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//connection

const coon = async () => {
  try {
    const dbConn = await mongoose.connect(
      // `mongodb+srv://${dbUser}:${dbPassword}@cluster0.4a1b9nt.mongodb.net/?retryWrites=true&w=majority`,
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jqajfab.mongodb.net/?retryWrites=true&w=majority`,
    );
    console.log('Conectou');
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

coon();

module.exports = coon;

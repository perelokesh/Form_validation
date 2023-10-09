import mongoose from "mongoose";
import 'dotenv/config';

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Form_validator'

};
const connection = process.env.DB;

let dbConnection;
try {
  mongoose.connect(connection, connectionParams);
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
  console.log("Could not connect database!");
}
export default dbConnection;

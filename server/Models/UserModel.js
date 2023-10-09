import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  mobile:Number,
  address1:String,
  address2:String,
  city:String,
  country: String,
  state:String,
  zipCode:Number,


  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // mobile: {
  //   type: Number,
  //   required: true,
  // },
  // address1: {
  //   type: String,
  //   required: true,
  // },
  // address2: String,
  // state: {
  //   type: String,
  //   required: true,
  // },
  // city: String,
  // country: {
  //   type: String,
  //   required: true,
  // },
  // zipCode: {
  //   type: Number,
  // },
});
const User = mongoose.model('User', userSchema);

export default User;
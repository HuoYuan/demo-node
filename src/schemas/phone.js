import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const phone = new Schema({
  number: String,
  imei: String,
  phoneName: String,
  deviceModel: String,
  chargeState: String,
  betteryLevel: String,
  systemVersion: String,
});

export default phone;

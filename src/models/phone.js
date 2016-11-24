import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const phoneSchema = new Schema({
  number: String,
  imei: String,
  phoneName: String,
  deviceModel: String,
  chargeState: String,
  betteryLevel: String,
  systemVersion: String,
});

const Phone = mongoose.model('phone', phoneSchema);
export default Phone;

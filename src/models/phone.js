import mongoose from 'mongoose';
import { phoneSchama } from 'schemas';

const Phone = mongoose.model('phone', phoneSchama);
export default Phone;

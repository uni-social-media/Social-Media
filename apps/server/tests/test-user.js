import mongoose from 'mongoose';
import User from './models/User.js';
import 'dotenv/config';

await mongoose.connect(process.env.MONGO_URI);

// 1. Create & save a user
const user = new User({
  username: 'testuser',
  email: 'test@example.com',
  password: 'plaintext123',
});

await user.save();

// 2. Check password was hashed (should NOT equal the plain text)
console.log('Password hashed?', user.password !== 'plaintext123'); // true

// 3. Check comparePassword works
const correct = await user.comparePassword('plaintext123');
const wrong = await user.comparePassword('wrongpassword');
console.log('Correct password:', correct); // true
console.log('Wrong password:', wrong); // false

// 4. Check toJSON strips password
const json = JSON.parse(JSON.stringify(user));
console.log('Password in JSON?', 'password' in json); // false

await mongoose.disconnect();

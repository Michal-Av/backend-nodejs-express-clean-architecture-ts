// models/user.model.ts

import mongoose, { Schema, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export interface User extends Document {
    email: string;
    password: string;
    username: string;
}

const userSchema: Schema<User> = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model<User>('users', userSchema);

export default UserModel;
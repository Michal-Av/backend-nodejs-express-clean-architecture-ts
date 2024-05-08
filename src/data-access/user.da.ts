// data-access/user.da.ts

import UserModel, { User } from '../models/user.model';

export async function getUserByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({ email });
}

export async function createUser(userData: Partial<User>): Promise<User> {
    return await UserModel.create(userData);
}

export async function getUserById(userId: string): Promise<User | null> {
    return await UserModel.findById(userId);
}

export async function updateUserPassword(email: string, newPasswordHash: string): Promise<User | null> {
    // Update user's password in the database
    return await UserModel.findOneAndUpdate({ email }, { password: newPasswordHash });
}
import { getUserByEmail, createUser, getUserById, updateUserPassword } from '../data-access/user.da';

export async function getUserByEmailUC(email: string): Promise<any> {
    return await getUserByEmail(email);
}

export async function createUserUC(userData: any): Promise<any> {
    return await createUser(userData);
}

export async function getUserByIdUC(userId: string): Promise<any> {
    return await getUserById(userId);
}

export async function updateUserPasswordUC(email: string, pass: string): Promise<any> {
    return await updateUserPassword(email, pass);
}

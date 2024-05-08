"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPasswordUC = exports.getUserByIdUC = exports.createUserUC = exports.getUserByEmailUC = void 0;
const user_da_1 = require("../data-access/user.da");
async function getUserByEmailUC(email) {
    return await (0, user_da_1.getUserByEmail)(email);
}
exports.getUserByEmailUC = getUserByEmailUC;
async function createUserUC(userData) {
    return await (0, user_da_1.createUser)(userData);
}
exports.createUserUC = createUserUC;
async function getUserByIdUC(userId) {
    return await (0, user_da_1.getUserById)(userId);
}
exports.getUserByIdUC = getUserByIdUC;
async function updateUserPasswordUC(email, pass) {
    return await (0, user_da_1.updateUserPassword)(email, pass);
}
exports.updateUserPasswordUC = updateUserPasswordUC;

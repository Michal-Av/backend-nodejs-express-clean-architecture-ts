"use strict";
// data-access/user.da.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPassword = exports.getUserById = exports.createUser = exports.getUserByEmail = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
async function getUserByEmail(email) {
    return await user_model_1.default.findOne({ email });
}
exports.getUserByEmail = getUserByEmail;
async function createUser(userData) {
    return await user_model_1.default.create(userData);
}
exports.createUser = createUser;
async function getUserById(userId) {
    return await user_model_1.default.findById(userId);
}
exports.getUserById = getUserById;
async function updateUserPassword(email, newPasswordHash) {
    // Update user's password in the database
    return await user_model_1.default.findOneAndUpdate({ email }, { password: newPasswordHash });
}
exports.updateUserPassword = updateUserPassword;

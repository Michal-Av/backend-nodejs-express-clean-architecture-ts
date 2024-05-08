"use strict";
// config/default.ts
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8000,
    protocol: "http",
    host: "localhost",
    origin: "https://localhost:4000",
    secretKey: "A0KzQq3cNfBogjH8",
    dbUri: "mongodb+srv://michal:A0KzQq3cNfBoGko9@cluster0.et8rk.mongodb.net/tempDB?retryWrites=true&w=majority"
};
exports.default = config;

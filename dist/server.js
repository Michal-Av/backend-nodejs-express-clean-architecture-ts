"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("./config/default"));
const connect_1 = require("./utils/connect");
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
// Load environment variables from .env file in the root directory
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '.env') });
const port = default_1.default.port;
const app = (0, express_1.default)();
// Configure CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(routes_1.default);
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await (0, connect_1.connect)();
});

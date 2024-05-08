// config/default.ts

interface Config {
    port: number;
    protocol: string;
    host: string;
    origin: string;
    secretKey: string;
    dbUri?: string; // Make this optional as it's derived from an environment variable
}

const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8000,
    protocol: "http",
    host: "localhost",
    origin: "https://localhost:4000",
    secretKey: "A0KzQq3cNfBogjH8",
    dbUri: process.env.DB_URL
};

export default config;

/**
 * @mongoDB Atlas
 * connect to the DB weatherDB
 */
import mongoose from 'mongoose';
import config from '../config/default';

export async function connect(): Promise<void> {
    const dbUri: string = config.dbUri || '';

    try {
        if (!dbUri) {
            throw new Error('Database URI is not defined in the configuration.');
        }
        await mongoose.connect(dbUri);
        console.log('Successfully connected to MongoDB Atlas!');
    } catch (error) {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
        process.exit(1);
    }
}

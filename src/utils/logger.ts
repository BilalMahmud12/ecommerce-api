export const logger = (message: string, data?: any): void => {
    console.log(`[${new Date().toISOString()}] ${message}`, data);
};
import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

export const handleError = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await fn(req, res, next);
    } catch (error: any) {
        logger(`Error: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};

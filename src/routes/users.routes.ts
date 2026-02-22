import {Router, Request, Response, NextFunction} from 'express';
//import {User} from '../models/user.model';
import {userService} from '../services/users.service';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = userService.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        const requestBody = req.body;
        const newUser = userService.createUser(requestBody.name, requestBody.email);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
});

export default router;
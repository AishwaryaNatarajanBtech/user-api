import { User } from '../models/user.model';

let users: User[] = [
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'Jane Smith'}
];

function getAllUsers(): User[] {
    return users;
}

function createUser(name: string, email?: string): User {
    if (!name) {
        const error = new Error('Name is required');
        (error as any).statusCode = 400;
        throw error;
    }

    const newUser: User = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    return newUser;
}

export const userService = {
    getAllUsers,
    createUser
};
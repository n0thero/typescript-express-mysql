import express, { Request, Response } from 'express';
import User from './user';

const app = express();

app.get('/', async (req: Request, res: Response) => {

    let a;

    let d = await User.find(1);

    res.json(d);
});

app.listen(3000, () => {
    console.log('server running');
});

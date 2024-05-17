import express, { Request, Response } from 'express';
import User from './user';

const app = express();

app.get('/', async (req: Request, res: Response) => {

    let a;
    let b = '1';

    await User.find(1).then(r => {
        a = r;
        b += '2';
    });

    res.json(a);
});

app.listen(3000, () => {
    console.log('server running');
});

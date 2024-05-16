import * as express from 'express';
import User from './user';
import db from "./core/db";

const app = express();
const user = new User('nothero');

app.get('/', (req, res) => {

    User.find(1)
        .then(result => {
            res.json(result);
        });
});

app.listen(3000, () => {
    console.log('server running');
});

import db from './core/db';

export default class User {

    constructor(public id: number, public name: string) {

    }

    static async find(id: number) {

        let [rows] = await db.promise().query(`
            SELECT *
            FROM users
            WHERE id = '${id}'
            LIMIT 1`);

        return new User(rows[0].id + 10, rows[0].name + '!');
    }
}

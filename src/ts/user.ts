import db from './core/db';

export default class User {
    constructor(private name: string) {
    }

    getName(): string {
        return this.name;
    }

    static find(id: number) {

        return new Promise(resolve => {

            db.query(`
                SELECT *
                FROM users
                WHERE id = '${id}'
                LIMIT 1`, (err, result) => {
                resolve(result);
            });

        })
            .then(result => result);
    }
}

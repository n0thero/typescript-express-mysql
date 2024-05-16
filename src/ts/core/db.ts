import {createConnection, ConnectionOptions, Connection} from 'mysql2';
import config from './config';

const dbConfig: ConnectionOptions = {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
};

const db: Connection = createConnection(dbConfig);

db.connect(err => {
    if (err) {
        return;
    }
});

export default db;

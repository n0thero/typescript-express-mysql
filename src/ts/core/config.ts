import * as fs from 'fs';
import * as path from 'path';
import * as ini from 'ini';

const file_path = path.resolve(__dirname, '../../../config.ini');

const config = ini.parse(fs.readFileSync(file_path, 'utf-8'));

export default config;

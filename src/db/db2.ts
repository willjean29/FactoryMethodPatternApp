process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";
import { Pool, Client } from 'pg';

const pool = new Pool({
  host: 'ec2-52-202-146-43.compute-1.amazonaws.com',
  port: 5432,
  user: 'lksfexorxxbske',
  password: '877687155d53bf245db82aae3027db5d7038bb7169561d25fa83a6db65871b78',
  database: 'df7sr3p8me6ldi',
  ssl: true
});

function getConnection() {
  return pool.connect();
}

export {
  getConnection,
  Client
}
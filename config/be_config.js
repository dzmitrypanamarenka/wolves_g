import fs from 'fs';

export default {
  port: 3000,
  // dbURL: 'mongodb://localhost:27017/csdb',
  // dbURL: 'mongodb://fatty:db2password@ds125482.mlab.com:25482/db_2',
  dbURL: 'mongodb://fatty:db2password@ds125482.mlab.com:25482/db_2',
  dbOptions: { useNewUrlParser: true },
  ssl: process.env.NODE_ENV === 'production'
    ? {
      key: fs.readFileSync('/etc/nginx/ssl/gamingwolves.key'),
      cert: fs.readFileSync('/etc/nginx/ssl/gamingwolves.crt')
    }
    : null
}

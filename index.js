import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import fs from 'fs';
import https from 'https';
import nextApp from './server/nextInit';


const handle = nextApp.getRequestHandler();
// import passport from 'passport';
// import passportLocal from 'passport-local';

import config from './config/be_config';
import routes from './server/routes';

const {
  port,
  dbURL,
  dbOptions,
  ssl
} = config;
const mongoDbURI = dbURL;

mongoose.Promise = global.Promise;

// const options = {
//   key: fs.readFileSync('/etc/nginx/ssl/gamingwolves.key'),
//   cert: fs.readFileSync('/etc/nginx/ssl/gamingwolves.crt')
// };

nextApp.prepare()
  .then(() => {
    const app = express();
    app.use(morgan('combined'));
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/', routes);
    // app.get('/*', (req, res) => {
    //   res.redirect('https://magazine.gamingwolves.net');
    // });
    // app.get('/', (req, res) => {
    //   res.redirect('https://magazine.gamingwolves.net')
    // });
    app.get('*', (req, res) => {
      return handle(req, res)
    });
  
    // res.redirect('https://' + req.headers.host + req.url);

// app.use(passport.initialize());
// app.use(passport.session());
//
// passport.use(new Strategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
//     const httpServer = http.createServer(app);
// Create an HTTPS service identical to the HTTP service.
    // app.use('/', routes);
    mongoose.connect(mongoDbURI, dbOptions);
    mongoose.connection
      .once('open', () => {
        console.log(`Mongoose - successful connection ...`);
        const server = process.env.NODE_ENV === 'production' 
          ? https.createServer(ssl, app)
          : app;
        server.listen(process.env.PORT || port);
      })
      .on('error', error => console.warn(error));
});

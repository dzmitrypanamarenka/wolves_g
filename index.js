import '@babel/polyfill';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import nextApp from './server/nextInit';

const handle = nextApp.getRequestHandler();
// import passport from 'passport';
// import passportLocal from 'passport-local';

import config from './config/be_config';
import routes from './server/routes';

// const { Strategy } = passportLocal;
process.env.NODE_ENV = 'production';
const {
  port,
  dbURL,
  dbOptions
} = config;
const mongoDbURI = dbURL;

mongoose.Promise = global.Promise;

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

// app.use(passport.initialize());
// app.use(passport.session());
//
// passport.use(new Strategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

    // app.use('/', routes);
    console.log(process.env.NODE_ENV)
    mongoose.connect(mongoDbURI, dbOptions);
    mongoose.connection
      .once('open', () => {
        console.log(`Mongoose - successful connection ...`);
        app.listen(process.env.PORT || port,
          () => console.log(`Server start on port ${port} ...`))
      })
      .on('error', error => console.warn(error));
});



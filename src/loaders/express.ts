import express, { Express } from 'express';
import { wakasRouter } from '../routes/wakas';
import { usersRouter } from '../routes/users';
import helmet from 'helmet';

export const loadMiddlewaresForWakaApp = (app: Express): void => {
  loadBodyParser(app);
  loadRouter(app);
  loadSecureHeaders(app);
};

const loadBodyParser = (app: Express): void => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

const loadRouter = (app: Express): void => {
  app.use('/wakas', wakasRouter);
  app.use('/users', usersRouter);
};

const loadSecureHeaders = (app: Express): void => {
  app.use(helmet());
  if (app.get('env') === 'development' || app.get('env') === 'test') {
    // Setting upgradeInsecureRequests to null in development/test environment
    // since safari redirects to https even on localhost and the page cannot be displayed.
    app.use(
      helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
          upgradeInsecureRequests: null,
        },
      })
    );
  }
};

import { app } from './app';
import 'module-alias/register';

const runServer = (): void => {
  const port = process.env.PORT || 3000;

  const server = app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });

  const shutDown = async (): Promise<void> => {
    console.log('Received kill signal, shutting down gracefully');

    server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutDown);
  process.on('SIGINT', shutDown);
};

runServer();

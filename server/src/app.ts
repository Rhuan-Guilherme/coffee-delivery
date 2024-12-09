import fastyfy from 'fastify';
import { env } from './env';

const app = fastyfy();

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is running in HTTP://localhost:' + env.PORT);
  });

import fastyfy from 'fastify';
import { env } from './env';

const app = fastyfy();

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 Server is running in http://localhost:' + env.PORT);
  });

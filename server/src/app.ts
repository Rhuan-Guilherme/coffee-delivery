import fastyfy from 'fastify';

const app = fastyfy();

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server is running!');
  });

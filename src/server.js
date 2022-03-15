const hapi = require('@hapi/hapi');
const routes = require('./routes');

async function main() {
  const server = new hapi.Server({
    port: 5000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start().then(() => {
    console.log(`Server Listening On Port ${server.info.port}`);
  });
}

main();

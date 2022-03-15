const hapi = require('@hapi/hapi');

async function main() {
  const server = new hapi.Server({
    port: 3000,
    routes: {
      cors: {
        origin: '*',
      },
    },
  });

  server.route(routes);

  await server.start().then(() => {
    console.log(`Server Listening On Port ${server.info.port}`);
  });
}

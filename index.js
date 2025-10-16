// 1. Import json-server
const jsonServer = require('json-server');

// 2. Create an instance of json-server
const server = jsonServer.create();

// 3. Create a middleware
const middleware = jsonServer.defaults();

// 4. Create router
const router = jsonServer.router('db.json');

// 5. Use middleware and router
server.use(middleware);
server.use(router);

// 6. Define port (Render provides process.env.PORT)
const PORT = process.env.PORT || 5000;

// 7. Start server
server.listen(PORT, () => {
  console.log(`json-server listening on port ${PORT}`);
});

// 1.import json-server
const jsonServer=require('json-server')

// 2.create an instance of jsonserver
const server=jsonServer.create()
// 3.create a middleware
const middleware=jsonServer.defaults()
// 4.create router
const router =jsonServer.router('db.json')
// 5
server.use(middleware)
server.use(router)
// 6 define port
server.listen(PORT,()=>
{
    console.log(`json-server listening on port ${PORT}`);
    
})
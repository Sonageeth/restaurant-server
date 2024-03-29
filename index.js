// 1. import json-server
const jsonserver = require('json-server')

// 2. Create a server application using jsonserver
const server = jsonserver.create()

// 3. set up path for db.json file
const router = jsonserver.router('db.json')

// 4. return a middleware used by the jsonserver
const middleware = jsonserver.defaults()

// 5. setup a port number
const port = process.env.PORT || 3001

// 6. use in server
server.use(middleware)
server.use(router)

// 7. To run the port
server.listen(port,()=>{
    console.log('Listening on port '+port);
})
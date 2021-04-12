import { server } from "./server.connector";

const socketIO = require('socket.io')(server, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

export { socketIO }


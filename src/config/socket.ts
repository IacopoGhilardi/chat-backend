import express, {Application} from 'express'
const app: Application = express()
// socket io create server
import http from 'http'
const socketServer = http.createServer(app)
import { Server } from 'socket.io'

const io = new Server(socketServer, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    },
    maxHttpBufferSize: 1e8 // 100 MB
  });

export { io, socketServer };

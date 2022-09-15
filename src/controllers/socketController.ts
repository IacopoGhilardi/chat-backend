import { io } from '../config/socket'
import { writeFile, writeFileSync } from "fs";

const socketEvents = () => {
    io.on('connection', (socket) => {
        console.log('Hey user is connected');
      
        socket.on("newMessage", (args) => {
          const parsedArgs = JSON.parse(args);
          const message = parsedArgs.message;
          const user =parsedArgs.user;
          console.log(user, message);
          
          console.log(JSON.parse(args)); // world
          //store chat on db

          socket.broadcast.emit('incomingMessage', message);
        }); 

        socket.on('newFile', (file) => {
          writeFile('../tmp', file, "binary", (err) => {
            console.log(err);
          });
        });
      
        socket.on('disconnect', () => {
          console.log('User disconnected');
        });
      });
}

export { socketEvents };
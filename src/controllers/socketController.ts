import { io } from '../config/socket'

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

        socket.on('newFile', (args) => {
          console.log('file', args);
          
        })
      
        socket.on('disconnect', () => {
          console.log('Hey user disconnected');
        });
      });
}

export { socketEvents };
import express, {Application} from 'express'
const app: Application = express()
const socketPort: Number = 3000
const serverPort: Number = 5000
import cors from 'cors'
import router from "./routes/index";
import { socketServer } from './config/socket'
import { socketEvents } from './controllers/socketController'

app.use(express.json());
app.use(cors());
app.use(router);

socketServer.listen(socketPort, () => {
  console.log(`Socket is listening at http://localhost:${socketPort}`);
  socketEvents();
});

app.listen(serverPort, () => {
  console.log(`Server is listening at http://localhost:${serverPort}`);
});
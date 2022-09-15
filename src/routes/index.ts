import express, {Request, Response} from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send('ciao')
});

router.get('/ciaociao', (req: Request, res: Response) => {
    res.send('miao')
});

export default router;

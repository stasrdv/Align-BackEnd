import {  Router } from 'express';
import { getRandomImage } from '../store/gallery-store';
import {  wrapAsyncAndSend } from '../handlers/handlers';

const imageLoaderRouter = Router();
imageLoaderRouter.get('/getRandomImage', wrapAsyncAndSend(() => getRandomImage()));






export { imageLoaderRouter };

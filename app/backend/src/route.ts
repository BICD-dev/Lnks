import {Router} from 'express';
import { UrlController } from './controller/url.controller';

const router = Router();
const urlController = new UrlController();

router.post('/shorten', urlController.shortenUrl);
router.get('/url/:shortCode', urlController.getOriginalUrl);

export default router;
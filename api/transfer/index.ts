import { Router } from 'express';
import {
    getTransfer, listTransfer, sendTransfer
} from './transfer.controller';
const router: Router = Router();

router.get('/list', listTransfer);
router.get('/:IdAddressee', getTransfer);
router.post('/send', sendTransfer);

module.exports = router;

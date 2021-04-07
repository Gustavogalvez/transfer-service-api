import { Router } from 'express';
import {
    getTransfer, sendTransfer
} from './transfer.controller';
const router: Router = Router();

router.get('/:IdAddressee', getTransfer);
router.post('/send', sendTransfer);

module.exports = router;

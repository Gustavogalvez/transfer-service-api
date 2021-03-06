import { Router } from 'express';
import {
    addAddressee,
    getAddressees
} from './addressee.controller';
const router: Router = Router();

router.get('/list', getAddressees);
router.get('/list/:search', getAddressees);
router.post('/add', addAddressee);

module.exports = router;

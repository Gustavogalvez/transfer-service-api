import { Router } from 'express';
import {
    getAddressees
} from './addressee.controller';
const router: Router = Router();

router.get('/list', getAddressees);

module.exports = router;

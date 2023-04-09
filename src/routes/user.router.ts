import { Router } from 'express';

import { userController } from '../controllers';

const router = Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.put('/edit-profile', userController.editProfile);
router.get('/communities', userController.getCommunities);

export default router;

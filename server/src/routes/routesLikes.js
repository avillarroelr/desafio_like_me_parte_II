import { Router } from "express";
import { getLikes, raizServer, addLikes } from "../controllers/controllerLikes.js";

const router = Router();

router.get('/', raizServer);
router.get('/posts', getLikes);
router.post('/posts', addLikes);

export default router;


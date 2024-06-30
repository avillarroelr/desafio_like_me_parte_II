import { Router } from "express";
import { getLikes, raizServer, addLikes, likePost, updateLikes, deleteLikes } from "../controllers/controllerLikes.js";

const router = Router();

router.get('/', raizServer);
router.get('/posts', getLikes);
router.post('/posts', addLikes);
router.put('/posts/like/:id', likePost);
router.put('/posts/:id', updateLikes); 
router.delete('/posts/:id', deleteLikes); 

export default router;




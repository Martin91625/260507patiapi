import { Router } from "express";

const router = Router();

router.get('/test', (req, res) => {
    res.json({msg: 'test'})
});

export default router;
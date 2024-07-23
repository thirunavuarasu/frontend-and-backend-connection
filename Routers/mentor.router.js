import express from "express";
import { creatementor, getAllmentors, getassignedstudents } from "../Controllers/mentor.controller.js";

const router = express.Router();

router.post("/create/mentor", creatementor);
router.get('/getmentor',getAllmentors);
router.get('/:id',getassignedstudents);

export default router;
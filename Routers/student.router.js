import express from 'express';
import { createStudent} from '../Controllers/student.controller.js';
import { getAllStudents } from '../Controllers/student.controller.js';
import { getStudentById } from '../Controllers/student.controller.js';


const router =express.Router()

 router.post('/create/st',createStudent);

 router.get('/stud', getAllStudents);
 router.get('/:id',  getStudentById);
;

export default router;

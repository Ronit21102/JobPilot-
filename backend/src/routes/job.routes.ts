import {Router} from 'express';
import { saveJob, getAllJobs } from '../controllers/job.controller';

const router = Router();

router.get('/', getAllJobs);
router.post('/', saveJob);

export default router;
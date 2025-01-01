import { Router } from 'express';
import ResourceController from '../controllers/ResourceController';

const router = Router();


// [POST] /resources
// Create a new resource
router.post('/resources', ResourceController.createResource);

// [GET] /resources
// Retrieve a list of all resources
router.get('/resources', ResourceController.listResources);

// [GET] /resources/:id
// Retrieve a specific resource by ID
router.get('/resources/:id', ResourceController.getResource);

// [PUT] /resources/:id
// Update a specific resource by ID
router.put('/resources/:id', ResourceController.updateResource);

// [DELETE] /resources/:id
// Delete a specific resource by ID
router.delete('/resources/:id', ResourceController.deleteResource);

export default router;
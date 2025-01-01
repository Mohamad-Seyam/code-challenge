import { Request, Response } from 'express';
import ResourceService from '../services/ResourceService';

class ResourceController {
  static async createResource(req: Request, res: Response) {
    try {
      const resource = await ResourceService.createResource(req.body);
      res.status(201).json(resource);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }

  static async listResources(req: Request, res: Response) {
    try {
      const resources = await ResourceService.listResources(req.query);
      res.status(200).json(resources);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }

  static async getResource(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10); // Parse ID to number
      const resource = await ResourceService.getResource(id);
      if (!resource) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      res.status(200).json(resource);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }

  static async updateResource(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10); // Parse ID to number
      const updatedResource = await ResourceService.updateResource(id, req.body);
      if (updatedResource[0] === 0) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      res.status(200).json(updatedResource[1]); // Return updated resource
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }

  static async deleteResource(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10); // Parse ID to number
      const deleted = await ResourceService.deleteResource(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      res.status(204).send(); // No content
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }
}

export default ResourceController;

import ResourceRepository from '../database/repositories/ResourceRepository';
import Resource from '../database/models/resource';

class ResourceService {
  static async createResource(data: Partial<Resource>): Promise<Resource> {
    return await ResourceRepository.create(data);
  }

  static async listResources(query?: Record<string, any>): Promise<Resource[]> {
    return await ResourceRepository.findAll(query);
  }

  static async getResource(id: number): Promise<Resource | null> {
    return await ResourceRepository.findById(id);
  }

  static async updateResource(id: number, data: Partial<Resource>): Promise<[number, Resource[]]> {
    return await ResourceRepository.update(id, data);
  }

  static async deleteResource(id: number): Promise<boolean> {
    return await ResourceRepository.delete(id);
  }

  static async findResource(query: Record<string, any>): Promise<Resource | null> {
    return await ResourceRepository.findOne(query);
  }

  static async countResources(query?: Record<string, any>): Promise<number> {
    return await ResourceRepository.count(query);
  }
}

export default ResourceService;

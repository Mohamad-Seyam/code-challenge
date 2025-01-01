import Resource from '../models/resource';
import IResourceRepository from './IResourceRepository';

class ResourceRepository implements IResourceRepository {
  async create(data: Partial<Resource>): Promise<Resource> {
    return await Resource.create(data);
  }

  async findAll(query?: Record<string, any>): Promise<Resource[]> {
    return await Resource.findAll({ where: query });
  }

  async findById(id: number): Promise<Resource | null> {
    return await Resource.findByPk(id);
  }

  async update(id: number, data: Partial<Resource>): Promise<[number, Resource[]]> {
    return await Resource.update(data, {
      where: { id },
      returning: true, // Ensures updated records are returned
    });
  }

  async delete(id: number): Promise<boolean> {
    const deletedCount = await Resource.destroy({ where: { id } });
    return deletedCount > 0;
  }

  async findOne(query: Record<string, any>): Promise<Resource | null> {
    return await Resource.findOne({ where: query });
  }

  async count(query?: Record<string, any>): Promise<number> {
    return await Resource.count({ where: query });
  }
}

export default new ResourceRepository();

import Resource from '../models/resource';

interface IResourceRepository {
  create(data: Partial<Resource>): Promise<Resource>; // Create a new resource
  findAll(query?: Record<string, any>): Promise<Resource[]>; // Find all resources with optional filtering
  findById(id: number): Promise<Resource | null>; // Find a resource by ID
  update(id: number, data: Partial<Resource>): Promise<[number, Resource[]]>; // Update a resource
  delete(id: number): Promise<boolean>; // Delete a resource by ID

  // Additional methods
  findOne(query: Record<string, any>): Promise<Resource | null>; // Find one resource by query
  count(query?: Record<string, any>): Promise<number>; // Count resources matching a query
}

export default IResourceRepository;

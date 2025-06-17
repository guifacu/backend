import { FastifyInstance } from 'fastify';
import { Category } from '../entities/category';

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/categories', async () => {
    return Category.getAll();
  });

  app.post('/categories', async (req) => {
    const { name } = req.body as { name: string };
    return Category.create({ name });
  });

  app.patch('/categories/:id', async (req) => {
    const { id } = req.params as { id: string };
    const body = req.body as { name?: string };
    return Category.update(id, body);
  });

  app.delete('/categories/:id', async (req) => {
    const { id } = req.params as { id: string };
    return Category.delete(id);
  });
}

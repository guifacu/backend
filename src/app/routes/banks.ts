import { FastifyInstance } from 'fastify';
import { Bank } from '../entities/bank';

export async function banksRoutes(app: FastifyInstance) {
  app.get('/banks', async () => Bank.getAll());

  app.post('/banks', async (req) => {
    const { name } = req.body as { name: string };
    return Bank.create({ name });
  });

  app.patch('/banks/:id', async (req) => {
    const { id } = req.params as { id: string };
    const body = req.body as { name?: string };
    return Bank.update(id, body);
  });

  app.delete('/banks/:id', async (req) => {
    const { id } = req.params as { id: string };
    return Bank.delete(id);
  });
}

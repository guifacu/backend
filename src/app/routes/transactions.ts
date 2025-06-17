import { FastifyInstance } from 'fastify';
import { Transaction } from '../entities/transaction';

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/transactions', async () => {
    return Transaction.getAll();
  });

  app.post('/transactions', async (req) => {
    const { title, amount, type, categoryId, bankId } = req.body as {
      title: string;
      amount: number;
      type: 'income' | 'expense';
      categoryId: string;
      bankId: string;
    };

    return Transaction.create({ title, amount, type, categoryId, bankId });
  });

  app.patch('/transactions/:id', async (req) => {
    const { id } = req.params as { id: string };
    const body = req.body as {
      title?: string;
      amount?: number;
      type?: 'income' | 'expense';
      categoryId?: string;
      bankId?: string;
    };

    return Transaction.update(id, body);
  });

  app.delete('/transactions/:id', async (req) => {
    const { id } = req.params as { id: string };
    return Transaction.delete(id);
  });
}

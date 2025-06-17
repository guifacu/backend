import Fastify from 'fastify';
import { categoriesRoutes } from './app/routes/categories';
import { banksRoutes } from './app/routes/banks';
import { transactionsRoutes } from './app/routes/transactions';

const app = Fastify();

app.register(categoriesRoutes);
app.register(banksRoutes);
app.register(transactionsRoutes);


app.listen({ port: 3000 }, () => {
  console.log('Servidor rodando')
})

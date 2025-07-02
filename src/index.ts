import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { banksRoutes } from "./app/routes/banks";
import { categoriesRoutes } from "./app/routes/categories";
import { transactionsRoutes } from "./app/routes/transactions";

const prisma = new PrismaClient();
const app = Fastify();

app.register(banksRoutes);
app.register(categoriesRoutes);
app.register(transactionsRoutes);


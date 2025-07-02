import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function transactionsRoutes(app: FastifyInstance) {

  app.get("/transactions", async () => {
    return prisma.transaction.findMany({
      include: {
        Category: true,
        Bank: true,
      },
    });
  });

  app.post("/transactions", async (request) => {
    const { title, amount, type, categoryId, bankId } = request.body as {
      title: string;
      amount: number;
      type: "income" | "expense";
      categoryId: string;
      bankId: string;
    };

    return prisma.transaction.create({
      data: {
        title,
        amount,
        type,
        categoryId,
        bankId,
      },
    });
  });

  app.patch("/transactions/:id", async (request) => {
    const { id } = request.params as { id: string };
    const { title, amount, type, categoryId, bankId } = request.body as {
      title?: string;
      amount?: number;
      type?: "income" | "expense";
      categoryId?: string;
      bankId?: string;
    };

    return prisma.transaction.update({
      where: { id },
      data: {
        title,
        amount,
        type,
        categoryId,
        bankId,
      },
    });
  });

  app.delete("/transactions/:id", async (request) => {
    const { id } = request.params as { id: string };
    return prisma.transaction.delete({ where: { id } });
  });
}

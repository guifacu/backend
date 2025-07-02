import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function banksRoutes(app: FastifyInstance) {

  app.get("/banks", async () => {
    return prisma.bank.findMany();
  });

  app.post("/banks", async (request) => {
    const { name } = request.body as { name: string };
    return prisma.bank.create({ data: { name } });
  });

  app.patch("/banks/:id", async (request) => {
    const { id } = request.params as { id: string };
    const { name } = request.body as { name?: string };

    return prisma.bank.update({
      where: { id },
      data: { name },
    });
  });

  app.delete("/banks/:id", async (request) => {
    const { id } = request.params as { id: string };
    return prisma.bank.delete({ where: { id } });
  });
}




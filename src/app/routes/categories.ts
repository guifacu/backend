import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function categoriesRoutes(app: FastifyInstance) {

  app.get("/categories", async () => {
    return prisma.category.findMany();
  });

  app.post("/categories", async (request) => {
    const { name } = request.body as { name: string };
    return prisma.category.create({ data: { name } });
  });

  app.patch("/categories/:id", async (request) => {
    const { id } = request.params as { id: string };
    const { name } = request.body as { name?: string };

    return prisma.category.update({
      where: { id },
      data: { name },
    });
  });

  app.delete("/categories/:id", async (request) => {
    const { id } = request.params as { id: string };
    return prisma.category.delete({ where: { id } });
  });
}

import { f as fail } from "../../chunks/index.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const load = async () => {
  return { articles: await prisma.article.findMany({
    orderBy: { id: "desc" }
  }) };
};
const actions = {
  createArticle: async ({ request }) => {
    const { title, content } = Object.fromEntries(await request.formData());
    if (!title && !content)
      return fail(400, { message: "los campos son obligatorios " });
    try {
      await prisma.article.create({
        data: {
          title,
          content
        }
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: "No se creo el articulo algo falla" });
    }
    return { success: true };
  },
  deleteArticle: async ({ request }) => {
    const { id } = Object.fromEntries(await request.formData());
    try {
      const delet = await prisma.article.delete({ where: { id: +id } });
      console.log(delet);
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return { status: 400 };
    }
  },
  updateArticle: async ({ request }) => {
    const { title, content, id } = Object.fromEntries(await request.formData());
    try {
      await prisma.article.update({ where: { id: +id }, data: { title, content } });
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return fail(500, { message: "error al modificar los datos " });
    }
  }
};
export {
  actions,
  load
};

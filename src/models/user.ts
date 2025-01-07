import { databaseManager } from '../db';
const prisma = databaseManager.getInstance();

export const getUsers = async () => {
  const data = await prisma.user.findMany({
    orderBy: {
      score: 'desc',
    },
  });

  return data;
};

export const createUser = async (name: string, score: number) => {
  const data = await prisma.user.create({
    data: {
      name: name,
      score: score,
    },
  });
  return data;
};

import { databaseManager } from '../db';
const prisma = databaseManager.getInstance();

export const getUsers = async (page: number) => {
  const users = await prisma.user.findMany({
    orderBy: {
      score: 'desc',
    },
    take: 20,
    skip: (page - 1) * 20,
  });

  let currentRank = 1 + (page - 1) * 20;
  let previousScore: number | null = null;

  const usersWithRank = users.map((user, index) => {
    if (user.score !== previousScore) {
      currentRank = index + 1;
    }

    previousScore = user.score;

    return {
      ...user,
      rank: currentRank,
    };
  });

  const hitCount = await prisma.user.count();

  return { usersWithRank, hitCount };
};

export const createUser = async (name: string, score: number) => {
  // トランザクションを使用して、ユーザー作成とランキング取得を整合性を保って実行
  const result = await prisma.$transaction(async (tx) => {
    // ユーザーを作成
    const newUser = await tx.user.create({
      data: {
        name: name,
        score: score,
      },
    });

    // 新しいユーザーのランキングを取得
    // gtは「greater than」で、作成したscoreより高得点のuserをcountする
    const userRanking = await tx.user.count({
      where: {
        score: {
          gt: score,
        },
      },
    });

    // 高得点のuserの人数 + 1 = 作成したuserのランク
    const rank = userRanking + 1;

    return {
      ...newUser,
      rank: rank,
    };
  });

  return result;
};

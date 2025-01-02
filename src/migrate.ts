import { execSync } from 'child_process';

async function main() {
  try {
    console.log('Starting database migration...');

    // データベースマイグレーションの実行
    execSync('npx prisma db seed', { stdio: 'inherit' });

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

main();

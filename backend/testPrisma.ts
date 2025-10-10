import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
    },
  });
  console.log("User created:", user);

  // Get all users
  const users = await prisma.user.findMany();
  console.log("All users:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

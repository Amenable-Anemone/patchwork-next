import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  //write prisma queries here
  const user = await prisma.user.create({
    data: {
      name: 'Regina',
      email: 'reginatest@gmail.com',
    },
  })
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
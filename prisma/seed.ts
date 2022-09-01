import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const walletData: Prisma.WalletCreateInput[] = [
  {
    address: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd",
    balance: 0,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const w of walletData) {
    const wallet = await prisma.wallet.create({
      data: w,
    });
    console.log(
      `Created wallet with id: ${wallet.id} and address ${wallet.address}`
    );
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

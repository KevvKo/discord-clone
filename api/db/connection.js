const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {

}

//4
main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })
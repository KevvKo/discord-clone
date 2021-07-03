const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
const newLink = await prisma.user.create({
    data: {
        username: "Kevin",
        email: "k_klein93@web.de",
        password: "qdwqqwd"

    }
})
  const allLinks = await prisma.user.findMany()
  console.log(allLinks)
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
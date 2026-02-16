require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@sristhi.com" },
    update: {},
    create: {
      email: "admin@sristhi.com",
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    },
  });

  console.log("Admin user seeded:", admin.email);

  const newsCount = await prisma.news.count();
  if (newsCount === 0) {
    await prisma.news.createMany({
      data: [
        {
          title: "Welcome to Sristhi News",
          content:
            "This is the very first article on Sristhi News! We are excited to bring you the latest headlines and in-depth stories from around the world. Stay tuned for more updates.",
          author: "Admin",
          imageUrl: null,
        },
        {
          title: "Technology Trends in 2026",
          content:
            "Artificial intelligence continues to reshape industries across the globe. From healthcare to finance, the adoption of AI-powered solutions is accelerating at an unprecedented pace. Experts predict that by the end of 2026, AI will be an integral part of everyday life.",
          author: "Admin",
          imageUrl: null,
        },
        {
          title: "Climate Action: New Policies Announced",
          content:
            "World leaders gathered this week to announce new climate policies aimed at reducing carbon emissions by 50% over the next decade. The ambitious plan includes investments in renewable energy, stricter regulations on industrial pollution, and incentives for sustainable agriculture.",
          author: "Admin",
          imageUrl: null,
        },
      ],
    });
    console.log("Sample news articles seeded");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

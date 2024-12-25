const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Brokoli & Lulelaker / Domate / Karrota / Kunguj",
    price: 8,
    rating: 5,
    description: "(Pako 100 cope)",
    mainImage: "vegetables.jpg?v=2",
    slug: "fara-perime-demo",
    manufacturer: "UBT AgroMarket",
    category: "FaraPerime",
    inStock: 1,
  },
  {
    id: "2",
    title: "Planterra 12-12-17+2MgO+TE 25kg",
    price: 25,
    rating: 5,
    description: "Pleh kokrrizor me formulë të balancuar, për Pemë Frutore të ndryshme, Agrume, Perime, etj.",
    mainImage: "planterra.jpg?v=2",
    slug: "planterra-f1-demo",
    manufacturer: "UBT AgroMarket",
    category: "PlehraKimike",
    inStock: 1,
  },
  {
    id: "3",
    title: "Fungicide / Insekticide / Herbicide",
    price: 28,
    rating: 4,
    description: "Fungicide - Ridomil Gold, Dithane M-45 / Insekticide - Decis, Karate Zeon / Herbicide - Roundup",
    mainImage: "pesticide.jpeg?v=2",
    slug: "pesticide-demo",
    manufacturer: "UBT AgroMarket",
    category: "Pesticidet",
    inStock: 1,
  },
  {
    id: "4",
    title: "Frezë Italiane CELLI, 310cm seria e rëndë",
    price: 15000,
    rating: 5,
    description: "Frezë CELLI PIONEER 140 italiane, për traktorë 120-160 KF, gjerësi punuese 310 cm, thellësi 25 cm, kambio 4 shpejtësi, transmision me friksion, rul Packer Φ 470, peshë 1540 kg.",
    mainImage: "freze.jpeg?v=2",
    slug: "freze-demo",
    manufacturer: "UBT AgroMarket",
    category: "Mjetet",
    inStock: 1,
  },
  {
    id: "5",
    title: "Dem Race Limousine për Mbarështim",
    price: 1200,
    rating: 5,
    description: "Dem Limousine, i shëndetshëm dhe me cilësi të lartë për mbarështim",
    mainImage: "dem.jpg?v=2",
    slug: "dem-race-demo",
    manufacturer: "UBT AgroMarket",
    category: "Blegtoria",
    inStock: 1,
  },
  {
    id: "6",
    title: "Fare Misri PR32B10 nga gjigandi Pioneer",
    price: 40,
    rating: 5,
    description: "Fare misri PR32B10 është një hibrid i bardhë me kapacitet të lartë prodhues, sistem rrënjor të fuqishëm dhe kokrra me përmbajtje të lartë proteinash, i përshtatshëm për terrene të ndryshme.",
    mainImage: "misri.jpg?v=2",
    slug: "fare-misri-demo",
    manufacturer: "UBT AgroMarket",
    category: "FaraMisri",
    inStock: 1,
  },
  {
    id: "7",
    title: "Sere ne shitje",
    price: 4,
    rating: 5,
    description: "5 USD për 200–499 metra katrorë, 4.5 USD për 500–799 metra katrorë, 4 USD për 800–999 metra katrorë, 3.8 USD për 1000–1999 metra katrorë, 3.5 USD për ≥2000 metra katrorë.",
    mainImage: "sera.jpg?v=2",
    slug: "sera-demo",
    manufacturer: "UBT AgroMarket",
    category: "Serat",
    inStock: 1,
  },
];

const demoCategories = [
  {
    name: "Blegtoria",
  },
  {
    name: "FaraMisri",
  },
  {
    name: "FaraPerime",
  },
  {
    name: "Mjetet",
  },
  {
    name: "Pesticidet",
  },
  {
    name: "PlehraKimike",
  },
  {
    name: "Serat",
  },
];

async function insertDemoData() {
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");

  for (const image of demoProductImages) {
    await prisma.image.create({
      data: image,
    });
  }
  console.log("Demo images inserted successfully!");

  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

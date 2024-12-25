const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Brokoli & Lulelaker / Domate / Karrota / Kunguj",
    price: 7.70,
    rating: 5,
    description: "(Pako 100 cope)",
    mainImage: "vegetables.jpg?v=2",
    slug: "fara-perime-demo",
    manufacturer: "UBT AgroMarket",
    categoryId: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
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
    categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
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
    categoryId: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
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
    categoryId: "d30b85e2-e544-4f48-8434-33fe0b591579",
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
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
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
    categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 1,
  },
  {
    id: "7",
    title: "Serë ne shitje",
    price: 4,
    rating: 5,
    description: "5 USD për 200–499 metra katrorë, 4.5 USD për 500–799 metra katrorë, 4 USD për 800–999 metra katrorë, 3.8 USD për 1000–1999 metra katrorë, 3.5 USD për ≥2000 metra katrorë.",
    mainImage: "sera.jpg?v=2",
    slug: "sera-demo",
    manufacturer: "UBT AgroMarket",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 1,
  },
];


const demoCategories = [
  {
    id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    name: "Blegtoria",
  },
  {
    id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    name: "FaraMisri",
  },
  {
    id: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    name: "FaraPerime",
  },
  {
    id: "d30b85e2-e544-4f48-8434-33fe0b591579",
    name: "Mjetet",
  },
  {
    id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    name: "Pesticidet",
  },
  {
    id: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    name: "PlehraKimike",
  },
  {
    id: "7a241318-624f-48f7-9921-1818f6c20d85",
    name: "Serat",
  },
];

async function insertDemoData() {
  for (const category of demoCategories) {
    await prisma.category.upsert({
      where: { id: category.id },  // Check if the category already exists by its ID
      update: {},  // If it exists, don't update anything (you can add update logic if needed)
      create: category,  // If it doesn't exist, create a new category
    });
  }
  console.log("Demo categories inserted successfully!");

  for (const product of demoProducts) {
    await prisma.product.upsert({
      where: { id: product.id },  // Check if the product already exists by its ID
      update: {},  // If it exists, don't update anything (you can add update logic if needed)
      create: product,  // If it doesn't exist, create a new product
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  const categories = await prisma.category.findMany();
  console.log(categories);
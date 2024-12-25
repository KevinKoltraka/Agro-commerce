import { PrismaClient } from '@prisma/client';


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
  {
    id: "8",
    title: "Pompë Uji Centrifugale me Thithje Elektrike 20 Inç",
    price: 280,
    rating: 5,
    description: "Pompa e ujit me thithje elektrike centrifugale 20 inç është një zgjidhje e fuqishme dhe efikase ujitëse e krijuar për aplikime bujqësore, duke siguruar rrjedhje të besueshme uji për sistemet e ujitjes në shkallë të gjerë.",
    mainImage: "pompe.avif?v=2",
    slug: "pompe-uji-demo",
    manufacturer: "Bosch",
    category: "Ujitje",
    inStock: 1,
  },
  {
    id: "9",
    title: "Veshje",
    price: 19,
    rating: 3,
    description: "Çizme të gjata rezistente ndaj ujit, të rehatshme dhe të përshtatshme për terrene të ndryshme dhe aktivitete në natyrë.",
    mainImage: "cizme.webp?v=2",
    slug: "veshje-demo",
    manufacturer: "Monagri",
    category: "Veshje",
    inStock: 1,
  },
  {
    id: "10",
    title: "Ripe Robotics",
    price: 450000,
    rating: 5,
    description: "Ripe Robotics është një robot autonom që grumbullon fruta në mënyrë efikase, duke përdorur inteligjencën artificiale për të optimizuar rendimentin dhe ulur kostot e punës.",
    mainImage: "robot.jpg?v=2",
    slug: "ripe-robotics-demo",
    manufacturer: "Ripe Robotics",
    category: "Teknologjia",
    inStock: 1,
  },
  {
    id: "11",
    title: "Thermo King",
    price: 52000,
    rating: 5,
    description: "This is notebook description",
    mainImage: "frigorifer.jpg?v=2",
    slug: "thermo-king-demo",
    manufacturer: "Thermo King",
    category: "Magazinimi",
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
  {
    name: "Ujitje",
  },
  {
    name: "Veshje",
  },
  {
    name: "Teknologjia",
  },
  {
    name: "Magazinimi",
  },
];


async function insertDemoData() {
  try {
    for (const product of demoProducts) {
      await prisma.product.upsert({
        where: { name: product.title },  // Use 'title' instead of 'name' for uniqueness
        update: {},  // If the product already exists, don't update anything
        create: product,
      });
    }
    console.log("Demo products inserted successfully!");

    // Assuming you have demoProductImages defined, otherwise remove this part
    for (const image of demoProductImages) {
      await prisma.image.upsert({
        where: { url: image.url },  // Assuming 'url' is unique for images
        update: {},
        create: image,
      });
    }
    console.log("Demo images inserted successfully!");

    for (const category of demoCategories) {
      await prisma.category.upsert({
        where: { name: category.name },  // Assuming 'name' is unique for categories
        update: {},
        create: category,
      });
    }
    console.log("Demo categories inserted successfully!");

  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await prisma.$disconnect();  // Ensure the Prisma client disconnects after execution
  }
}
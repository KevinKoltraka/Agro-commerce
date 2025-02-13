export const categoryMenuList = [
  {
    id: 1,
    title: "Fara Perime",
    src: "/seed.gif",
    href: "/shop/FaraPerime"
  },
  {
    id: 2,
    title: "Plehra kimike",
    src: "/pleh.gif",
    href: "/shop/PlehraKimike"
  },
  {
    id: 3,
    title: "Pesticidet",
    src: "/pests.gif",
    href: "/shop/Pesticidet"
  },
  {
    id: 4,
    title: "Mjetet",
    src: "/tools.gif",
    href: "/shop/Mjetet"
  },
  {
    id: 5,
    title: "Blegtoria",
    src: "/blegtori.png",
    href: "/shop/Blegtoria"
  },
  {
    id: 6,
    title: "Fara Misri",
    src: "/seed.gif",
    href: "/shop/FaraMisri"
  },
  {
    id: 7,
    title: "Serat",
    src: "/sera.png",
    href: "/shop/Serat"
  },
  {
    id: 8,
    title: "Ujitje",
    src: "/ujitje.gif",
    href: "/shop/Ujitje"
  },
  {
    id: 9,
    title: "Veshje",
    src: "/veshje.png",
    href: "/shop/Veshje"
  },
  {
    id: 10,
    title: "Teknologjia",
    src: "/tech.png",
    href: "/shop/Teknologjia"
  },
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Ofertat", href: "#" },
    { name: "Njoftime", href: "#" },
  ],
  about: [
    { name: "Rreth UBT AgroMarket", href: "#" },
    { name: "Bashkpuno me ne", href: "#" },
    { name: "Profili Kompanise", href: "#" },
  ],
  buy: [
    { name: "UBT AgroMarket Karta e Besnikerise", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Ankesat", href: "#" },
    { name: "Partneret", href: "#" },
  ],
  help: [
    { name: "Kontakt", href: "#" },
    { name: "Si te blejme tek UBT AgroMarket", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};

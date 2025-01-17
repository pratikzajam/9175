const storedUser = localStorage.getItem("user");
const user = JSON.parse(storedUser);

const shoppingData = [
  {
    id: 1,
    title: `${user ? user.name : "Guest"}, 50% Off On Kitchen Appliances`, // Display user name or "Guest" if user is not found
    desc: "Upgrade your kitchen with modern appliances at half the price. Perfect for students looking to cook their favorite meals conveniently.",
    cover: './assets/main-slider/slide-1.webp',
  },
  {
    id: 2,
    title: "Exclusive Deals on Furniture",
    desc: "Furnish your living space with stylish and affordable furniture tailored for comfort and utility.",
    cover: "./assets/main-slider/slide-2.jpg",
  },
  {
    id: 3,
    title: "Electronics at Unbeatable Prices",
    desc: "Get the latest gadgets and devices for your academic and personal needs. Discounts available for students.",
    cover: "./assets/main-slider/slide-3.png",
  },
  {
    id: 4,
    title: "Customized Bundled Packages",
    desc: "Curated packages tailored to students' cultural and regional needs, ensuring a smooth transition and community integration.",
    cover: "./assets/main-slider/slide-4.jpeg",
  },
  {
    id: 5,
    title: "50% Off On Study Essentials for MIT Students",
    desc: "Get 50% off on your first purchase of study essentials like laptops, notebooks, and more. Upgrade your learning experience today!",
    cover: "./assets/main-slider/slide-4.png",
  },
];

export default shoppingData;

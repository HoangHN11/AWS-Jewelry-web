import { v4 as uuidv4 } from "uuid";

const products = [
  {
    id: uuidv4(),
    name: "Diamond Eternity Ring",
    description: "Nhẫn kim cương Eternity sang trọng, kiểu dáng tinh xảo.",
    image: "https://th.bing.com/th/id/R.2a9d3d33d4c8f54fc2f3973f7815bf06?rik=gyWw9gkIoCRGFw&pid=ImgRaw&r=0",
    isNew: true,
    isActive: true,
    createAt: new Date().toISOString(),
    updateAt: null,
    deleteAt: null,
    productSizes: [
      {
        id: uuidv4(),
        sizeId: uuidv4(),
        price: 59976000,
        quantity: 8,
        isActive: true
      }
    ],
    reviews: []
  },
  {
    id: uuidv4(),
    name: "Pearl Drop Earrings",
    description: "Bông tai ngọc trai kiểu Drop, sang trọng và tinh tế.",
    image: "https://i.pinimg.com/originals/a4/9c/ed/a49ceddb3738d133b6c4ce3e62058876.jpg",
    isNew: false,
    isActive: true,
    createAt: new Date().toISOString(),
    updateAt: null,
    deleteAt: null,
    productSizes: [
      {
        id: uuidv4(),
        sizeId: uuidv4(),
        price: 21576000,
        quantity: 24,
        isActive: true
      }
    ],
    reviews: []
  },
  {
    id: uuidv4(),
    name: "Gold Chain Necklace",
    description: "Dây chuyền vàng 18K thanh lịch, phù hợp mọi dịp.",
    image: "https://i5.walmartimages.com/asr/581d0108-c553-4ad4-b313-21fc7cd35409.60554c38807fa5e88ec21d0fa60edc4c.jpeg",
    isNew: false,
    isActive: true,
    createAt: new Date().toISOString(),
    updateAt: null,
    deleteAt: null,
    productSizes: [
      {
        id: uuidv4(),
        sizeId: uuidv4(),
        price: 45576000,
        quantity: 6,
        isActive: true
      }
    ],
    reviews: []
  },
  {
    id: uuidv4(),
    name: "Diamond Tennis Bracelet",
    description: "Vòng tay Diamond Tennis lấp lánh, thiết kế hiện đại.",
    image: "https://tse4.mm.bing.net/th/id/OIP.3TOPb4dxWXjpIinFI8cKQgHaGK?rs=1&pid=ImgDetMain&o=7&rm=3",
    isNew: true,
    isActive: true,
    createAt: new Date().toISOString(),
    updateAt: null,
    deleteAt: null,
    productSizes: [
      {
        id: uuidv4(),
        sizeId: uuidv4(),
        price: 79176000,
        quantity: 3,
        isActive: true
      }
    ],
    reviews: []
  },
  {
    id: uuidv4(),
    name: "Emerald Cocktail Ring",
    description: "Nhẫn Emerald Cocktail nổi bật, kiểu dáng sang trọng.",
    image: "https://tse3.mm.bing.net/th/id/OIP.mXrC98U0C84P5DAn1D8wpwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    isNew: false,
    isActive: true,
    createAt: new Date().toISOString(),
    updateAt: null,
    deleteAt: null,
    productSizes: [
      {
        id: uuidv4(),
        sizeId: uuidv4(),
        price: 110376000,
        quantity: 2,
        isActive: true
      }
    ],
    reviews: []
  }
];

export default products;

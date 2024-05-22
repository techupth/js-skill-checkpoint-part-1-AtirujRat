// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

const minQuantityProduct = inventory.map((item) => {
  return item.quantity;
});

const minProduct = inventory.filter((item) => {
  return item.quantity <= Math.min.apply(Math, minQuantityProduct);
});

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minProduct[0].name} ซึ่งมี ${minProduct[0].quantity} ชิ้น`
);

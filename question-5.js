// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  const total = products.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);

  if (promotionCode === "SALE20") {
    return total - (total / 100) * 20;
  } else if (promotionCode === "SALE50") {
    return total - (total / 100) * 50;
  } else {
    return total;
  }
}

console.log(calculateTotalPrice(products, promotionCode));

const names = [
  "Laptop Dell XPS 13",
  "iPhone 15 Pro",
  "Chuột Logitech MX Master 3",
  "Bàn phím cơ Keychron K8",
  "Màn hình LG UltraWide",
  "Tai nghe Sony WH-1000XM5",
  "USB Kingston 64GB",
  "Ổ cứng SSD Samsung 1TB",
  "Loa Bluetooth JBL Flip 6",
  "Máy in Canon LBP 2900"
];

const prices = [
  35000000,
  28000000,
  2500000,
  2200000,
  9000000,
  7500000,
  150000,
  1800000,
  2400000,
  3200000
];

const stocks = [
  5, 3, 0, 10, 2, 0, 25, 8, 6, 4
];

let choice;

// ================== CASE 1 ==================
const filterPremiumProducts = () => {
  const premiumProducts = names.filter((name, index) => prices[index] > 5000000);

  if (premiumProducts.length === 0) {
    alert("Không có sản phẩm cao cấp.");
  } else {
    alert("Sản phẩm cao cấp:\n" + premiumProducts.join("\n"));
  }
};

// ================== CASE 2 ==================
const checkDataStatus = () => {
  const hasOutOfStock = stocks.some(stock => stock === 0);
  const isPriceValid = prices.every(price => price > 100000);

  alert(
    "Có sản phẩm hết hàng: " + (hasOutOfStock ? "Có" : "Không") +
    "\nTất cả sản phẩm giá > 100.000: " + (isPriceValid ? "Đúng" : "Sai")
  );
};

// ================== CASE 3 ==================
const calculateTotalAssets = () => {
  const total = prices.reduce((sum, price, index) => {
    return sum + price * stocks[index];
  }, 0);

  alert("Tổng giá trị kho: " + total.toLocaleString() + " VND");
};

// ================== CASE 4 ==================
const applyDiscount = () => {
  const discountedPrices = prices.map(price => price * 0.9);

  alert("Đã áp dụng giảm 10% cho toàn bộ sản phẩm.");
  console.log("Giá sau giảm:", discountedPrices);
};

// ================== CASE 5 ==================
const searchProduct = () => {
  const keyword = prompt("Nhập từ khóa cần tìm:").toLowerCase();

  const result = names.filter(name =>
    name.toLowerCase().includes(keyword)
  );

  if (result.length === 0) {
    alert("Không tìm thấy sản phẩm.");
  } else {
    alert("Kết quả tìm kiếm:\n" + result.join("\n"));
  }
};

// ================== CASE 6 ==================
const reportStockStatus = () => {
  let report = "";

  names.forEach((name, index) => {
    report += `${name} - Tồn kho: ${stocks[index]}\n`;
  });

  alert(report);
};

// ================== MENU ==================
const displayMenu = () => {
  choice = +prompt(`
--- DANH SÁCH QUẢN LÍ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>5 triệu)
2. Kiểm định trạng thái dữ liệu
3. Tính tổng giá trị kho
4. Giảm giá 10%
5. Tìm sản phẩm theo từ khóa
6. Báo cáo tồn kho
7. Thoát
  `);
};


do {
  displayMenu();

  switch (choice) {
    case 1:
      filterPremiumProducts();
      break;
    case 2:
      checkDataStatus();
      break;
    case 3:
      calculateTotalAssets();
      break;
    case 4:
      applyDiscount();
      break;
    case 5:
      searchProduct();
      break;
    case 6:
      reportStockStatus();
      break;
    case 7:
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }

} while (choice !== 7);
const orders=[
    "Đơn hàng A",
    "Đơn hàng B",
    "Dơn hàng C",
    "Dơn hàng D",
    "Dơn hàng E",
];
const revenues=[
    1500,2800,1200,-500,3200,
];

console.log(`${orders[0]} mang về ${revenues[0]} USD`);
console.log(`${orders[1]} mang về ${revenues[1]} USD`);
console.log(`${orders[2]} mang về ${revenues[2]} USD`);
console.log(`${orders[3]} mang về ${revenues[3]} USD`);
console.log(`${orders[4]} mang về ${revenues[4]} USD`);

let sum=0;
for(let i=0;i<revenues.length;i++){
    if(revenues[i]>0)
        sum+=revenues[i];
}
console.log("tổng:",sum);

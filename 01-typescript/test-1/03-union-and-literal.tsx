let orderStatus : "pending" | "shipped" | "delivered" = "pending";

let statusCode : 200 | 400 = 200;
let statusCode2 : 200 | 400 | string = 200;

console.log(typeof orderStatus);


orderStatus = "shipped";
console.log(orderStatus);
console.log(statusCode);
var num1 = 12;
var num2 = 16;

console.log(num1 + num2);
console.log(num1 * num2);

var answer = num1 < num2;

console.log(answer);


// first method
var actualSellingPrices = 799;
console.log(`Actual Price ${actualSellingPrices}`);


descountPercent = 25;
console.log(`Discount % ${descountPercent}`);


discountedPrice = (actualSellingPrices * descountPercent) /  100;
console.log(`Discounted Price ${discountedPrice}`);


discountPrices = actualSellingPrices - discountedPrice;
console.log(`Selling Price ${discountPrices}`);


// second method


var sellingPrice = 199;
var listedPrice = 999;

var descountPercent = ((listedPrice - sellingPrice) / listedPrice) * 100;

console.log("descountPrices is : " + descountPercent);

displayDiscountedPercent = Math.round(descountPercent);
console.log(displayDiscountedPercent + "% off");



// Boolean value check

//typeof is a oparator.

var result = sellingPrice < listedPrice;
console.log(result);

console.log(typeof result);

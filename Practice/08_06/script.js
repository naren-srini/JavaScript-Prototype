/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
window.priceUSD = 1000;
window.inr = 55;

function tax(price, tax = 0.13) {
    let priceCAD = 1200;
    let finalPrice = priceCAD * tax + price;
    return finalPrice;
}
const laptop = {
    name: "hp",
    model: "spectre",
    number: "X360",
    tilt_feature: true,
    size: 14,
    price: 999,
    tax: 0.13,
    storage: {
        ram: 8,
        rom: 128,
    },
    newStoragesize: function(ReadOnlyMem, RandomAccessMem) {
        this.storage.rom = ReadOnlyMem;
        this.storage.ram = RandomAccessMem;
        console.log(
            "Storage of ROM and RAM is",
            ReadOnlyMem,
            "GB",
            RandomAccessMem,
            "GB"
        );
    },
};
laptop.newStoragesize(16, 512);

console.log("Price in USD Before Taxes", laptop.price);
// console.log("Price in CAD After Taxes", tax.finalPrice());
console.log("The price of Laptop in CAD:", window.finalPrice);
console.log("New price in inr:", this.price_in_inr);

console;
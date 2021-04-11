/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
window.price = 1000;
window.inr = 55;

function tax(price, tax = 0.13) {
    let finalPrice = price * tax + price;
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
};
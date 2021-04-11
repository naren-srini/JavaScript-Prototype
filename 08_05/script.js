/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;
window.price = 25;
window.inr = 55;

const greenPack = {
    name: "Tactical Pack",
    color: "green",
    volume: 10,
    pocketNum: 3,
    price: 25,
    weight: 1.5,

    newVolume: function(price) {
        console.log("this.price in the method:", this.price);
        this.price = price * window.inr;
        console.log("this.price New price after update:", this.price);
        // (function () {
        //   console.log("this.price in nested function:", this.price);
        // })();
    },
};

console.log(greenPack.newVolume(5));
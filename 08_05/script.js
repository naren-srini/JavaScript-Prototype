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
    price_in_inr: 0,
    newVolume: function(volume) {
        console.log("this.volume in the method:", this.volume);
        this.volume = volume;
        console.log("this.volume in the method UPDATE:", this.volume);
        (function() {
            console.log("this.volume in nested function:", this.volume);
        })();
    },
    newPrice: function(price) {
        console.log("Price in the CAD method:", this.price);

        this.price_in_inr = price * window.inr;
        console.log("After the method in CAD:", this.price);
        console.log("New price in inr:", this.price_in_inr);
    },
};

console.log(greenPack.newVolume(5));
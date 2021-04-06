/**
 * Create a Backpack object.
 */

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

console.log("The backpack object:", backpack);
console.log("The pocket number value", backpack.pocketNum);
console.log("Strap Length", backpack.strapLength);

var query = "pocketNum";

console.log("The Pocket Num Value:", backpack[query]);
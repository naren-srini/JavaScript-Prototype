/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

var smartphone = {
    name: "Samsung",
    model: "Galaxy",
    version: "S21",
    color: "white, black, grey",
    battery: (4000, "mAh"),
    storage: (128, "GB"),
    processor: "Qualcomm",
    graphics: "Adreno",
    size: {
        length: 6.2,
        width: 3.5,
    },

    display: {
        screenHW: "Dynamic AMOLED",
        screenRES: {
            pixelL: 2400,
            pixelW: 1080,
            screenRatio: ["20:9"],
            PPI: 441,
        },
    },

    fullName: function phoneName() {
        return (this.name + " " + this.model + " " + this.version);
    },
};

console.log("The name of object:", smartphone.fullName("phoneName"));
/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

var device = {

    deviceType: "Smartphone",
    name: "Samsung",
    series: "Galaxy",
    version: "S21",
    color: "white, black, grey",

    price: {
        usd: (800, "US$"),
        cad: (1000, "CAD$"),
        eur: (849, "€"),
        inr: (69000, "RS"),
        cny: (6300, "CNY"),
        krw: (1379360, "KRW"),
    },
    camera: {
        rear1: (12, "MP"),
        rear2: (64, "MP"),
        rear3: (12, "MP"),
        front: (10, "MP"),
    },
    hardware: {
        manufacturer: "Qualcomm",
        series: "Snapdragon",
        model: 888,
        graphics: ("Adreno", 660),
        RAM: (8, "GB LPDDR5"),
        storage: (128, "GB (UFS 3.0)"),
    },
    size: {
        length: 6.2,
        width: 3.5,
    },
    batteryTech: {
        capacity: (4000, "mAh"),
        type: "Li-Polymer",
        userReplacable: false,
    },
    screenRES: {
        pixelL: 2400,
        pixelW: 1080,
        screenRatio: ["20:9"],
        PPI: 441,
    },
    display: {
        screenTech: "Dynamic AMOLED",
        refreshRate: (120, "Hz"),
        screenToBody: 86,
        peakBrightness: (1300, "cd/m2 (nit)"),
    },
    screenRes: {
        pixelL: 2400,
        pixelW: 1080,
        screenRatio: "20:9",
        PPI: 441,
    },
    fullName: function phoneName() {
        return this.name + " " + this.series + " " + this.version
    },

};


console.log("The device name is", device.fullName());
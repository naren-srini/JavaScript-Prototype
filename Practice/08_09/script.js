/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
    name: "Frog Backpack",
    volume: 8,
    color: "green",
    pocketNum: 3,
    strapLength: {
        left: 10,
        right: 10,
    },
    lidOpen: false,
    image: "../../assets/images/frog.svg",
    description: "This is our new green frog kids backpack",
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

// Here we create the Main Function
// Adding figure
// Activity: Recieves dataObj, Creates figure, Returns figure

const insertFigure = (dataObj) => {
    let newFigure = document.createElement("figure");
    let newImage = document.createElement("img");
    newImage.setAttribute("src", dataObj.image);
    newImage.setAttribute("alt", "");
    let newDescription = document.createElement("Backpack");
    newDescription.innerText = dataObj.description;
    newFigure.append(newImage, newDescription);
    return newFigure;
};

/** Here we are creating the article function
            Activity: Receives backpack obj
            creates <article>, calls insertFigure(), returns <article>
        */

const createArticle = (frogpack) => {
    let newArticle = document.createElement("Article-1");
    newArticle.innerHTML = content;
    newArticle.prepend(insertFigure(frogpack));
    return newArticle;
};

// Here we pass the query to the functions
document.querySelector("main").append(createArticle(frogpack));
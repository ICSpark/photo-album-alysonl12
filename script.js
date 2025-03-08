function fix() {
    //Write your code here!
    let coconut = document.getElementById("coconut");
    coconut.remove()
    let coast = document.getElementById("coast");
    coast.remove()
    let watermelon = document.getElementById("watermelon");
    watermelon.remove()
    let sunflowers = document.getElementById("sunflowers");
    sunflowers.remove()

    let tree = document.createElement("img");
    tree.id = "tree";
    tree.scr = "to-add/christmasTree.jpg";
    let photos = document.getElementById("photos");
    photos.appendChild(tree);

    let snowmen = document.createElement("img");
    snowmen.id = "snowmen";
    snowmen.scr = "to-add/snowmen.jpg";
    let a = document.getElementById("photos");
    a.appendChild(snowmen);

    let stockings = document.createElement("img");
    stockings.id = "stockings";
    stockings.scr = "to-add/stockings.jpg";
    let b = document.getElementById("photos");
    b.appendChild(stockings);


}
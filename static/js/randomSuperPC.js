function insertImage(arr) {
    let index = Math.round(Math.random() * (arr.length - 1));
    console.log(index);
    let obj = document.getElementById("#picture");
    let picture = document.createElement("img")
    picture.src = "static/images/" + arr[index];
    obj.appendChild(picture);
}
let images = ["lumi.png", "fugaku.png", "frontier.png"];
insertImage(images);

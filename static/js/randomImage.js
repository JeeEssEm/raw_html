function insertImage(arr) {
    let index = Math.round(Math.random() * (arr.length - 1));
    console.log(index);
    let obj = document.getElementById("#picture");
    let picture = document.createElement("img")
    picture.src = "static/images/" + arr[index];
    obj.appendChild(picture);
}

let arr = ["img0.png", "img1.png", "img2.png", "img3.png", ]
insertImage(arr);

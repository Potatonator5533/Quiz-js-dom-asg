let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");

let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetColorsBtn = document.getElementById("resetColorsBtn");

let userColor;
let userBox;

let otherBoxInfo = "col-3 text-center boxSize"

changeColorBtn.addEventListener("click", function () {
  //   ChangeBoxColor();
  userColor = changeColor.value.toLowerCase();
  userBox = boxNumber.value;
  let selectedColor = "";
  if (!userBox == "" || !userColor == "") {
    switch (userColor) {
      case "red":
        selectedColor = userColor;
        break;
      case "blue":
        selectedColor = userColor;
        break;
      case "purple":
        selectedColor = userColor;
        break;
      case "brown":
        selectedColor = userColor;
        break;
      case "yellow":
        selectedColor = userColor;
        break;
      default:
        selectedColor = "no";
        break;
    }

    switch (userBox) {
      case "1":
        box1.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      case "2":
        box2.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      case "3":
        box3.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      case "4":
        box4.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      case "5":
        box5.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      case "6":
        box6.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      case "7":
        box7.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      case "8":
        box8.className = otherBoxInfo + " " + selectedColor + "Box";
        break;
      default:
        break;
    }
  }
});

resetColorsBtn.addEventListener("click", function () {
  box1.className = otherBoxInfo;
  box2.className = otherBoxInfo;
  box3.className = otherBoxInfo;
  box4.className = otherBoxInfo;
  box5.className = otherBoxInfo;
  box6.className = otherBoxInfo;
  box7.className = otherBoxInfo;
  box8.className = otherBoxInfo;
});

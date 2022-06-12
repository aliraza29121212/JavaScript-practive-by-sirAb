// let ABC = () => {
//   try {
//     let SelectObject = document.querySelector("h1").innerHTML;
//     alert(SelectObject);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// let ABC = () => {
//   try {
//     document.querySelector("h1").innerHTML = "Value Change ho gai ha";
//   } catch (error) {
//     alert(error.message);
//   }
// };

let ABC = () => {
  try {
    let SelectedObject = document.querySelector("h1");
    SelectedObject.innerHTML = "hey";
    SelectedObject.style.color = "red";
  } catch (error) {
    alert(error.message);
  }
};

let ChangeImage = () => {
  try {
    let SelectedObject = document.querySelector(".FirstImage");
    SelectedObject.src = "img/002.png";
  } catch (error) {
    error.message;
  }
};

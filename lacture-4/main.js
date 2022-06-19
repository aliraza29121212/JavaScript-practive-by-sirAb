// let ABC = () => {
//   try {
//     let SelectObject = document.querySelector("h1").innerHTML;
//     alert(SelectObject);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// let Clicked = () => {
//   try {
//     let SelectedObject = document.querySelector("h1").innerHTML;

//     alert(SelectedObject);
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

// let Clicked = () => {
//   try {
//     document.querySelector("h1").innerHTML = "HEyy THere";
//   } catch (error) {
//     alert(error.message);
//   }
// };

// let ABC = () => {
//   try {
//     let SelectedObject = document.querySelector("h1");
//     SelectedObject.innerHTML = "hey";
//     SelectedObject.style.color = "red";
//   } catch (error) {
//     alert(error.message);
//   }
// };
// let Clicked = () => {
//   try {
//     let SelectedObject = document.querySelector("h1");
//     SelectedObject.innerHTML = "Hii World";
//     SelectedObject.style.color = "red";
//   } catch (error) {
//     alert(error.message);
//   }
// };

// let ChangeImage = () => {
//   try {
//     let SelectedObject = document.querySelector(".FirstImage");
//     SelectedObject.src = "img/002.png";
//   } catch (error) {
//     error.message;
//   }
// };

// let ChangeImage = () => {
//   try {
//     let SelectedObject = document.querySelector(".FirstImage");
//     SelectedObject.src = "img/002.png";
//   } catch (error) {
//     error.message;
//   }
// };

// let visibleText = () => {
//   try {
//     let selectedObject = document.querySelector(".visibleText");
//     let Element = document.createElement("h1");
//     let InnerHtml = document.createTextNode("Ali Raza Here");
//     Element.appendChild(InnerHtml);
//     selectedObject.appendChild(Element);
//   } catch (error) {
//     error.message;
//   }
// };

// let visibleText = () => {
//   try {
//     let SelectedObject = document.querySelector(".InsideDiv");
//     let Element = document.createElement("h1");
//     let InnerHtml = document.createTextNode("This is Ali Raza from own Brand");
//     Element.appendChild(InnerHtml);
//     SelectedObject.appendChild(Element);
//   } catch (error) {
//     error.message;
//   }
// };

let VisisbleText = () => {
  try {
    let SelectedObject = document.querySelector(".InsideDiv");
    let Element = document.createElement("h1");
    let InnerHtml = document.createTextNode("Helooo World");
    Element.appendChild(InnerHtml);
    SelectedObject.appendChild(Element);
  } catch (error) {
    console.log(error.message);
  }
};

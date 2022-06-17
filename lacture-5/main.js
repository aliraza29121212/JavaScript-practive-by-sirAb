// let Human = {
//   Name: "Abc",
//   Age: 17,
// };

// for (const key in Human) {
//   console.log(`${key},${Human[key]}`);
// }

// let Song = {
//   SongName: "pasoori",
//   Artist: "Ali Sethi",
//   Year: 2022,
// };

// for (const key in Song) {
//   console.log(`${key} , ${key[Song]}`);
// }
// i = 0;
// for (; ; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

// let Data = {
//   Name: "Hamza",
//   Age: 21,
//   Gander: "Male",
//   City: "lahore",
// };
// for (const key in Data) {
//   try {
//     if (Data[key] === "Ali") {
//       console.log(`Welcome, ${Data[key]}`);
//     }
//   } catch (error) {
//     error.message;
//   }
// }

// let Data = ["Ali", "Hammas", "Hamza", "Ramzan", "Rafaqat", "Usman", "Imran"];
// Data.forEach((name, index) => {
//   console.log(name, index);
// });

// let counter = [];
// for (; counter < 10; counter++) {
//   console.log(counter);
// }

// let Human1 = {
//   Name: "Abc",
//   Age: 21,
//   Status: 1,
// };
// let Human2 = {
//   Name: "Xyz",
//   Age: 20,
//   Status: 1,
// };
// let Human3 = {
//   Name: "Xyz",
//   Age: 20,
//   Status: 0,
// };
// for (const key in Human2) {
//   if (Human2[key] === 1) {
//     console.log("Approved");
//   } else {
//     console.log("Unpproved");
//   }
// }

// let SarayH1GetKarlo = $$("h1");

// let NewArray = Array.from(SarayH1GetKarlo);
// console.log(NewArray);
// SarayH1GetKarlo.forEach((ArrayElement) => {
//   console.log(ArrayElement.innerHTML);
// });

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const $ = document.querySelector.bind(document);

// let SubmitMyValues = () => {
//   try {
//     let Email = $(".email").value;
//     let Password = $(".password").value;
//     let Element = document.createElement("h1");
//     let ContentOfElement = document.createTextNode(
//       `${Email} \n, your Password is ${Password}`
//     );
//     Element.appendChild(ContentOfElement);
//     let Binding = $(".Binding");
//     Binding.appendChild(Element);
//   } catch (error) {
//     error.message;
//   }
// };

// let SubmitMyValues = () => {
//   try {
//     const $ = document.querySelector.bind(document);
//     let SelectedObject = document.querySelector(".Binding");
//     let Email = $(".email").value;
//     let Password = $(".password").value;
//     let Element = document.createElement("h1");
//     SelectedObject.style.color = "red";
//     let ConntentOfElement = document.createTextNode(
//       `Greeting ${Email} \n Your Password is ${Password}`
//     );
//     Element.appendChild(ConntentOfElement);
//     let Binding = $(".Binding");
//     Binding.appendChild(Element);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// let LetsCalculate = () => {
//   try {
//     let Value1 = $(".value1").value;
//     let Value2 = $(".value2").value;
//     let Operator = $(".value3").value;
//     let ShowResult = $(".ShowResult");
//     let Result;

//     if (Operator === "+") {
//       Result = parseInt(Value1) + parseInt(Value2);
//     }
//     if (Operator === "-") {
//       Result = parseInt(Value1) - parseInt(Value2);
//     }
//     if (Operator === "/") {
//       Result = parseFloat(Value1) / parseFloat(Value2);
//     }
//     if (Operator === "*") {
//       Result = parseInt(Value1) * parseInt(Value2);
//     }
//     ShowResult.innerHTML = Result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// let LetsCalculate = () => {
//   try {
//     let Value1 = $(".value1").value;
//     let Value2 = $(".value2").value;
//     let Operator = $(".value3").value;
//     let ShowResult = $(".ShowResult");
//     let Result;

//     //Agar Operator + to Add kro
//     if (Operator === "+") {
//       Result = parseInt(Value1) + parseInt(Value2);
//     }
//     if (Operator === "-") {
//       Result = parseInt(Value1) - parseInt(Value2);
//     }
//     if (Operator === "/") {
//       Result = parseFloat(Value1) / parseFloat(Value2);
//     }
//     if (Operator === "*") {
//       Result = parseInt(Value1) * parseInt(Value2);
//     }
//     ShowResult.innerHTML = Result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const GetValue = () => {
//   try {
//     let Value = document.querySelector(".value");
//     console.log(Value);
//     console.log(Value.dataset.value);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const { TemplatePage } = require("./TemplatePage");

let Quantity = 1;
let Result = 0;

const GetValue = () => {
  try {
    let Value = parseInt(document.querySelector(".value").dataset.value);
    // Result =Result+Value

    Result += Value;
    console.log(Result);

    document.querySelector("span").innerHTML = `Quantity ${Quantity}`;
    document.querySelector(".Result").innerHTML = TemplatePage;
    Quantity++;
  } catch (error) {
    console.log(error.message);
  }
};

document.querySelector("span").innerHTML = `Quantity ${Quantity}`;

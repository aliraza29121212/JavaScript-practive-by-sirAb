// const GetValue = () => {
//   try {
//     let Value = document.querySelector(".value");
//     console.log(Value);
//     console.log(Value.dataset.value);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

let Quantity = 10;
document.querySelector("span").innerHTML = `Quantity ${Quantity}`;

const GetValue = () => {
  try {
    let Value = document.querySelector(".value");
    console.log(Value);
    console.log(Value.dataset.value);
    console.log(Value.dataset.type);
    console.log(Value.dataset.points);
    console.log(Value.dataset.important);
  } catch (error) {
    console.log(error.message);
  }
};

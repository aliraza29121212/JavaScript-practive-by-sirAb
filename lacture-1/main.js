// const MilkShake = (Value1, Value2) => {
//   console.log(Value1);
//   console.log(Value2);
// };
// MilkShake("Banana", "Milk");

// const ProcessData = (userDetails) => {
//   let Name = "My Name is " + userDetails.Name;
//   let Age = "My Age is " + userDetails.Age;
//   let IdNumber = "My Idnumber is " + userDetails.IdNumber;
//   let FatherName = "My Father Name is " + userDetails.FatherName;
//   console.log(Name, "\n", Age, "\n", IdNumber, "\n", FatherName);
// };

// let userDetails = {
//   Name: "Husssain",
//   Age: 20,
//   IdNumber: 1234546,
//   FatherName: "Ali",
// };

// ProcessData(userDetails);

const ProcessData = (ClientInfo) => {
  let Name = "My Name is " + ClientInfo.Name;
  let Age = "My age is " + ClientInfo.Age;
  let IdNumber = "My Id Number is " + ClientInfo.IdNumber;
  let FatherName = "My Father Name is " + ClientInfo.FatherName;
  console.log(Name, "\n", Age, "\n", IdNumber, "\n", FatherName);
};
// let VisibleText = () => {
//   try {
//     let SelectedObject = document.querySelector(".InsideDiv");
//     let Element = document.createElement("h1");
//     let InnerHtml = document.createTextNode(ProcessData(Name));
//     Element.appendChild(InnerHtml);
//     SelectedObject.appendChild(Element);
//   } catch (error) {
//     error.message;
//   }
// };

let ClientInfo = {
  Name: "Hamza",
  Age: 20,
  IdNumber: 12345456,
  FatherName: "Ejaz",
};
ProcessData(ClientInfo);

const Table = (TableNumber) => {
  for (let start = 1; start <= 10; start++) {
    let Result = 0;
    Result = TableNumber * start;
    console.log(Result);
  }
};
Table(8);

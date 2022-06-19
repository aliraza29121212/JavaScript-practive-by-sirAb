const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let Users = {
  Name: String,
  Email: String,
  Password: Number,
  RepPassword: Number,
  Token: Number,
};

let SubmitUserDetails = () => {
  try {
    Name = $(".Name").value;
    Email = $(".Email").value;
    Password = $(".Password").value;
    RepPassword = $(".RepPassword").value;
    // Sub string
    console.log(typeof RandomKey);
    Users.Name = Name;
    Users.Email = Email;
    Users.Password = Password;
    Users.RepPassword = RepPassword;
    Users.Token = RandomKey;

    // Store in local Storage

    localStorage.setItem("User-object", JSON.stringify(Users));
    let GetData = JSON.parse(localStorage.getItem("User-object"));
    let Result = $(".ShowResult");
    Result.innerHTML = `
Name: ${GetData.Name} <br>
Email: ${GetData.Email}<br>
Password: ${GetData.Password}<br>
RepPassword: ${GetData.RepPassword}<br>
Access: ${GetData.Token}`;
  } catch (error) {
    console.log(error.message);
  }
};

let splitString = () => {
  try {
    let String = "Baerer 23435nn56btthgb58tyght";
    let SplitString = String.split(" ");
    let RealToken = SplitString[1];
    console.log(RealToken);
    console.log(SplitString);
  } catch (error) {
    console.log(error.message);
  }
};

let RandomTokenGenerator = () => {
  try {
    let Random = Math.random() * 100;
    let RandomWhole = Math.floor(Random);
    // let RealToken = Random.toString().split(".");
    // console.log(RealToken);
    // RealToken = RealToken[1];
    // console.log(RealToken);

    console.log(Random);
    console.log(RandomWhole);
  } catch (error) {}
};

let SubString = () => {
  try {
    // let RandomKey = Math.random().toString(12).substring();
    let RandomKey = "0.87976874544635";
    RandomKey = RandomKey.substring(2);

    console.log(RandomKey);
  } catch (error) {
    console.log(error.message);
  }
};

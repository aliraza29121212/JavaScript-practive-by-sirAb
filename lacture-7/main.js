const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let Users = {
  Name: String,
  Email: String,
  Password: Number,
  RepPassword: Number,
};

let SubmitUserDetails = () => {
  try {
    Name = $(".Name").value;
    Email = $(".Email").value;
    Password = $(".Password").value;
    RepPassword = $(".RepPassword").value;
    Users.Name = Name;
    Users.Email = Email;
    Users.Password = Password;
    Users.RepPassword = RepPassword;

    // Store in local Storage

    localStorage.setItem("User-object", JSON.stringify(Users));
    let GetData = JSON.parse(localStorage.getItem("User-object"));
    let Result = $(".ShowResult");
    Result.innerHTML = `
Name : ${GetData.Name} \n
Email : ${GetData.Email}\n
Password : ${GetData.Password}\n
RepPassword : ${GetData.RepPassword}`;
  } catch (error) {
    error.message;
  }
};

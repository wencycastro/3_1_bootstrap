function registerUser() {
    let USER_REGISTER_FORM = {
        userEmail: document.getElementById("inputEmail"),
        firstName: document.getElementById("inputName"),
        userPassword: document.getElementById("inputPassword"),
        confirmUserPassword: document.getElementById("inputConfirmPassword"),
        userRather: document.getElementById("Rather"),
        userMale: document.getElementById("Male"),
        userFemale: document.getElementById("Female"),
        userAddress: document.getElementById("inputAddress"),
        inputDate: document.getElementById("inputDate")
    };

    let user = {
        name: USER_REGISTER_FORM.firstName.value,
        email: USER_REGISTER_FORM.userEmail.value,
        password: USER_REGISTER_FORM.userPassword.value,
        confirmPassword: USER_REGISTER_FORM.confirmUserPassword.value,
        userGender: USER_REGISTER_FORM.userRather.checked ? "Rather" : USER_REGISTER_FORM.userMale.checked ? "Male" : USER_REGISTER_FORM.userFemale.checked ? "Female" : "",
        userLocation: USER_REGISTER_FORM.userAddress.value,
        userDate: USER_REGISTER_FORM.inputDate.value
    }

    if (!user.email) return alert("Email is required.");
    if (!user.name) return alert("Name is required.");
    if (!user.password || !user.confirmPassword) return alert("Password is required.");
    if (user.password !== user.confirmPassword) return alert("Passwords do not match.");
    if (!user.userGender) return alert("Fill your Gender");
    if (!user.userLocation) return alert("Please fill up the Address");
    if (!user.userDate) return alert("Fill up date");

    localStorage.setItem("user", JSON.stringify(user));
    console.log("Click", user);
}

let btnSignUp = document.getElementById("btnSignUp");

btnSignUp.onclick = () => {
    registerUser();
}
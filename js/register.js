const register = document.getElementById("register");
register.onclick = daftar;

function daftar(e){
    e.preventDefault();

    // Name
    const name = document.getElementById("name");
    localStorage.setItem("Name", name.value);
    let nameValue = name.value.trim();

    // Password
    const password = document.getElementById("password");
    localStorage.setItem("Password", password.value);
    let passwordValue = password.value.trim();

    // Number
    const number = document.getElementById("number");
    let numberValue = number.value.trim();

    // Email
    const email = document.getElementById("email");
    localStorage.setItem("Email", email.value);
    let emailValue = email.value.trim();

    // Gender
    let gender;
    if (document.getElementById("Female").checked){
        gender = document.getElementById("Female").value;
    } else {
        gender = document.getElementById("Male").value;
    }
    let genderValue = gender.trim()

    // Interest
    let checkinterest = [];
    let interest = document.getElementsByName("interest");
    for (let i=0; i < interest.length; i++){
        if (interest[i].checked == true){
            checkinterest.push(interest[i].value);
        }
    }

    // Skintype
    const skintype = document.getElementById("skintype");
    let skintypeValue = skintype.value.trim();

    // Concerns
    const concerns = document.getElementById("concerns");
    let concernsValue = concerns.value.trim();

    // array
    let user = {
        Name : nameValue,
        Password : passwordValue,
        Number : numberValue,
        Email : emailValue,
        Gender : genderValue,
        Interest : checkinterest,
        Skintype : skintypeValue,
        Concerns : concernsValue,
    }

    sessionStorage.setItem("User", JSON.stringify(user));

    // Peringatan
    alert("Registration Success. Go to LOGIN page.");

}
const login = document.getElementById("login");
const email = document.getElementById("floatingEmail");
const pass = document.getElementById("floatingPassword");

login.addEventListener("submit", function(e){
    e.preventDefault()

    const loc_email = localStorage.getItem("Email");
    const loc_pass = localStorage.getItem("Password");

    if(email.value == loc_email && pass.value == loc_pass){
        alert("Login Success");
        window.location.href = "index.html";
    }else{
        alert("Login Failed");
    }
});


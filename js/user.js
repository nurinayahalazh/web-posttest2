let x = sessionStorage.getItem("User");
x = JSON.parse(x);

document.getElementById("name").innerHTML = x.Name;
document.getElementById("number").innerHTML = x.Number;
document.getElementById("email").innerHTML = x.Email;
document.getElementById("gender").innerHTML = x.Gender;
document.getElementById("interest").innerHTML = x.Interest;
document.getElementById("skintype").innerHTML = x.Skintype;
document.getElementById("concerns").innerHTML = x.Concerns;
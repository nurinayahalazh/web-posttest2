const nama = localStorage.getItem("Name");

const show = document.getElementById("show");
show.innerHTML = ("Hi, ", nama);
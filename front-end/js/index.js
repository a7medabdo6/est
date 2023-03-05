// Get the modal
var modal = document.getElementById("loginForm");

// Get the button that opens the modal
var btn = document.getElementsByClassName("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
      }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// ---------------------------------------------

function preventDefualt() {
  return false;
};

const email = document.getElementsByClassName("login")[0];
const password = document.getElementsByClassName("login")[1];
const loginBtn = document.getElementById("submitBtn");

loginBtn.addEventListener("click", () => {
    const data = { email: email.value, password: password.value };
    fetch("http://65.108.33.225:3000/login", {
      method: "POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.status === 200) {
        localStorage.setItem("token", data.token);
        window.location.href = "../html/dashboard.html";
      } else {
        console.log(data.message)
      }
    });
});




const form = document.querySelector("form");

form.addEventListener("submit", SubmitForm);

function SubmitForm(e) {
  e.preventDefault();

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const userName = document.querySelector("#userName").value;
  const password = document.querySelector("#password").value;

  fetch("https://webdevclass-server.onrender.com/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      userName,
      password,
    }),
  })
    .then((res) => res.json())
    .then((val) => {
        location.href = "./login.html"
    })
    .catch((err) => console.log(err));
}

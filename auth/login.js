const form = document.querySelector("form");

form.addEventListener("submit", SubmitForm);

function SubmitForm(e) {
  e.preventDefault();

  const userNameorEmail = document.querySelector("#userNameorEmail").value;
  const password = document.querySelector("#password").value;

  console.log(userNameorEmail);

  fetch("https://webdevclass-server.onrender.com/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userNameorEmail,
      password,
    }),
  })
    .then((res) => res.json())
    .then((val) => {
      if (!val.err) {
        document.cookie = `user=${val.response.id}; expires=${
          Date.now() + 30 * 24 * 60 * 60 * 1000
        }`;
        console.log(val);
        location.href = "./index.html";
      } else {
        throw new Error(val.errMsg)
      }
    })
    .catch((err) => console.log(err));
}



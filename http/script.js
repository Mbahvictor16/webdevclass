import urlToImage from "../img/urlToImage/jpg"

//HTTP REQUEST

//FETCH API

// fetch("https://api.api-ninjas.com/v1/dictionary?word=punctuation", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Api-Key": "CmEcH5h8ymlysdfJyxYt5CznmoO6KpkojUjLQQYK",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// GET, POST, PUT, PATCH, DELETE.

// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "test product",
//     price: 13.5,
//     description: "lorem ipsum set",
//     image: "https://i.pravatar.cc",
//     category: "electronic",
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// const form = document.querySelector("form");
// const email = document.querySelector('input[name="email"]');
// const password = document.querySelector('input[name="password"]');
// const username = document.querySelector('input[name="username"]');

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: username.value,
//       email: email.value,
//       password: password.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));
  
//   form.reset()

//   location.href = "./redirect.html"
// });
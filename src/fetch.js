/* eslint-disable no-unused-vars */
const quoteButton = document.getElementById("quoteFetch");
const formLocation = document.getElementById("categorySelect");
const submitButton = document.getElementById("submitButton");
let chuckSays = document.querySelector(".chuckSays");
const closeModalButton = document.querySelector("#closeModal");

const getCategory = async () => {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
    const data = await response.json();
    // console.log(data.filter(item => item !== "explicit"));
    const categoryDropdown = document.createElement("select");
    const categoryList = data.filter(item => item !== "explicit");
    categoryList.map(listItem => {
      const selectItem = document.createElement("option");
      selectItem.value = listItem;
      selectItem.text = listItem;
      categoryDropdown.appendChild(selectItem);
      return categoryList;
    });
    formLocation.insertBefore(categoryDropdown, submitButton);
  } catch (error) {
    return error;
  }
};

getCategory();

//   const categoryList = response.filter(item => item !== `explicit`);
//   categoryList.map(listItem => {
//     const selectItem = document.createElement("option");
//     selectItem.value = listItem;
//     selectItem.text = listItem;
//     categoryDropdown.appendChild(selectItem);
//     return categoryList;
//   });

// console.log(getCategory());
// formLocation.appendChild(categoryDropdown);

// closeModalButton.addEventListener("click", e => {
//   e.preventDefault();
//   const modalWindow = document.querySelector(".modal-overlay");
//   modalWindow.classList.toggle("open");
// });

// submitButton.addEventListener("click", e => {
//   e.preventDefault();
//   const selectOption = document.querySelector("select");
//   const modalWindow = document.querySelector(".modal-overlay");
//   modalWindow.classList.toggle("open");
//   console.log(selectOption.value);
//   fetch(
//     `https://api.chucknorris.io/jokes/random?category=${selectOption.value}`
//   )
//     .then(response => response.json())
//     .then(data => {
//       return (chuckSays.innerHTML = data.value);
//     });
// });

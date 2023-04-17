const menu = document.querySelectorAll("body > div > nav > ul > a");

menu.forEach((item) => {
  item.addEventListener("click", (event) => {
    menu.forEach((item) => item.classList.remove("active"));

    // add 'active' classs to the element that was clicked
    event.target.classList.add("active");
  });
});

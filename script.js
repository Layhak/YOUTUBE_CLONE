const menuIconButton = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]");

menuIconButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

//change body backgroundcolor  using javascript

//create class product

class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

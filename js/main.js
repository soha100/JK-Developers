// Toggle Menu
let icon = document.querySelector(".icon");
let list = document.querySelector(".list");

icon.addEventListener("click", function () {
  list.classList.toggle("toggle-menu");
});

// Services
let boxes = document.querySelectorAll(".box");
let subheadings = document.querySelectorAll(".box h2");
let spans = document.querySelectorAll(".dots span");

spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.classList.remove("actives");
    });

    subheadings.forEach((subheading) => {
      subheading.classList.remove("active");
    });

    spans.forEach((span) => {
      span.classList.remove("dot");
    });

    boxes[index].classList.add("actives");
    subheadings[index].classList.add("active");
    span.classList.add("dot");
    boxes[index].scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

//slider one

const sliderContainers = document.querySelectorAll(".slider .content");
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");

sliderContainers.forEach((item, i) => {
  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += 150;
  });

  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 150;
  });
});

// slider two
const productContainers = document.querySelectorAll(".customers");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

productContainers.forEach((ele, j) => {
  nxtBtn[j].addEventListener("click", () => {
    ele.scrollLeft += 150;
  });

  preBtn[j].addEventListener("click", () => {
    ele.scrollLeft -= 150;
  });
});

// stack
const menuCategories = document.querySelectorAll(".stack ul li");
const menuProducts = document.querySelectorAll(".stack .imgs .img");

menuCategories.forEach((category) => {
  category.addEventListener("click", () => {
    const valueAttr = category.getAttribute("data-filter");

    menuProducts.forEach((product) => {
      product.style.display = "none";

      if (product.getAttribute("data-filter") === valueAttr) {
        product.style.display = "flex";
      }
    });

    menuProducts.forEach((product) => {
      product.classList.remove("activity");
    });
    menuCategories.forEach((product) => {
      product.classList.add("activity");
    });

    menuCategories.forEach((category) => {
      category.classList.remove("act");
    });
    category.classList.add("act");
  });
});

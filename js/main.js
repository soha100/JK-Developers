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

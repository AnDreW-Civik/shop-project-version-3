let liked = document.querySelectorAll(".like");
let btnAdd = document.querySelectorAll(".btn-add-to-cart");
let productCountEl = document.querySelector(".products-count");

// product  likes

liked.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("liked");
    //this.style.background = "red";       // добавить стиль, без описания стиля в css

    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }                           // второй вариант решения
  })
);

// product counter

btnAdd.forEach((item) =>
  item.addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
  })
);

// modal

let btnMoreDetails = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

btnMoreDetails.forEach((item) => item.addEventListener("click", showModal));
btnClose.addEventListener("click", closeModal);

function showModal() {
  // modal.style.display = "block"; // можно и так, но менее приоритетный
  modal.classList.add("block"); // лучше этот вариант, более приоритетный
  modal.classList.remove("none");
}

function closeModal() {
  // modal.style.display = "none"; // можно и так, но менее приоритетный
  modal.classList.add("none"); // лучше этот вариант, более приоритетный
  modal.classList.remove("block");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// window.addEventListener("scroll", function (e) {
//   console.log(e.positionX);
// });

// let windows = document.documentElement.scrollTop;
// console.log(windows);

// let a = window.pageYOffset;
// console.log(a);

// window.onscroll = () => {
//   const hasScrolling = !(window.scrollY === 0);
//   // console.log({
//   //   hasScrolling: hasScrolling,
//   //   scrollY: Math.round(scrollY),
//   // });
//   if (scrollY >= 1200 && scrollY < 1300) {
//     showModal();
//   } else {
//     closeModal();
//   }
// };

let scroller = document.addEventListener(
  "scroll",
  function () {
    let scrolling = document.scrollY !== 0;
    scrolling = Math.round(scrollY);

    if (scrolling >= fifthPercent) {
      showModal();
    } else {
      closeModal();
    }
  }
  // { once: true }
);

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

let b = document.documentElement.clientHeight;

let fifthPercent = scrollHeight / 2;

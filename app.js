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

// let scroller = document.addEventListener(
//   "scroll",
//   function () {
//     let scrolling = document.scrollY !== 0;
//     scrolling = Math.round(scrollY);

//     if (scrolling >= fifthPercent) {
//       showModal();
//     } else {
//       closeModal();
//     }
//   }
//   // { once: true }
// );

// let scrollHeight = Math.max(
//   document.body.scrollHeight,
//   document.documentElement.scrollHeight,
//   document.body.offsetHeight,
//   document.documentElement.offsetHeight,
//   document.body.clientHeight,
//   document.documentElement.clientHeight
// );

// let b = document.documentElement.clientHeight;

// let fifthPercent = scrollHeight / 2;

function showModalByScroll() {
  if (window.pageYOffset >= document.body.scrollHeight / 2) {
    showModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

// change product quantity

// let decrementBtn = document.querySelectorAll(".decrement-button");
// let incrementBtn = document.querySelectorAll(".increment-button");
// let quantityInput = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;

// function toggleBtnState(count, decrementBtn, incrementBnt) {
//   decrementBtn.disabled = count <= minCount;
//   incrementBtn.disabled = count >= maxCount;
// }

// quantityInput.forEach((item, i) =>
//   toggleBtnState(item.value, decrementBtn[i], incrementBnt[i])
// );
// decrementBtn.forEach((item, i) =>
//   item.addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue - 1;
//     quantityInput[i].value = nextValue;
//     toggleBtnState(nextValue, item, incrementBnt[i]);
//   })
// );

// incrementBtn.forEach((item, i) =>
//   item.addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue + 1;
//     quantityInput[i].value = nextValue;
//     toggleBtnState(nextValue, decrementBtn[i], item);
//   })
// );

// let currentValue = +quantityInput;
// toggleBtnState(currentValue);

// slider slick

$(".slider-block").slick({
  dots: true,
});

// // Counter function constructor
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

// function Car(year, model, color) {
//   this.year = year;
//   this.model = model;
//   this.color = color;
// }

// let honda = new Car("2008", "civic", "gold");
// let audi = new Car("2016", "a4", "black");
// console.log(honda);
// console.log(audi);

// function Calculator(a, b) {
//   this.a = a;
//   this.b = b;
//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mult = function () {
//     return this.a * this.b;
//   };
// }

// let calc = new Calculator(10, 5);
// console.log(calc.sum());

function Counter(
  incrementBtn,
  decrementBtn,
  inputField,
  minCount = 1,
  maxCount = 5
) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleBtnState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
    let currentValue = +this.domRefs.inputField.value;
    let nextValue = currentValue + 1;
    this.domRefs.inputField.value = nextValue;
  };
  this.toggleBtnState();

  this.inputField = function () {
    this.domRefs.inputField.forEach((item, i) =>
      this.toggleBtnState(item[i].value, decrementBtn[i], incrementBnt[i])
    );
  };

  // this.increment = function () {
  //   let currentValue = +this.domRefs.inputField.value;
  //   let nextValue = currentValue + 1;
  //   this.domRefs.inputField.value = nextValue;
  //   this.toggleBtnState();
  // };

  // this.decrement = function () {
  //   let currentValue = +this.domRefs.inputField.value;
  //   let nextValue = currentValue - 1;
  //   this.domRefs.inputField.value = nextValue;
  //   this.toggleBtnState();
  // };

  this.increment = function () {
    this.domRefs.incrementBtn.forEach((item, i) =>
      item.addEventListener(
        "click",
        function () {
          let currentValue = +this.domRefs.inputField[i].value;
          let nextValue = currentValue + 1;
          this.domRefs.inputField.value = nextValue;
          this.toggleBtnState();
        },
        this.decrement.bind(this)
      )
    );
  };

  this.decrement = function () {
    this.domRefs.decrementBtn.forEach((item, i) =>
      item.addEventListener(
        "click",
        function decr() {
          let currentValue = +this.domRefs.inputField[i].value;
          let nextValue = currentValue - 1;
          this.domRefs.inputField.value = nextValue;
          this.toggleBtnState();
        },
        this.decrementBtn.bind(this)
      )
    );
  };
}

const counter = new Counter(incrementBtns, decrementBtns, quantityInput);
console.log(counter);

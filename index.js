let scrollToBottom = document.querySelector("#scroll-to-bottom");
let pageBottom = document.querySelector("#page-bottom");
console.log(scrollToBottom);
console.log(pageBottom);

window.addEventListener("load", (event) => {
  pageBottom.scrollIntoView();
  console.log(event.target);
  console.log("mmm");
});

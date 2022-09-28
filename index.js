window.addEventListener("load", (event) => {
  let scrollToBottom = document.querySelector("#scroll-to-bottom");
  let pageBottom = document.querySelector("#page-bottom");
  pageBottom.scrollIntoView();
  console.log(scrollToBottom);
  console.log(pageBottom);
  console.log(event.target);
  console.log("mmm");
});

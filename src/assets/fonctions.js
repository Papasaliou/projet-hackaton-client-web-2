function handleMenuOpen() {
  document
    .getElementById("sidenav")
    .setAttribute("style", "display:block;left:0;top:0;transition: 0.5s;");
  document
    .getElementById("content-body")
    .setAttribute("style","margin-left:20rem; margin-right:10rem;");

  document
    .getElementById("chat-sectiondiv")
    .setAttribute("style","max-width: 1050px;; margin-right:10rem;");

}


function handleMenuClose() {
  document
    .getElementById("sidenav")
    .setAttribute("style", "left:-400px;transition:0.5s;");
  document
    .getElementById("content-body")
    .setAttribute("style","margin-left:10rem; margin-right:10rem;");

  document
    .getElementById("chat-sectiondiv")
    .setAttribute("style","max-width: 1300px;; margin-right:10rem;");
}


// function activatebtnSubmit(even:KeyedWrite) {
//   const miInput = document.getElementById("icon-buttonSubmit");
//   miInput.addEventListener("even",function (e){
//     miInput.setAttribute("style","visibility:collapse");
//   });
// }

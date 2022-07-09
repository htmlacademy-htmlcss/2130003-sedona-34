let html = document.documentElement;
let scrollPosition = window.pageYOffset;
html.style.top = -scrollPosition + "px";
html.classList.add("hystmodal__opened")

html.classList.remove("hystmodal__opened");
window.scrollTo(0, scrollPosition);
html.style.top = "";

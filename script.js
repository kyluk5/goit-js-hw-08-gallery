import descriptionImg from "./gallery-items.js";
import { returnHtml } from "./returnHtml.js";

const gallery = document.querySelector(".gallery");
const allEl = descriptionImg.map((item) => returnHtml(item)).join("");
gallery.insertAdjacentHTML("beforeend", allEl);
// console.dir(gallery);
const lightbox = document.querySelector(".lightbox");
const lightbox__image = lightbox.querySelector(".lightbox__image");
const lightbox__button = lightbox.querySelector(".lightbox__button");

gallery.addEventListener("click", modalFn);
function modalFn(even) {
  even.preventDefault();
  if (even.target.nodeName !== "IMG") return;
  lightbox.classList.add("is-open");
  lightbox__image.src = even.target.dataset.source;
  lightbox__button.addEventListener("click", closeBox);
  function closeBox() {
    lightbox__image.src = "";
    lightbox.classList.remove("is-open");
  }
}

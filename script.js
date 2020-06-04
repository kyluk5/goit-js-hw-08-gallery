import descriptionImg from "./gallery-items.js";
import { returnHtml } from "./returnHtml.js";

const gallery = document.querySelector(".gallery");
const allEl = descriptionImg.map((item) => returnHtml(item)).join("");
gallery.insertAdjacentHTML("beforeend", allEl);
// console.dir(gallery);
const lightbox = document.querySelector(".lightbox");

gallery.addEventListener("click", modalFn);
function modalFn(even) {
  even.preventDefault();
  if (even.target.nodeName !== "IMG") return;
  lightbox.classList.add("is-open");
  //   const source = even.target.dataset.source;
  //   console.log(source);
  //   even.target.src = source;
}

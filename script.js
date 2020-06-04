import descriptionImg from "./gallery-items.js";
// console.log(gallery);
import { returnHtml } from "./returnHtml.js";
// console.log(returnHtml);

const gallery = document.querySelector(".gallery");
// console.log(gallery);

const allEl = descriptionImg.map((item) => returnHtml(item)).join("");
// console.log(allEl);
gallery.insertAdjacentHTML("beforeend", allEl);

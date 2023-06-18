import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");
const galleryImages = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" data-source="${image.original}" src="${image.preview}" alt="${image.description}" />
      </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryImages);
console.log(gallery);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />`
  );

  instance.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
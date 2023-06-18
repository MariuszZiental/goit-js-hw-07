import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const imgGallery = galleryItems
  .map(
    (image) => `<a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", imgGallery);

const instance = new SimpleLightbox(".gallery a", {
  showCounter: false,
  disableScroll: true,
  captionSelector: "self",
});

gallery.addEventListener("click", (evt) => {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance.open();

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});

const images = document.querySelectorAll(".gallery__image");
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

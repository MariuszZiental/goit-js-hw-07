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

const instance = new SimpleLightbox(".gallery a", {});

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") instance.close();
  };

  const lightbox = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleEscapeKey);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleEscapeKey);
      },
    }
  );

  instance.show();
});

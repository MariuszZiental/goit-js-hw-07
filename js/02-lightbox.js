// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const gallery = document.querySelector(".gallery");
// const addLiItem = document.createElement("li");
// const imgGallery = galleryItems
//   .map(
//     (image) => `<a class="gallery__item" href="${image.original}">
//   <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
// </a>`
//   )
//   .join("");

// gallery.insertAdjacentHTML("afterbegin", imgGallery);

// gallery.addEventListener("click", imgOnClick);

// function imgOnClick(evt) {
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = new SimpleLightBox(
//     `<img src="${evt.target.dataset.source}" width="800" height="600">`
//   );
//   instance.show();

//   const visible = instance.visible();
//   if (visible === true) {
//     gallery.addEventListener("keydown", function (event) {
//       if (event.key === "Escape") {
//         instance.close();
//       }
//     });
//   }
// }

// const blokker = document.querySelectorAll(".gallery__image");
// for (const image of blokker) {
//   image.addEventListener("click", (event) => {
//     event.preventDefault();
//   });
// }





import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const addLiItem = document.createElement("li");
const imgGallery = galleryItems
  .map(
    (image) => `<a class="gallery__item" href="${image.original}">
   <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
 </a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", imgGallery);

gallery.addEventListener("click", imgOnClick);

function imgOnClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

const blokker = document.querySelectorAll(".gallery__image");
for (const image of blokker) {
  image.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
console.log(galleryItems);

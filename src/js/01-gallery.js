import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsListEl = document.querySelector('.gallery');


const completedGallery = galleryItems
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    })
    .join("");

galleryItemsListEl.insertAdjacentHTML('beforeend', completedGallery);

var lightbox = new SimpleLightbox('.gallery a', { captions:	true, captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });


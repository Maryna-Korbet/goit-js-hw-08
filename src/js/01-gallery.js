// 1. Add the SimpleLightbox library as a project dependency using npm (the CDN link from your past work is no longer needed).
// 2. Use your JavaScript code from the previous homework, but refactor it given that the library was installed via npm (import/export syntax).

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', markupGallery(galleryItems));

function markupGallery(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__link"
                    href=${original}>
                        <img class="gallery__image"
                        src=${preview}
                        alt=${description} 
                        />
                </a>`
    })
        .join("");
}

new SimpleLightbox('.gallery a');



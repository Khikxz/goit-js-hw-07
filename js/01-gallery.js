import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
var i;

for (let child = gallery.firstElementChild, i = 0; child !== null; child = child.nextElementSibling, i++){
    const link = child.firstElementChild;
    const image = link.firstElementChild;
    link.href = galleryItems[i].original;
    image.src = galleryItems[i].preview;
    image.dataset.source = galleryItems[i].original;
    image.alt = galleryItems[i].description;
}

gallery.addEventListener("click", event => {
    event.preventDefault();
    const instance = basicLightbox.create(`
        <img 
            class = "preview" 
            src = "${event.target.dataset.source}"
        />
    `);
    instance.show();
});

console.log(galleryItems);



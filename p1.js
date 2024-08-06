document.addEventListener('DOMContentLoaded', () => {
    const screenContent = document.getElementById('screenContent');
    const interfaceImages = document.querySelectorAll('.interface-image');
    const imageWidth = interfaceImages[0].offsetWidth; // Ancho de una imagen
    const imageCount = interfaceImages.length; // Cantidad de imágenes
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Ajusta la velocidad del desplazamiento

    // Clonamos las imágenes para crear un bucle continuo
    screenContent.innerHTML += screenContent.innerHTML;

    function scrollImages() {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= imageWidth * imageCount) {
            scrollAmount = 0; // Reinicia el desplazamiento al principio
        }
        screenContent.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollImages); // Llama a la función de animación nuevamente
    }

    scrollImages();
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

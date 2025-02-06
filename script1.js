// Índice de la imagen actual (básicamente cuál imagen se está mostrando)
let currentIndex = 0;

// Función para mostrar la imagen correspondiente
function showImage(index) {
    // Seleccionamos todas las imágenes dentro del carrusel
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length; // Cantidad total de imágenes

    // Si nos pasamos del último índice, volvemos al inicio
    if (index >= totalImages) {
        currentIndex = 0;
    }
    // Si nos pasamos del primer índice, saltamos a la última imagen
    else if (index < 0) {
        currentIndex = totalImages - 1;
    }
    // Si estamos dentro del rango, simplemente actualizamos el índice
    else {
        currentIndex = index;
    }

    // Calculamos cuánto debemos mover el carrusel (básicamente, deslizar las imágenes)
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}


// Esperamos a que la página cargue antes de mostrar la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex); // Mostramos la imagen inicial
});

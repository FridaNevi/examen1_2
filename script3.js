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

// Función para ir a la imagen anterior
function prevImage() {
    showImage(currentIndex - 1); // Llamamos a la función con el índice anterior
}

// Función para ir a la imagen siguiente
function nextImage() {
    showImage(currentIndex + 1); // Llamamos a la función con el siguiente índice
}
// Detectar cuando el usuario presiona una tecla
document.addEventListener('keydown', (event) => {
    // Si presiona la flecha izquierda, vamos a la imagen anterior
    if (event.key === 'ArrowLeft') {
        prevImage();
    }
    // Si presiona la flecha derecha, avanzamos a la siguiente imagen
    else if (event.key === 'ArrowRight') {
        nextImage();
    }
});
// Esperamos a que la página cargue antes de mostrar la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex); // Mostramos la imagen inicial
});

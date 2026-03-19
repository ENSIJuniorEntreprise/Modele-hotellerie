window.onload = function() {
    const container = document.getElementById('slide-container');
    const width = 1360; // La largeur de votre .slider

    if (!container) return; // Sécurité si l'ID est mal écrit

    function moveSlide() {
        // 1. On active la transition pour le mouvement
        container.style.transition = "transform 0.8s ease-in-out";
        container.style.transform = `translateX(-${width}px)`;

        // 2. À la fin du mouvement (800ms)
        setTimeout(() => {
            // On déplace la première image à la fin
            container.appendChild(container.firstElementChild);
            
            // On coupe la transition pour revenir au point 0 instantanément
            container.style.transition = "none";
            container.style.transform = "translateX(0)";
        }, 800);
    }

    // On lance la fonction toutes les 3.8 secondes (3s pause + 0.8s mouvement)
    setInterval(moveSlide, 3800);
};
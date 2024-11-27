// Función para manejar la descarga del PDF
document.getElementById("download-btn").addEventListener("click", function () {
    // Crear un enlace dinámico para descargar el archivo
    const link = document.createElement("a");
    link.href = "assets/Damaris_MoctezumaChimal_CV-3.pdf"; // Reemplaza con la ruta real de tu archivo PDF
    link.download = "Damaris_MoctezumaChimal_CV-3.pdf"; // Nombre sugerido para el archivo descargado
    link.click(); // Simula un clic para iniciar la descarga
  });
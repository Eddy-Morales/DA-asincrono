// Simulamos una API que devuelve productos con una promesa
function obtenerProductosSimulados() {
    const productos = [
      { nombre: "Leche Entera", precio: 0.89 },
      { nombre: "Pan Integral", precio: 1.15 },
      { nombre: "Huevos x12", precio: 2.40 },
    ];
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 5000); 
    });
  }
  
  // Función asincrónica que usa await para obtener los productos
  async function mostrarProductos() {
    try {
      const productos = await obtenerProductosSimulados();
      console.log("Productos obtenidos:");
      productos.forEach(p => {
        console.log(`- ${p.nombre}: $${p.precio.toFixed(2)}`);
      });
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  }
  
  mostrarProductos();
  
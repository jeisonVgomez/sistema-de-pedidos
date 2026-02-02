const form = document.getElementById('configForm');
const inputMesas = document.getElementById('cantidadMesas');

// Si ya hay mesas configuradas, no mostramos esta pantalla
document.addEventListener('DOMContentLoaded', () => {
  const mesasGuardadas = localStorage.getItem('cantidadMesas');

  if (mesasGuardadas) {
    alert(`Mesas ya configuradas: ${mesasGuardadas}`);
    // Aquí luego redirigiremos al panel principal
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cantidad = parseInt(inputMesas.value);

  if (cantidad <= 0 || isNaN(cantidad)) {
    alert('Por favor ingresa una cantidad válida de mesas');
    return;
  }

  localStorage.setItem('cantidadMesas', cantidad);

  alert('Configuración guardada correctamente');

  
});

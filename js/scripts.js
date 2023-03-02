const acordeonItems = document.querySelectorAll('.acordeon-item');

acordeonItems.forEach(acordeonItem => {
  const btn = acordeonItem.querySelector('.acordeon-btn');

  btn.addEventListener('click', () => {
    acordeonItem.classList.toggle('activo');
    acordeonItems.forEach(item => {
      if (item !== acordeonItem) {
        item.classList.remove('activo');
      }
    });
  });
});

// obtener la referencia al elemento select
const colorSelect = document.getElementById("colorSelect");

// agregar un evento para el cambio de color
colorSelect.addEventListener("change", function() {
  // obtener el valor seleccionado del select
  const selectedColor = this.value;

  // actualizar el color de fondo del elemento con id "home"
  const home = document.getElementById("home");
  home.style.backgroundColor = selectedColor;
});

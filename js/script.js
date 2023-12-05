//inicio switch-boton


const toggleTheme = document.getElementById('toggleTheme');
const currentTheme = localStorage.getItem('theme');

// Función para establecer el tema según la preferencia almacenada
const setTheme = (theme) => {
  if (theme === 'dark-theme') {
    document.body.classList.add('dark-theme');
    toggleTheme.checked = true; // Marcamos el switch si es tema oscuro
  } else {
    document.body.classList.add('light-theme');
    toggleTheme.checked = false; // Desmarcamos el switch si es tema claro
  }
};

// Verificar y establecer el tema actual
if (currentTheme) {
  setTheme(currentTheme);
} else {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkScheme) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    toggleTheme.checked = true;
  } else {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

// Cambiar el tema al hacer clic en el botón switch
toggleTheme.addEventListener('change', function () {
  if (toggleTheme.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});



//fin switch-boton

//Menu 
function menu() {
  _toggle.onclick = () => {
      _items.classList.toggle("open")
      _toggle.classList.toggle("close")
  }

}
function moverseA(id) {
  location.href = "#" + id;
  _items.classList.toggle("open")
  _toggle.classList.toggle("close")




}
//menu fin


//buscar inicio

function filterButtons() {
  // Obtener el texto del input de búsqueda
  var input = document.getElementById('searchInput').value.toUpperCase();
  // Obtener todos los botones
  var buttons = document.getElementById('link').getElementsByTagName('button');

  // Iterar sobre los botones y mostrar/ocultar según el texto de búsqueda
  for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var buttonText = button.textContent || button.innerText;

      if (buttonText.toUpperCase().indexOf(input) > -1) {
          button.style.display = "";
      } else {
          button.style.display = "none";
      }
  }
}
//buscar fin
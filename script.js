/* =============================
   SIMULACIÓN DE LOGIN Y ROLES
   ============================= */

// Datos simulados (en el futuro vendrán de la base de datos)
const usuarios = {
  redactor: { password: "1234", rol: "redactor" },
  supervisora: { password: "1234", rol: "supervisora" },
  admin: { password: "1234", rol: "admin" }
};

// Referencias a elementos del DOM
const loginSection = document.getElementById("login-section");
const dashboard = document.getElementById("dashboard");
const roleTitle = document.getElementById("role-title");
const sidebar = document.getElementById("sidebar");
const menuList = document.getElementById("menu-list");

// Botones y entradas
document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("logout-btn").addEventListener("click", logout);

// Función de inicio de sesión simulada
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (usuarios[username] && usuarios[username].password === password) {
    const rol = usuarios[username].rol;
    mostrarPanelPorRol(rol);
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

// Cierra sesión y vuelve al login
function logout() {
  dashboard.classList.add("hidden");
  loginSection.classList.add("active");
  loginSection.style.display = "flex";
}

// Cambia el contenido y color según el rol
function mostrarPanelPorRol(rol) {
  // Oculta login
  dashboard.classList.remove("hidden");
  loginSection.style.display = "none";
  

  // Configura color y nombre del panel
  let colorClase = "";
  switch (rol) {
    case "redactor":
      colorClase = "redactor-theme";
      roleTitle.textContent = "Panel del Redactor";
      crearMenu([]);
      break;

    case "supervisora":
      colorClase = "supervisora-theme";
      roleTitle.textContent = "Panel de la Supervisora";
      crearMenu([
        { id: "panel-supervisora", icon: "fa-solid fa-check-to-slot", texto: "Aprobar Reportes" }
      ]);
      break;

    case "admin":
      colorClase = "admin-theme";
      roleTitle.textContent = "Gestión de Usuarios";
      crearMenu([
        { id: "gestion-usuarios", icon: "fa-solid fa-users-gear", texto: "Usuarios" }
      ]);
      break;
  }

  // Cambia color del sidebar
  sidebar.className = colorClase;

  // Muestra el primer panel del menú
  const primerPanel = document.querySelector(`#${menuList.firstChild.dataset.id}`);
  mostrarPanel(primerPanel.id);
}

/* =============================
   NAVEGACIÓN DE PANELES
   ============================= */
function crearMenu(items) {
  menuList.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="${item.icon}"></i>${item.texto}`;
    li.dataset.id = item.id;
    li.addEventListener("click", () => mostrarPanel(item.id));
    menuList.appendChild(li);
  });
}

// Muestra el panel seleccionado
function mostrarPanel(id) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* =============================
   FUTURA CONEXIÓN CON BD
   =============================
   En esta sección se podrían agregar funciones para:
   - Validar usuarios contra la base de datos
   - Cargar reportes o usuarios reales
   - Guardar cambios y formularios
   Por ahora, todo se simula en memoria.
*/

/* ======== MOSTRAR FECHA Y HORA ACTUAL ======== */
function actualizarFechaHora() {
  const ahora = new Date();
  const opciones = { 
    year: "numeric", month: "2-digit", day: "2-digit", 
    hour: "2-digit", minute: "2-digit", second: "2-digit" 
  };
  document.getElementById("current-datetime").textContent = ahora.toLocaleString("es-MX", opciones);
}
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();


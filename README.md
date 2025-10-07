# Orbit

Bienvenido al proyecto Orbit — una interfaz sencilla de tablero para una red de noticias que incluye un formulario de login y paneles por rol (Redactor, Supervisora, Admin).

Este repositorio contiene una maqueta front-end (HTML/CSS/JS) pensada para probar la lógica de inicio de sesión y la visualización de diferentes paneles según el rol del usuario.

## Características principales
- Formulario de login simulado con credenciales en front-end (para pruebas).
- Paneles separados por rol: Redactor, Supervisora y Administración.
- Sidebar y menú dinámico según el rol.
- Login como overlay (aparece encima del dashboard y evita que el contenido de fondo sea visible hasta iniciar sesión).
- Reloj dinámico en el panel del redactor.

## Credenciales de prueba
Usa estas credenciales para probar el comportamiento de cada rol:

- Usuario: `redactor` / Contraseña: `1234` (muestra el panel del Redactor)
- Usuario: `supervisora` / Contraseña: `1234` (muestra el panel de la Supervisora)
- Usuario: `admin` / Contraseña: `1234` (muestra la Gestión de Usuarios)

> Nota: las credenciales están incluidas en `script.js` solo para demostración local. No usar en producción.

## Cómo ejecutar (rápido)
1. Abrir el archivo `index.html` en tu navegador (doble clic o con Live Server en VS Code).
2. Verás el formulario de login como overlay. Introduce una de las credenciales de prueba y pulsa `Entrar`.
3. El login se ocultará y se mostrará únicamente el panel correspondiente al rol.

Si quieres recargar estilos/JS y no ves los cambios, haz un hard refresh (Ctrl+F5) o limpia la caché del navegador.

## Estructura del proyecto

- `index.html` — Estructura principal y secciones de cada panel.
- `styles.css` — Estilos: el `#login-section` se hizo overlay (position: fixed) para que no se muestre el contenido de fondo antes del login.
- `script.js` — Lógica de login, control de roles y visibilidad de paneles. Contiene las credenciales de prueba.

## Notas sobre el comportamiento del login
- Antes: el panel del redactor estaba marcado como visible por defecto (`class="active"`) y por eso se veía aunque aún no se hubiera iniciado sesión.
- Cambios recientes: se quitó la clase `active` por defecto del `panel-redactor` y se implementó que el login sea un overlay fijo. Además, `script.js` maneja `document.body.style.overflow` para evitar scroll del fondo mientras el login está activo.

## Siguientes pasos sugeridos
- Mover la autenticación a un backend real y no mantener credenciales en el front-end.
- Añadir validaciones más robustas y mensajes de error en el formulario.
- Añadir pruebas unitarias y/o tests end-to-end si el proyecto crece.
- Mejorar accesibilidad (focus management, `aria-hidden` en el dashboard mientras el login está visible).


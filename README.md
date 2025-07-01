# Fortunara – Sección interactiva de tours en cuadraciclo 🏞️🛞

Este proyecto fue desarrollado como parte de una prueba técnica para Fortunara.

## 🧠 Descripción

La aplicación simula una sección informativa para una empresa que ofrece tours en cuadraciclo (quads). El objetivo es permitir al usuario explorar visualmente las distintas experiencias disponibles de forma interactiva y atractiva.

En el centro se encuentra una **llanta principal giratoria** que reacciona al arrastre del cursor, y alrededor giran varias tarjetas representando las diferentes opciones de tour. Esta animación busca reflejar una interfaz dinámica, moderna y responsiva que invite a la exploración.

El componente fue inspirado en el video de referencia proporcionado, replicando la interacción rotativa de los elementos. Aunque no se logró una copia exacta del diseño, se priorizó el enfoque visual y funcional solicitado.

Incluye:

- React + Vite para desarrollo rápido.
- CSS personalizado para estilos.
- Estructura modular y limpia.

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio o descarga proyecto desde el enlace.
   ```bash
   git clone https://github.com/MurilloSteven09/fortunara.git

2. Instala las dependencias:
    npm install

3. Inicia el entorno de desarrollo:
    npm run dev

4. Abre tu navegador:
    http://localhost:5173
    💡 También es posible acceder desde otro dispositivo conectado a la misma red local, gracias a la configuración del servidor (host: '0.0.0.0') en vite.config.js.

🛠️ Tecnologías utilizadas:
    React
    Vite
    CSS

📁 Estructura del proyecto:
    /src
    ├── assets/
    ├── images/
    └── App.jsx

📄 Notas
Se priorizó el diseño responsivo y la interacción visual.
El comportamiento rotativo fue implementado con lógica de ángulos en base al movimiento del cursor.
El repositorio no incluye node_modules por buenas prácticas; asegúrate de correr npm install para ejecutarlo localmente.
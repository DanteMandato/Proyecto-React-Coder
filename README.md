
# Proyecto-React-Coder

🌿 Tienda de Cosméticos Naturales
Bienvenido a la Tienda de Cosméticos Naturales, un proyecto construido con React, diseñado para ofrecer productos de cosmética natural de alta calidad, completamente respetuosos con el medio ambiente y libres de químicos agresivos.

🚀 Demo
Puedes ver la versión en vivo de este proyecto en: Enlace a la tienda desplegada en GitHub Pages.

🛠️ Tecnologías Utilizadas
React: Librería principal para construir la interfaz de usuario.
React Router DOM: Para gestionar la navegación entre las distintas páginas.
Firebase: Base de datos para almacenar los productos y la información de los usuarios.
SCSS: Preprocesador de CSS para gestionar estilos con mayor flexibilidad.
GitHub Pages: Plataforma de despliegue estática.
📦 Funcionalidades
Catálogo de productos: Puedes explorar una amplia gama de productos naturales, como shampoos sólidos, desodorantes, serums y más.
Carrito de compras: Añade productos al carrito, ajusta las cantidades y visualiza el total antes de proceder con la compra.
Página de detalle de producto: Cada producto tiene una página detallada con información específica.
Formulario de contacto: Los usuarios pueden enviarnos sus consultas a través de un formulario.
Talleres: Inscríbete en talleres para aprender a crear productos de cosmética natural.
🚧 Instalación y Configuración
Si deseas correr este proyecto de manera local, sigue los siguientes pasos:

1. Clona este repositorio: git clone https://github.com/tu-usuario/tienda-cosmeticos.git

2. Entra en la carpeta del proyecto: cd tienda-cosmeticos

3. Instala las dependencias: npm install

4. Crea un archivo .env en la raíz del proyecto con tus credenciales de Firebase: 
REACT_APP_FIREBASE_API_KEY=tu-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=tu-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=tu-app-id

5. Corre el proyecto: npm run dev

6. Abre http://localhost:5173 para ver la aplicación en tu navegador.


🛒 Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
src/
│
├── components/        # Componentes reutilizables como el Carrito y los Items.
├── context/           # Contextos globales como el carrito de compras.
├── pages/             # Páginas principales (Home, Detalle, Contacto, Talleres, Carrito).
├── styles/            # Estilos globales y específicos usando SCSS.
├── data/              # JSON o servicios externos (Firebase) para obtener productos.
├── App.jsx            # Componente principal de la aplicación.
├── index.jsx          # Punto de entrada del proyecto.
└── firebase.js        # Configuración e inicialización de Firebase.



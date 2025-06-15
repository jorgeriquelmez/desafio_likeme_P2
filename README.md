# &#128248; Like Me &#128248; (Desafío Full Stack)

![foto](https://github.com/jorgeriquelmez/imagenes/blob/main/inicio_likeme.png)

Este repositorio contiene una aplicación web Full Stack, desarrollada como parte de un desafío, que permite a los usuarios ver y gestionar publicaciones (`posts`), incluyendo la funcionalidad de "darle like" y eliminar publicaciones. La aplicación se divide en un frontend (React/Vite) y un backend (Node.js/Express con PostgreSQL).

---

## &#x1F680; Características

- **Publicaciones (Posts):** Visualiza una lista de publicaciones existentes.
- **Creación de Posts:** Agrega nuevas publicaciones con título, descripción y una imagen (URL).
- **Likes:** Da "me gusta" a las publicaciones, incrementando un contador.
- **Eliminación de Posts:** Elimina publicaciones existentes.
- **Actualización de Posts:** Permite modificar los detalles de una publicación existente.
- **Base de Datos PostgreSQL:** Almacenamiento persistente y robusto de las publicaciones y sus "likes".

---

## &#x1F4BB; Tecnologías Utilizadas

### Backend (API REST)

- **Node.js:** Entorno de ejecución JavaScript.
- **Express.js:** Framework web para Node.js, utilizado para construir la API REST.
- **`pg` (Node-PostgreSQL):** Driver para interactuar directamente con bases de datos PostgreSQL.
- **`dotenv`:** Para gestionar variables de entorno (`.env`).
- **`cors`:** Middleware para habilitar Cross-Origin Resource Sharing.
- **`uuid`:** Para generar IDs únicos para las publicaciones.
- **Base de Datos:** PostgreSQL.

### Frontend (Interfaz de Usuario)

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite:** Herramienta de compilación para proyectos de frontend (asumido por puerto 5173).
- **Axios:** Cliente HTTP basado en promesas para hacer peticiones al backend.

---

## &#x1F4C2; Estructura del Proyecto

El repositorio está dividido en dos partes principales, cada una con su propia configuración y dependencias:

- **`backend/`:** Corresponde a la API REST (Node.js/Express), que interactúa con PostgreSQL.
- **`frontend/`:** Corresponde a la interfaz de usuario (React/Vite).

.
├── backend/ # Contiene la lógica del servidor API
│ ├── config/
│ │ └── config.js # Configuración de conexión a la base de datos
│ ├── controllers/
│ │ └── postController.js # Lógica de los controladores (GET, POST, PUT, DELETE)
│ ├── models/
│ │ └── postModel.js # Lógica de interacción con la base de datos
│ ├── routes/
│ │ └── postRoutes.js # Definición de las rutas de la API
│ ├── .env.example # Ejemplo de variables de entorno para el backend
│ ├── package.json # Dependencias y scripts del backend
│ └── server.js # Punto de entrada del servidor Express
├── frontend/ # Contiene la aplicación cliente
│ ├── public/
│ ├── src/
│ │ ├── components/ # Componentes reutilizables de React
│ │ ├── App.js # Componente principal de la aplicación React
│ │ └── main.jsx # Punto de entrada de la aplicación React
│ ├── .env.example # Ejemplo de variables de entorno para el frontend
│ ├── package.json # Dependencias y scripts del frontend
│ └── index.html # Archivo HTML principal de la aplicación
├── .gitignore # Reglas para ignorar archivos en Git
├── package.json # Dependencias y scripts generales del proyecto (si aplica, en la raíz)
└── README.md # Este archivo de documentación

---

## &#x1F6E0;&#xFE0F; Configuración y Ejecución

Sigue estos pasos para poner la aplicación en marcha.

### 1. Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/es/) (versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/get-npm) (viene con Node.js) o [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [PostgreSQL](https://www.postgresql.org/download/) (servidor de base de datos)

### 2. Configuración de la Base de Datos

1.  Abre tu cliente de PostgreSQL (pgAdmin, psql, DBeaver, etc.).
2.  Crea una nueva base de datos. Puedes llamarla `likeme_db` (o el nombre que prefieras).
3.  Ejecuta la siguiente sentencia SQL para crear la tabla `posts`:

    ```sql
    CREATE TABLE posts (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(25) NOT NULL,
        img VARCHAR(1000) NOT NULL,
        descripcion VARCHAR(255) NOT NULL,
        likes INT DEFAULT 0
    );
    ```

    _(Nota: Se agregó `PRIMARY KEY` a `id` y `NOT NULL`/`DEFAULT 0` para `titulo`, `img`, `descripcion` y `likes` para mejorar la robustez de la base de datos)._

### 3. Configuración del Backend

1.  Navega a la carpeta `backend/` en tu terminal:
    ```bash
    cd backend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```
3.  Crea un archivo `.env` en la raíz de la carpeta `backend/` con tus credenciales de PostgreSQL:
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=tu_usuario_postgres
    DB_PASSWORD=tu_contraseña_postgres
    DB_NAME=likeme_db
    PORT=5000 # Puerto donde correrá el backend
    ```
    _(Asegúrate de reemplazar los valores con tu propia configuración de PostgreSQL)._
4.  Inicia el servidor backend:
    ```bash
    node --watch server.js
    # o si tienes un script `start` en package.json:
    # npm start
    ```
    El servidor se ejecutará en `http://localhost:3000`. Verás un mensaje en la consola que indica la conexión exitosa a la base de datos.

### 4. Configuración del Frontend

1.  Abre una **nueva terminal** y navega a la carpeta `frontend/`:
    ```bash
    cd frontend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```
3.  Crea un archivo `.env` en la raíz de la carpeta `frontend/` para apuntar a tu backend:
    ```
    VITE_API_BASE_URL=http://localhost:5173
    ```
    _(Nota: Si en `backend/server.js` tienes `app.use('/posts', postRoutes);`, entonces `VITE_API_BASE_URL` debe ser `http://localhost:5173/posts`)._
4.  Inicia la aplicación React:
    ```bash
    npm run dev
    # o
    yarn dev
    ```
    La aplicación se abrirá en tu navegador en `http://localhost:5173`.

---

## &#x1F3C3;&#x200D;&#x2642;&#xFE0F; Uso

Una vez que ambos servidores (backend en `http://localhost:3000` y frontend en `http://localhost:5173`) estén corriendo:

1.  Abre tu navegador y ve a `http://localhost:5173`.
2.  Verás la interfaz de la aplicación "Like Me".
3.  Utiliza el formulario de la izquierda para crear nuevas publicaciones.
4.  Las publicaciones aparecerán en la lista de la derecha.
5.  Puedes hacer clic en el botón de "like" para incrementar los likes de una publicación.
6.  Utiliza el botón de eliminar para borrar publicaciones.

### Endpoints de la API (Backend)

Puedes interactuar con los siguientes endpoints utilizando herramientas como Thunder Client, Postman o Insomnia:

- **`GET /posts`**: Obtener todas las publicaciones.

  - **Respuesta Exitosa (Ejemplo):** `[{"id": 1, "titulo": "Mi Post", "img": "url-img.jpg", "descripcion": "Contenido", "likes": 5}]`

- **`POST /posts`**: Crear una nueva publicación.

  - **Método:** `POST`
  - **Body (JSON) Requerido:**
    ```json
    {
      "titulo": "Título de la publicación",
      "url": "[https://url-de-la-imagen.jpg](https://url-de-la-imagen.jpg)",
      "descripcion": "Descripción del post"
    }
    ```
  - **Respuesta Exitosa (Ejemplo):** `{"id": 2, "titulo": "Título de la publicación", "img": "https://url-de-la-imagen.jpg", "descripcion": "Descripción del post", "likes": 0}`

- **`PUT /posts/like/:id`**: **Incrementar el contador de "likes"** para una publicación específica.

  - **Método:** `PUT`
  - **URL:** `http://localhost:3000/posts/like/ID_DEL_POST` (ej. `http://localhost:3000/posts/like/6`)
  - **Body:** No requiere un cuerpo de petición.
  - **Respuesta Exitosa (Ejemplo):** Devuelve la publicación actualizada con el nuevo conteo de likes.

- **`PUT /posts/:id`**: **Actualizar una publicación existente** completamente (modifica título, imagen, descripción y likes).

  - **Método:** `PUT`
  - **URL:** `http://localhost:5000/posts/ID_DEL_POST`
  - **Body (JSON) Requerido:**
    ```json
    {
      "titulo": "Nuevo Título",
      "img": "[https://nueva-url-imagen.jpg](https://nueva-url-imagen.jpg)",
      "descripcion": "Nueva descripción",
      "likes": 5 // Envía el valor completo de likes
    }
    ```
  - **Respuesta Exitosa (Ejemplo):** Devuelve la publicación con los campos actualizados.

- **`DELETE /posts/:id`**: Eliminar una publicación por su ID.
  - **Método:** `DELETE`
  - **URL:** `http://localhost:3000/posts/ID_DEL_POST`
  - **Body:** No requiere un cuerpo de petición.
  - **Respuesta Exitosa (Ejemplo):** `{ "message": "Publicación eliminada correctamente" }`

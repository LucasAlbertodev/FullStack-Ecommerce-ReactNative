# 🛒 FullStack Ecommerce API – React Native + Node + PostgreSQL

API robusta y escalable desarrollada para una aplicación de comercio electrónico, construida con las mejores prácticas de desarrollo moderno. Diseñada para integrarse perfectamente con un frontend móvil en React Native.

---

## 🚀 Características Principales

- ✅ **Autenticación segura** con JWT y middleware personalizado
- 🔐 **Registro e inicio de sesión** de usuarios con encriptación de contraseñas (`bcryptjs`)
- 📦 **Gestión de productos**, usuarios y pedidos
- 🧠 **ORM Drizzle**: consultas SQL type-safe y altamente optimizadas
- 🐘 **PostgreSQL + Docker** para base de datos persistente y entornos consistentes
- 📱 **Frontend conectado**: diseñado para consumir desde apps React Native
- 🌐 API RESTful organizada por controladores y rutas limpias
- 🧪 Pruebas y estructura lista para escalar

---

## 🛠️ Tecnologías Utilizadas

| Tecnología     | Rol |
|----------------|-----|
| **Node.js** + **Express** | Backend / Servidor |
| **TypeScript** | Tipado estático y robusto |
| **JWT**        | Autenticación segura |
| **Drizzle ORM** | Interacción con PostgreSQL |
| **PostgreSQL** | Base de datos |
| **Docker**     | Contenedores y entorno aislado |
| **React Native** | Frontend móvil (proyecto asociado) |


## 🧪 Instalación y Uso Local

1. **Clona el repositorio**
```bash
git clone https://github.com/LucasAlbertodev/FullStack-Ecommerce-ReactNative.git
cd FullStack-Ecommerce-ReactNative

Configura las variables de entorno
Crea un archivo .env con:
DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce
JWT_SECRET=tu_secreto
PORT=3000

Levanta PostgreSQL con Docker
docker-compose up -d

instala dependencias y corre el servidor
npm install
npm run dev

# Prueba Técnica FrontEnd - E-commerce (React)

## Desarrollador
| Contacto | Información |
| :--- | :--- |
| **Nombre** | Daniel Sebastian Calzada Guerrero |
| **LinkedIn** | https://www.linkedin.com/in/danielscalzadag/ |
| **Email** | calzada.dsg@gmail.com |
| **Teléfono** | + 52 55 4863 8608 |

---

## Resumen del Proyecto

Solución a la prueba técnica para la vacante Desarrollador Front End/Diseñador UX/UI. Esta es una aplicación de E-commerce de una sola página (SPA) desarrollada con **React.js** que consume la FakeStore API, poniendo un fuerte énfasis en la **arquitectura modular**, las **buenas prácticas de React Hooks** y una experiencia de usuario (UX) limpia.

### Stack y Arquitectura

* **Core:** React 18 + Vite (Entorno de desarrollo ultra rápido).
* **Enrutamiento:** React Router DOM v6.
* **Estado Global:** **Context API** (Gestión eficiente y centralizada del carrito).
* **Estilos:** CSS3 Nativo con Arquitectura de Variables y diseño totalmente **Responsivo**.
* **Consumo de API:** Fetch API nativo implementado mediante **Custom Hooks**.

---

## Buenas Prácticas y Calidad de Código

Esta sección demuestra un entendimiento completo de la arquitectura de componentes de React:

* **Separación de Intereses (SoC):** La lógica de datos (`fetch`, estados de carga/error) reside en hooks personalizados (`/hooks`), manteniendo los componentes de la interfaz de usuario puramente declarativos.
* **Gestión Asíncrona Avanzada:** Implementación de **`AbortController`** en los hooks de Fetch (`useProductById`, `useProducts`) para prevenir *Race Conditions* (condiciones de carrera) y fugas de memoria al navegar entre vistas.
* **Manejo de Estados de Fetch:** Uso del patrón `loading`/`error`/`data` completo con bloques `try/catch/finally` para un manejo de errores robusto.
* **Validación de Contexto:** El hook `useCart` tiene una validación de seguridad ("Fail Fast") que previene errores crípticos si el hook se usa fuera del `CartProvider`.

---

##  Funcionalidades y Requisitos (MVP)

### 1. Listado de Productos (Home)

* **Listado de Productos:** Productos consumidos desde la API.
* **Componente ProductCard:** 
  * Imagen del producto
  * Título 
  * Precio
  * Añadir al Carrito
* **Filtros:** Componente `CategoryFilter` funcional con feedback visual activo.
* **Manejo de Estados:** Spinners de carga y mensajes de error.
* **Errores:** Mostrando un mensaje al usuario
* **Diseño:** Hero Section con fondo de gradiente minimalista, centrado y responsivo.

### 2. Detalle de Producto

* **Ruta Dinámica:** Página de detalle (`/product/:id`).
* **Información:** 
  * Imagen
  * Descripción completa
* **Acción:** Botón "Añadir al carrito" funcional.

### 3. Carrito de Compras

* **Implementación:** Uso del Context API para manejar el estado del carrito.
* **Lógica:** Adición, eliminación, control de cantidad (+ / -) y cálculo automático de totales.
* **UX:** Notificaciones "Toast" emergentes al agregar productos y diseño de resumen de pedido "Sticky".

---

## Estructura del Proyecto

El código sigue una estructura modular para asegurar la escalabilidad y mantenibilidad:

```text
src/
├── components/   # UI Reutilizable (CategoryFilter, ProductCard, Navbar, Loader, Toast)
├── context/      # Configuración del Estado Global (CartContext, CartProvider)
├── hooks/        # Lógica de Dominio y Fetching (useProducts, useProductById)
├── pages/        # Vistas principales (Home, ProductDetail, Cart)
└── index.css     # Sistema de diseño centralizado (Variables, Reset, Layouts, Responsive)
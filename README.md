Prueba Tecnica FrontEnd - React

Desarrollado por: Daniel Sebastian Calzada Guerrero 
Contacto: calzada.dsg@gmail.com
Telefono: + 52 55 4863 8608
LinkedIn: [(https://www.linkedin.com/in/danielscalzadag/]*

Solución a la prueba técnica para la vacante Desarrollador Front End/Diseñador UX/UI. Esta aplicación es un E-commerce SPA desarrollado con **React.js** que consume la FakeStore API, enfocándose en la arquitectura limpia, UX moderna y buenas prácticas de desarrollo.

* **Core:** React 18 + Vite (Entorno de desarrollo ultra rápido).
* **Enrutamiento:** React Router DOM v6.
* **Estado Global:** Context API (Gestión eficiente del carrito sin dependencias externas).
* **Estilos:** CSS3 Nativo con Arquitectura de Variables (CSS Custom Properties) y diseño totalmente Responsivo 
* **Consumo de API:** Fetch API nativo + Custom Hooks.

## Funcionalidades Principales
Cumpliendo con los requisitos solicitados:

### 1.  Listado de productos (Home) 
* Listado dinámico de productos consumidos desde `fakestoreapi.com`.
* Filtros por Categoría: Interfaz de "píldoras" con feedback visual activo.
* UX: Spinners de carga personalizados y manejo de errores.

### 2. Detalle de Producto 
* Navegación dinámica (`/product/:id`).
* Validación de seguridad: Manejo de IDs inexistentes (Error 404 visual).
* Vista detallada con imagen responsiva, descripción y acciones de compra.

### 3. Carrito de Compras 
* Persistencia:El estado del carrito se mantiene al navegar entre vistas.
* Lógica de Negocio:
    * Cálculo automático de totales.
    * Agrupación de productos repetidos.
    * Controladores de cantidad (+ / -).
    * Eliminación de ítems.
* Feedback: Notificaciones "Toast" emergentes al agregar productos.
* UI: Diseño de resumen de pedido "Sticky" (fijo al hacer scroll) y estados vacíos ilustrados.

## Arquitectura del Proyecto
El código sigue una estructura modular para asegurar la escalabilidad y mantenibilidad:

```text
src/
├── components/   # UI Reutilizable (CategoryFiltrer, Navbar, ProductCard, Loader, Toast)
├── context/      # Estado Global (CartContext: Lógica del carrito)
├── hooks/        # Lógica separada de la UI (useProducts, useCart)
├── pages/        # Vistas principales (Home, ProductDetail)
└── index.css     # Sistema de diseño centralizado (Variables, Reset, Layouts)

FakeStore API : https://fakestoreapi.com/
Documentación de la API: https://fakestoreapi.com/doc
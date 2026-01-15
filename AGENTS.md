# AGENTS.md - Guías del Proyecto Portafolio

Este documento proporciona directrices para asistentes de programación que trabajen en este proyecto de portafolio React.

## Descripción del Proyecto

Este es un sitio web de portafolio personal construido con:
- **React 18** con Vite
- **TypeScript** (mezclado con JavaScript)
- **Tailwind CSS** con DaisyUI
- **Motion** para animaciones
- **React Router** para navegación

## Comandos de Build, Lint y Tests

### Desarrollo
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run preview      # Previsualizar build de producción
```

### Build & Despliegue
```bash
npm run build        # Build para producción
npm run predeploy    # Build antes del despliegue (alias para build)
npm run deploy       # Desplegar en GitHub Pages usando gh-pages
```

### Calidad de Código
```bash
npm run lint         # Ejecutar ESLint en todos los archivos
```

### Utilidades
```bash
npm run convert-to-webp  # Convertir imágenes a formato WebP
```

### Testing
**Nota:** Este proyecto actualmente no tiene configuración de tests. Al agregar tests:
- Usar Vitest (el test runner nativo de Vite)
- Colocar archivos de test junto a componentes con extensiones `.test.jsx` o `.test.tsx`
- Para un test individual: `npm test -- ruta/al/test/file.test.jsx`

## Guías de Estilo de Código

### Estructura de Archivos
```
src/
├── Components/          # Componentes React
│   ├── About_Me/       # Componentes de la sección "Sobre mí"
│   ├── Home/           # Componentes de la página principal  
│   ├── Projects/       # Muestra de proyectos
│   ├── Service/        # Sección de servicios
│   └── Footer/         # Componente del pie de página
├── hooks/              # Hooks personalizados de React
├── App.jsx             # Componente principal de la app
└── main.jsx            # Punto de entrada
```

### Convenciones de Nombres
- **Componentes**: PascalCase (ej., `Sobre_mi.tsx`, `Home.jsx`)
- **Archivos**: Usar nombres descriptivos con extensiones apropiadas
  - `.jsx` para componentes React en JavaScript
  - `.tsx` para componentes React en TypeScript
  - `.js` para módulos JavaScript
- **Variables/Funciones**: camelCase
- **Constantes**: UPPER_SNAKE_CASE para constantes verdaderas

### Orden de Imports
1. Imports de React
2. Imports de librerías externas
3. Imports de componentes internos
4. Imports de estilos/utilidades
5. Imports de tipos (solo TypeScript)

Ejemplo:
```jsx
import React from "react";
import { motion } from "motion/react";
import Sobre_mi from "./Components/About_Me/Sobre_mi";
import "./index.css";
```

### Estructura de Componentes
1. Declaraciones de import
2. Definición del componente (función o clase)
3. Funciones helper internas
4. Declaración de retorno JSX
5. Declaración de export

Plantilla de ejemplo:
```jsx
import React from "react";
import { motion } from "motion/react";

export default function NombreComponente() {
  // Estado y hooks
  // Funciones helper
  
  return (
    <div className="container">
      {/* Contenido JSX */}
    </div>
  );
}
```

### Uso de TypeScript
- Usar TypeScript para nuevos componentes cuando sea posible
- La base de código existente mezcla `.jsx` y `.tsx` - mantener consistencia con archivos circundantes
- Definir interfaces apropiadas para props
- Usar tipos de retorno explícitos para funciones

### Guías de Estilos
- Usar clases de utilidad de **Tailwind CSS** principalmente
- Componentes **DaisyUI** para elementos UI (botones, tarjetas, etc.)
- Estilos personalizados en `src/index.css` solo cuando sea necesario
- Usar colores del tema desde `tailwind.config.js`:
  - `primary`: #DED1BA (Beige cálido)
  - `secondary`: #8A7356 (Marrón tierra rico)
  - `accent`: #5B4C3A (Arcilla espresso profunda)
  - `neutral`: #C4B39A (Beige champiñón suave)
  - `base-100`: #F4EFE6 (Blanco hueso gentil)

### Guías de Animación
- Usar librería **Motion** para animaciones
- Preferir `whileInView` para animaciones activadas por scroll
- Usar `whileHover` y `whileTap` para elementos interactivos
- Mantener animaciones sutiles y con buen rendimiento
- Patrón de ejemplo:
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### Manejo de Errores
- Usar try-catch para operaciones asíncronas
- Mostrar mensajes de error amigables para el usuario
- Registrar errores en consola para depuración
- Validar props en componentes TypeScript

### Accesibilidad
- Incluir texto `alt` para todas las imágenes
- Usar elementos HTML semánticos
- Asegurar contraste de color apropiado
- Agregar `aria-label` para elementos interactivos sin texto
- Usar `loading="lazy"` para imágenes debajo del pliegue

### Rendimiento
- Carga diferida de imágenes con `loading="lazy"`
- Usar imágenes WebP vía script `convert-to-webp`
- Optimizar animaciones con `will-change` cuando sea necesario
- Minimizar tamaño del bundle importando solo iconos necesarios

### Prácticas de Git
- Mensajes de commit: Usar tiempo presente, descriptivos
- Nombres de ramas: feature/descripción o fix/descripción
- Mantener commits enfocados y atómicos

## Patrones Específicos del Proyecto

### Manejo de Imágenes
- Almacenar imágenes originales en `public/img/`
- Versiones WebP en `public/images-webp/`
- Referenciar imágenes con ruta base `/Portafolio/` para GitHub Pages
- Usar script `convert-to-webp.mjs` para generar versiones WebP

### Sistema de Temas
- Temas claro y oscuro definidos en `tailwind.config.js`
- DaisyUI maneja el cambio de temas
- Usar clases conscientes del tema: `bg-primary`, `text-secondary`, etc.

### Navegación
- Usa enlaces hash para navegación de una sola página
- Secciones identificadas por atributos `id`
- Desplazamiento suave entre secciones

## Al Agregar Nuevas Funcionalidades

1. **Revisar patrones existentes** en componentes similares
2. **Seguir la estructura de archivos establecida**
3. **Usar paleta de colores existente** desde configuración de tema
4. **Agregar animaciones** consistentes con el estilo actual
5. **Probar comportamiento responsive** en diferentes tamaños de pantalla
6. **Ejecutar linting** antes de hacer commits
7. **Verificar que el build** funcione correctamente

## Problemas Comunes a Evitar

- No codificar colores directamente - usar variables del tema
- No crear funciones de utilidad duplicadas
- No mezclar frameworks CSS (solo Tailwind)
- No olvidar la ruta base `/Portafolio/` para producción
- No hacer commit de archivos binarios grandes a git

## Notas para Agentes

- Este es un proyecto de portafolio personal
- Enfocarse en código limpio y mantenible
- Priorizar atractivo visual y experiencia de usuario
- Asegurar responsividad móvil
- Mantener patrones de animación consistentes
- Seguir el sistema de diseño establecido
# Blueprint: Portfolio V2 - Editorial Brutalism

Este documento contiene la especificación técnica y visual completa del rediseño del portfolio, optimizado para **Astro 5** y **Tailwind CSS v4**.

---

## 1. Concepto Visual
- **Estilo:** Editorial Brutalism / Swiss Design.
- **Principios:** Tipografía extrema, asimetría, ángulos de 90° (sin border-radius), líneas de 1px y mucho espacio negativo.
- **Navegación:** Doble sistema (Navbar superior + Side Index numerado 01-04).

---

## 2. Configuración de Fuentes (Google Fonts)
Añadir en el `<head>` del Layout:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
```

---

## 3. Configuración Tailwind CSS v4 (`global.css`)
```css
@theme {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-primary: var(--primary);
    --color-secondary: var(--secondary);
    --color-accent: var(--accent);
    --color-border: var(--border);

    --font-headline: "Space Grotesk", sans-serif;
    --font-body: "Newsreader", serif;
    --font-label: "Inter", sans-serif;

    --radius-none: 0px;
}

:root {
    --background: #f9f9f9;
    --foreground: #1a1c1c;
    --primary: #000000;
    --secondary: #5e5e5e;
    --accent: #005bc4; /* Azul Royal Vibrante */
    --border: #e2e2e2;
}

[data-theme="dark"] {
    --background: #0a0a0a;
    --foreground: #f1f1f1;
    --primary: #ffffff;
    --secondary: #ababab;
    --accent: #4f8aff; /* Azul Cielo Eléctrico */
    --border: #2f3131;
}

@layer base {
    section {
        scroll-margin-top: 160px; /* Evita que el header tape el contenido */
    }
    body {
        @apply bg-background text-foreground font-body antialiased;
        cursor: crosshair;
    }
}
```

---

## 4. Estructura de Secciones

### 00. Hero (Presentación)
- **Visual:** Sin imágenes. Tipografía masiva (`10vw`).
- **Layout:** Titular principal a la izquierda, bloque "Current Focus" con borde superior a la derecha.
- **Copy:** "Software Structure Defined".

### 01. Projects (Selected Work)
- **Visual:** Lista minimalista tipo directorio.
- **Interacción:** Hover con cambio de color a `--accent` y aparición de miniatura (`Image` de Astro) optimizada.
- **Layout:** Título de proyecto (`text-5xl`), tags discretos y flecha de dirección.

### 02. Skills (Capabilities)
- **Visual:** Bloques numerados (02.1, 02.2...).
- **Layout:** Título de categoría gigante (`text-8xl`), descripción en Serif y lista de skills en Sans-Serif con puntos de color acento.

### 03. About (Refined Profile)
- **Visual:** Limpio, tipografía `text-4xl`.
- **Destacados:** Uso de `<span class="text-accent font-bold">` para palabras clave técnicas.
- **Layout:** Dos columnas asimétricas (3/12 para título, 9/12 para contenido).

### 04. Contact (Brutalist Form)
- **Visual:** Formulario integrado con líneas inferiores de 2px.
- **Campos:** Nombre, Email, Mensaje (placeholders en `text-primary/40`).
- **Botón:** Bloque sólido negro/blanco con hover en color acento.
- **Lógica:** Integración con Formspree (POST).

---

## 5. Lógica de Navegación (Layout.astro)

### Side Index (Sticky 01-04)
Añadir un componente `aside` fijo a la izquierda que use `IntersectionObserver` para desaparecer al llegar al footer:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sideIndex.style.opacity = "0"; // Desvanece en el footer
        } else {
            sideIndex.style.opacity = "1";
        }
    });
}, { threshold: 0.1 });
```

---

## 6. Footer (Massive Impact)
- **Fondo:** Color primario invertido.
- **Titular:** "LET'S BUILD IT" en `10vw`.
- **Links:** Lista vertical de redes sociales con subrayado grueso (`decoration-8`) en el Email.

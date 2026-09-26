# Visionary - Soluciones Empresariales & Contables

Landing page institucional para **Visionary**, estudio especializado en soluciones empresariales y contables en Córdoba, Argentina. Diseñada para ayudar a PyMEs a ordenar su administración, procesos contables, gestión operativa y análisis financiero.

---

## 🎨 Identidad Visual y Diseño

- **Paleta de Colores Corporativa (Plana y Mate):**
  - Azul Marino Profundo: `#1B3A5C` / `#13263B`
  - Azul Acero: `#2C5578`
  - Gris Pizarra: `#8FA3B0`
  - Fondos Claros: `#FFFFFF` y `#F8FAFC`
  - Bloques de Impacto: Azul Oscuro Sólido (`#14283E` / `#0E1C2B`), sin degradés ni brillos
- **Estética Sobria y Confiable:**
  - Sin neones, sin efectos glow, sin sombras de colores ni estética glossy. Todo en acabados planos, limpios y corporativos.
- **Tipografía:**
  - *Plus Jakarta Sans* moderna, bold en mayúsculas para títulos corporativos y sans-serif legible para textos de lectura.
- **Logo:**
  - Ave / fénix estilizada en azul y gris (versión vectorial SVG plana, sin brillo) con tipografía corporativa.

---

## 📐 Estructura de Secciones

1. **Barra Superior**: Datos rápidos de contacto, ubicación (Córdoba, Argentina) y enlaces a Instagram (`@visionary_ok`) y WhatsApp.
2. **Header Sticky**: Logo oficial Visionary, menú de navegación anclado y botón de WhatsApp destacado.
3. **Hero Section (Fondo azul oscuro sólido)**:
   - Título de impacto: *"Soluciones empresariales y contables para hacer crecer tu PyME"*.
   - Subtítulo: *"Ayudamos a empresas a ordenar su administración y procesos contables."*.
   - CTAs hacia WhatsApp y servicios.
   - Métricas y resumen del enfoque integral.
4. **Sección de Impacto "¿Tu empresa crece pero la administración te consume?"**:
   - Bloque en azul oscuro sólido con texto blanco.
   - Matriz comparativa de 4 problemas habituales de las PyMEs frente a las soluciones metodológicas de Visionary.
5. **Sección Servicios (3 Tarjetas con íconos de línea planos y bordes sutiles)**:
   - *Precisión Contable de Alto Nivel* (Impuestos AFIP/DGR, Balances, Sueldos).
   - *Soluciones de Gestión Inteligente* (Circuitos administrativos, compras, cobranzas, conciliaciones).
   - *Impulso de Crecimiento Sostenible* (Reportes de gestión mensuales, KPIs, Cash Flow).
6. **Sección "4 señales de que tu administración está desordenada"**:
   - Diagnóstico rápido para dueños de empresas con puntos ciegos habituales.
7. **Sección Nosotros**:
   - Historia y visión del estudio en Córdoba, compromiso técnico y pilares de trabajo.
8. **Sección Testimonios / Casos de Éxito**:
   - Reseñas de directores de empresas comerciales, fabricantes y logística.
9. **Sección Contacto**:
   - Formulario de consulta interactivo que redirige directamente a WhatsApp con el mensaje estructurado.
   - Datos directos de WhatsApp (`+54 9 351 850-4421`), ubicación en Córdoba Capital y horarios.
10. **Footer**:
    - Azul oscuro sólido, logo, navegación, redes sociales y copyright.
11. **Botón Flotante de WhatsApp**:
    - Pinned en la esquina inferior con pulso sutil (sin brillo) dirigido a `+54 9 351 850-4421`.

---

## 📱 100% Mobile First & Responsive

- Sin desbordes horizontales (`overflow-x: hidden`, `box-sizing: border-box`).
- Menú drawer hamburguesa en dispositivos móviles.
- Tarjetas apiladas y botones con tamaño táctil accesible.

---

## 🚀 Despliegue en Vercel

1. Ingresar a [vercel.com](https://vercel.com) y hacer clic en **Add New... > Project**.
2. Conectar e importar el repositorio: `https://github.com/Dyydyyb/visionary-landing`.
3. Vercel detectará automáticamente el archivo [vercel.json](file:///C:/Users/dylan/.gemini/antigravity-ide/scratch/visionary-landing/vercel.json) con la configuración de Vite (`npm run build` hacia `dist`).
4. Hacer clic en **Deploy**. ¡Listo en segundos!

---

## 💻 Ejecución en Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:5175
npm run dev

# Generar bundle de producción
npm run build
```

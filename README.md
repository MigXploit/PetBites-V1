# PetBites-V1

## Cambios realizados (Mayo 2026)

### Cambios del usuario:
1. **Nav "Nosotros" visible en index** — Eliminada la regla CSS que ocultaba el link.
2. **Validación regex en registro** — Todos los campos validados con expresiones regulares adaptadas a Bolivia:
   - Nombre/Apellido: solo letras y espacios (2-50 chars)
   - WhatsApp: formato boliviano `+5917XXXXXXX` o `5916XXXXXXX`
   - Email: formato estándar
   - Ciudad: solo letras (2-40 chars)
   - Zona/Calle/Número: caracteres válidos según contexto
   - Nombre mascota: solo letras y espacios (2-30 chars)
   - Raza: solo letras y espacios (2-40 chars)
   - Edad: formato "3 años" o "8 meses"
3. **CAPTCHA matemático** — Al final del registro, antes del botón de envío. Operación simple (suma/resta) generada aleatoriamente.
4. **Imágenes en SERVICIOS (index)** — Reemplazados 3 iconos por imágenes reales:
   - Plan Nutricional → `img/gato1.jpeg`
   - Retroalimentación Continua → `img/perro1.jpeg`
   - Suplementación Guiada → `img/perro2.jpeg`
5. **Imágenes en SERVICIOS (página)** — Mismos reemplazos en `pages/servicios.html` + hero con `gato1.jpeg`.

### Mejoras adicionales sugeridas:
6. **Favicon 🐾** — Emoji de huella como favicon en todas las páginas (SVG inline, no requiere archivo externo).
7. **Open Graph tags** — Meta tags para compartir en redes sociales/WhatsApp en todas las páginas.
8. **Schema.org (JSON-LD)** — Datos estructurados para SEO local en `index.html`.
9. **Lazy loading** — Atributo `loading="lazy"` en todas las imágenes nuevas.
10. **Skeleton loading CSS** — Animación preparada para futuro uso.
11. **Eliminado initForms() genérico** — Evitaba conflicto con el formulario de registro que ya tiene su propio handler.

### Estructura de archivos:
```
pet-bites-v1/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── components.js
│   ├── components-root.js
│   └── main.js
├── pages/
│   ├── contacto.html
│   ├── membresia.html
│   ├── nosotros.html
│   ├── registro.html
│   ├── servicios.html
│   └── hi.txt
└── img/
    ├── gato1.jpeg
    ├── nutricion.jpeg
    ├── perro1.jpeg
    └── perro2.jpeg
```

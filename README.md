# aurova software — Landing page

Landing page moderna y minimalista para la agencia de desarrollo web **aurova software**.
Construida con [Astro](https://astro.build) + Tailwind CSS v4, sin frameworks de JS.

## Estructura

```
src/
├── layouts/Layout.astro        # head/SEO, navbar fija y footer
├── sections/
│   ├── Hero.astro              # titular, CTAs y prueba social
│   ├── Services.astro          # landings, ecommerce y sistemas web
│   ├── Process.astro           # proceso de trabajo (4 pasos)
│   ├── Portfolio.astro         # proyectos destacados
│   ├── Testimonials.astro      # opiniones de clientes
│   └── Contact.astro           # formulario + datos de contacto
├── pages/
│   ├── index.astro             # composición de la página
│   └── api/contact.ts          # endpoint POST del formulario
└── styles/global.css           # tema de Tailwind (colores, fuentes)
```

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # desarrollo en http://localhost:4321
npm run build   # build de producción en dist/
npm run preview # servir el build (node adapter, standalone)
```

## Formulario de contacto

El formulario envía un `POST` a `/api/contact` (`src/pages/api/contact.ts`), que
valida los datos y devuelve JSON. Hoy registra el mensaje en consola; para enviar
los correos conecta ahí tu proveedor (Resend, Nodemailer, Formspree…) modificando
solo la route del API. El sitio usa `output: "server"` con `@astrojs/node`, así
que desplegarlo requiere un runtime Node (Fly.io, Render, Railway, Vercel, etc.).

## Personalización

- Colores y tipografías: `src/styles/global.css` (tokens `--color-*`, fuentes `Inter` y `Sora`).
- Contenido: cada sección es un componente con sus datos en el frontmatter.
- Logo: `public/logo.svg` y `public/favicon.svg`.# aurova_software

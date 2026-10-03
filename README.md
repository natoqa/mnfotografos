# Miguel & Nancy · Fotografía de bodas

Sitio hecho con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Comandos

| Comando           | Qué hace                                        |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Instala las dependencias (solo la primera vez)  |
| `npm run dev`     | Abre la web en http://localhost:4321 para editar |
| `npm run build`   | Genera la versión final en `dist/`              |
| `npm run preview` | Muestra la versión final antes de publicarla    |

## Dónde se edita cada cosa

- **Textos, fotos, enlaces, álbumes, testimonios y WhatsApp:** `src/data/site.ts`
- **Estilos y animaciones:** `src/styles/global.css` (colores y fuentes de marca en `@theme`)
- **Secciones de la página:** `src/components/`
- **Página de cada álbum:** `src/pages/albumes/[slug].astro` (una por cada álbum de `site.ts`)

## Pendientes antes de publicar

- [ ] Fotos reales del cliente (hero, nosotros, álbumes y sus galerías, studio/workshop, contacto, menú)
- [ ] Textos de cada álbum (`intro` en `site.ts`)
- [ ] Número real de WhatsApp (`WHATSAPP` en `site.ts`)
- [ ] Enlaces reales de Facebook y TikTok (`socials` en `site.ts`)
- [ ] Dominio real en `astro.config.mjs`, `src/data/site.ts` y `public/robots.txt`
- [ ] Imagen para compartir en redes (`hero.ogImage` en `site.ts`, 1200 × 630 px)
- [ ] Medición: copiar `.env.example` como `.env` y completar Plausible o Google Analytics

## Publicar

Netlify, Vercel o Cloudflare Pages (gratis):

1. Sube el proyecto a un repositorio de GitHub.
2. Importa el repositorio en el servicio elegido. Detecta Astro solo:
   comando de build `npm run build`, carpeta `dist`.
3. Si usas medición, agrega `PUBLIC_PLAUSIBLE_DOMAIN` o `PUBLIC_GA_ID` como variable de entorno.
4. Conecta el dominio.

Cada cambio que subas a GitHub se publica automáticamente.

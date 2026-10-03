// Contenido de la página. Edita aquí textos, enlaces y fotos sin tocar los componentes.

// ← reemplazar por el dominio real antes de publicar (también en astro.config.mjs)
export const SITE_URL = 'https://mnfotografos.com';
export const SITE_NAME = 'Miguel & Nancy Fotógrafos';

export const WHATSAPP = '51900000000'; // ← reemplazar por el número real (código de país + número)
export const INSTAGRAM = 'https://instagram.com/mnfotografos';

export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

const unsplash = (id: string, params: string) =>
  `https://images.unsplash.com/photo-${id}?${params}&q=80&auto=format&fit=crop`;

export const menuLinks = [
  { label: 'Álbumes', href: '/#albumes', preview: unsplash('1519741497674-611481863552', 'w=1200') },
  { label: 'Nosotros', href: '/#nosotros', preview: unsplash('1606800052052-a08af7148866', 'w=1200') },
  { label: 'Testimonios', href: '/#testimonios', preview: unsplash('1511285560929-80b456fea0bc', 'w=1200') },
  { label: 'Contacto', href: '/#contacto', preview: unsplash('1465495976277-4387d4b0b4c6', 'w=1200') },
  { label: 'Redes', href: '/#redes', preview: unsplash('1522673607200-164d1b6ce486', 'w=1200') },
];

export const hero = {
  image: unsplash('1519741497674-611481863552', 'w=2400'),
  ogImage: unsplash('1519741497674-611481863552', 'w=1200&h=630'), // imagen al compartir el enlace
  alt: 'Pareja de novios abrazados el día de su boda',
  phrase: 'Hay instantes que pasan una sola vez. Nosotros nos quedamos para guardarlos.',
  word: 'historias',
};

export const about = {
  image: unsplash('1537633552985-df8429e8048b', 'w=1600'),
  alt: 'Miguel y Nancy',
  phrases: [
    'Una boda pasa rápido y se recuerda despacio.',
    'Por eso miramos lo que nadie está mirando.',
    'Una mano que tiembla, una risa a destiempo, un abrazo que dura un poco más.',
    'Eso es lo que te vas a llevar.',
  ],
  sign: 'Miguel y Nancy, fotógrafos',
};

// Fotos de galería provisionales (reemplazar por las del cliente)
const placeholderGallery = [
  '1519741497674-611481863552',
  '1537633552985-df8429e8048b',
  '1511285560929-80b456fea0bc',
  '1465495976277-4387d4b0b4c6',
  '1522673607200-164d1b6ce486',
  '1606800052052-a08af7148866',
  '1583939003579-730e3918a45a',
  '1591604466107-ec97de577aff',
].map(id => unsplash(id, 'w=1600'));

// Cada álbum tiene su propia página en /albumes/<slug>
export const albums = [
  {
    slug: 'boda-en-cartagena',
    title: ['Boda en', 'Cartagena'],
    label: 'Boda en Cartagena',
    place: 'Colombia',
    image: unsplash('1583939003579-730e3918a45a', 'w=1200&h=1800'),
    intro: 'Una boda frente al mar Caribe, entre calles de colores y una fiesta que terminó al amanecer.', // ← texto provisional
    gallery: placeholderGallery,
  },
  {
    slug: 'boda-en-cuzco',
    title: ['Boda en', 'Cuzco'],
    label: 'Boda en Cuzco',
    place: 'Perú',
    image: unsplash('1606800052052-a08af7148866', 'w=1200&h=1800'),
    intro: 'Piedra, montaña y una ceremonia íntima a más de tres mil metros de altura.', // ← texto provisional
    gallery: placeholderGallery,
  },
  {
    slug: 'post-boda-en-cuzco',
    title: ['Post boda', 'en Cuzco'],
    label: 'Post boda en Cuzco',
    place: 'Perú',
    image: unsplash('1591604466107-ec97de577aff', 'w=1200&h=1800'),
    intro: 'Un día después de la boda, sin horarios ni invitados: solo ellos dos y el valle.', // ← texto provisional
    gallery: placeholderGallery,
  },
];

export const steps = [
  { title: 'Conversamos', text: 'Nos cuentan cómo imaginan el día: lugar, horarios y las personas que no pueden faltar en las fotos.' },
  { title: 'Reservamos la fecha', text: 'Elegimos el paquete juntos y separamos la fecha con un adelanto.' },
  { title: 'Pre boda', text: 'Una sesión previa para conocernos frente a la cámara y llegar en confianza al gran día.' },
  { title: 'El día de la boda', text: 'Cubrimos desde los preparativos hasta la fiesta, los dos fotógrafos a la vez.' },
  { title: 'Entrega', text: 'Galería privada en línea y las piezas impresas que hayan elegido.' },
];

export const branches = [
  {
    id: 'studio',
    name: 'Studio',
    image: unsplash('1554048612-b6a482bc67e5', 'w=1600'),
    text: 'Sesiones en estudio: retratos, familia, maternidad y marca personal, con la misma mirada que llevamos a cada boda.',
    cta: 'Reservar una sesión',
    wa: 'Hola Miguel y Nancy, quiero información sobre una sesión en MN Studio.',
  },
  {
    id: 'workshop',
    name: 'Workshop',
    image: unsplash('1452587925148-ce544e77e70d', 'w=1600'),
    text: 'Talleres para fotógrafos que quieren aprender a contar historias: dirección de parejas, luz natural y edición.',
    cta: 'Ver próximos talleres',
    wa: 'Hola Miguel y Nancy, quiero información sobre el próximo MN Workshop.',
  },
];

// Con más de un testimonio, se van alternando solos. Agrega aquí los reales.
export const testimonials = [
  {
    quote: '“No nos dimos cuenta de que estaban ahí, y aun así tienen las fotos de todo lo que pasó. Volvimos a vivir la boda cuando abrimos la galería.”',
    author: 'Andrea y Luis, boda en Huanchaco',
  },
];

export const faqs = [
  { q: '¿Con cuánta anticipación debemos reservar?', a: 'Lo ideal es entre seis meses y un año antes, sobre todo si la boda es en temporada alta. Igual escríbenos aunque falte poco: si la fecha está libre, la tomamos.' },
  { q: '¿Cómo separamos la fecha?', a: 'Con un adelanto y la firma de un contrato sencillo. Desde ese momento la fecha queda reservada solo para ustedes.' },
  { q: '¿Viajan a otras ciudades o fuera del país?', a: 'Sí. Hemos fotografiado bodas en distintas ciudades del Perú y en el extranjero. Los pasajes y la estadía se coordinan aparte según el destino.' },
  { q: '¿Qué incluye la sesión de pre boda?', a: 'Una sesión en el lugar que elijan, pensada para que se acostumbren a la cámara antes del gran día. Muchas parejas usan estas fotos para el save the date.' },
  { q: '¿Cuándo recibimos las fotos?', a: 'Entregamos un adelanto pocos días después de la boda y la galería completa editada en las semanas siguientes, en una galería privada en línea.' },
  { q: '¿Podemos tener fotos impresas o un álbum?', a: 'Sí. Trabajamos cuadros, story books de biocuero y la box experience, una caja de recuerdo con sus fotos impresas.' },
  { q: '¿Dónde vemos los paquetes y precios?', a: 'Están en nuestro portafolio 2026. Escríbenos por WhatsApp con la fecha y el lugar de su boda y se lo enviamos.' },
];

export const contactImage = unsplash('1591604466107-ec97de577aff', 'w=900');

// Reemplazar los enlaces de Facebook y TikTok por los reales
export const socials = [
  { name: 'Instagram', handle: '@mnfotografos', href: INSTAGRAM },
  { name: 'Facebook', handle: 'Miguel & Nancy Fotógrafos', href: 'https://facebook.com/mnfotografos' },
  { name: 'TikTok', handle: '@mnfotografos', href: 'https://tiktok.com/@mnfotografos' },
  { name: 'WhatsApp', handle: 'Escríbenos', href: waLink() },
];

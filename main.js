/* =========================================================================
   Maraverse Games — site interactions (shared by all pages)
   ========================================================================= */

/* -------------------------------------------------------------------------
   GOOGLE PLAY LINK
   Leave empty until the store listing is live. The moment you paste the real
   URL here, both "Get it on Google Play" buttons become active links and the
   "Launching soon" note disappears automatically. No other change needed.
   ------------------------------------------------------------------------- */
const PLAY_STORE_URL = ''; // e.g. 'https://play.google.com/store/apps/details?id=com.wildlifecollection.app'

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  en: {
    'meta.description': 'A free, fully offline mobile card-collecting game. Discover 2,600+ real, hand-reviewed animal species, open packs, complete collections — built on real conservation data from the IUCN Red List.',
    'nav.features': 'Features',
    'nav.learn': 'Learn',
    'nav.conservation': 'Conservation',
    'hero.eyebrow': 'A wildlife card-collecting game',
    'hero.title': 'Collect the wild,<br>one pack at a time.',
    'hero.sub': 'Discover <strong>2,600+ real animal species</strong>, open packs and complete themed collections. <strong>Completely free</strong>, and fully <strong>playable offline</strong> — even in airplane mode.',
    'cta.getiton': 'GET IT ON',
    'cta.soon': '🚀 Launching soon — Android first',
    'hero.badge.free': '100% free',
    'hero.badge.offline': 'Plays fully offline',
    'hero.badge.real': '2,600+ real species',
    'hero.badge.lang': 'English & Español',
    'stat.species': 'real species',
    'stat.collections': 'themed collections',
    'stat.free.v': '100%',
    'stat.free': 'free & offline',
    'stat.lang': 'fully bilingual',
    'band.free.t': 'Free to play',
    'band.free.d': 'No paywall to start, no account required. Just download and begin your collection.',
    'band.offline.t': 'Works without internet',
    'band.offline.d': 'Once installed, the whole game runs on your device — play on a flight, on the metro, anywhere. No connection needed.',
    'features.title': 'Everything a collector loves',
    'features.lead': 'A daily loop of discovery, progress, and the thrill of a rare pull.',
    'feat.packs.t': 'Open packs',
    'feat.packs.d': 'Twelve cards a pack, drawn by real rarity. A free pack refreshes every hour — pricier packs guarantee rarer pulls.',
    'feat.collections.t': 'Complete collections',
    'feat.collections.d': 'Fill themed albums — African Savanna, Amazon Rainforest, Coral Reefs and more — to unlock the next region.',
    'feat.trade.t': 'Trade duplicates up',
    'feat.trade.d': 'Stack duplicates and exchange them for rarer cards — or unlock stunning colour-morph variants.',
    'feat.streaks.t': 'Daily rewards & streaks',
    'feat.streaks.d': 'Log in daily for coins and bonus packs. Keep a 7-day streak to unlock the Faithful Companions collection.',
    'feat.foils.t': 'Shiny cards & variants',
    'feat.foils.d': 'Chase Silver, Gold and Rainbow shiny cards, plus rare alternate artwork like the Black Panther morph of the Jaguar.',
    'feat.iucn.t': 'Real conservation data',
    'feat.iucn.d': 'Each species carries its real status on the IUCN Red List — the International Union for Conservation of Nature — which drives its rarity and in-game value.',
    'edu.eyebrow': 'More than a game',
    'edu.title': 'A game that teaches while you play',
    'edu.lead': 'The sticker albums many of us grew up with — reimagined, and quietly educational for every age.',
    'edu.all.t': 'For every age',
    'edu.all.d': 'Parents, kids and the simply curious. It grew out of the animal sticker albums of childhood — that same joy of completing a collection, now in your pocket.',
    'edu.discover.t': 'Meet the unknown',
    'edu.discover.d': "Most of these species you'll have never heard of. Even lifelong animal lovers discover dozens of new ones — it's a window onto a natural world we rarely get to see.",
    'edu.scale.t': 'One of the largest catalogues anywhere',
    'edu.scale.d': 'Over 2,600 species — a genuinely huge database, far beyond what most collection games offer, each with its own facts to learn.',
    'edu.real.t': 'Realistic, hand-reviewed art',
    'edu.real.d': 'Every single image is reviewed for the highest possible realism, so each animal looks like the real thing — not a cartoon.',
    'screens.title': 'See it in action',
    'screens.lead': 'Real screens, captured straight from the app.',
    'g.home': 'Daily dashboard',
    'g.album': 'Your album',
    'g.pack': 'Pack reveal',
    'g.card': 'Card detail',
    'g.collections': 'Collections',
    'g.profile': 'Your profile',
    'cons.eyebrow': 'Built on real conservation data',
    'cons.title': 'Every status tells a real story',
    'cons.p1': 'Rarity here isn\'t invented. Each species carries its real status on the <strong>IUCN Red List</strong> — the International Union for Conservation of Nature — from Least Concern to Critically Endangered, Extinct in the Wild, and Extinct. That status is exactly what decides how rare each card is.',
    'cons.p2': "And every level matters, not only the rarest. A “Least Concern” animal is doing well today, yet it's still being watched. “Near Threatened” and “Vulnerable” species are quietly losing ground. And far too many are already Endangered, or gone for good — almost always because of us, through hunting and the loss of the places they live. The game even gathers a whole cast of animals that now survive only in captivity, or that the planet has lost entirely.",
    'cons.p3': "It's a small way to put the spotlight on a natural world that needs it — giving a face to species you might otherwise never meet.",
    'cons.lc': 'Least Concern',
    'cons.nt': 'Near Threatened',
    'cons.vu': 'Vulnerable',
    'cons.en': 'Endangered',
    'cons.cr': 'Critically Endangered',
    'cons.ex': 'Extinct / Extinct in the Wild',
    'final.title': 'Start your collection',
    'final.sub': '2,600+ species are waiting — free, offline, on Android first.',
    'foot.tag': 'An indie game studio. Worlds worth collecting.',
    'foot.tagGame': 'The Wildlife Collection is a Maraverse Games title.',
    'foot.privacy': 'Privacy',
    'foot.contact': 'Contact',
    // Studio home
    'nav.studio': '← Maraverse Games',
    'studio.meta': 'Maraverse Games is an indie studio crafting collection and adventure games across real and imagined worlds — starting with The Wildlife Collection.',
    'studio.nav.games': 'Games',
    'studio.nav.about': 'Studio',
    'studio.eyebrow': 'Indie game studio',
    'studio.title': 'Worlds worth<br>collecting.',
    'studio.sub': "We're <strong>Maraverse Games</strong> — a one-person indie studio making collection and adventure games about the real and imagined worlds worth knowing. Our first one is here: <strong>The Wildlife Collection</strong>.",
    'studio.cta.small': 'OUR FIRST GAME',
    'studio.games.title': 'Our games',
    'studio.games.lead': 'Our first game is almost here — and more are already taking shape.',
    'studio.status.soon': 'Coming soon · Android',
    'studio.status.dev': 'In development',
    'studio.game.wildlife': 'Discover 2,600+ real animal species, open packs and complete collections — built on real conservation data from the IUCN Red List.',
    'studio.game.view': 'View game →',
    'studio.soon.tile1': 'A new world in the making',
    'studio.soon.tile2': 'Another collection to discover',
    'studio.soon.tile3': 'Something new on the horizon',
    'studio.soon.note': 'More games are in the works. Their worlds are still being dreamed up — stay tuned.',
    'studio.story.eyebrow': 'Our story',
    'studio.story.title': 'Where Maraverse Games comes from',
    'studio.story.p1': "I've been a software engineer for years, but games came first. I started coding at 15 precisely to build them — little black-and-white games written in C — and even my final engineering project was my own take on a game I loved. My career later went a different way, yet making games stayed with me as the thing I'd always come back to in my spare time.",
    'studio.story.p2': "For a long time, though, that's all it could be: a hobby. Building something like The Wildlife Collection — more than <strong>2,600 realistic, hand-reviewed animal illustrations</strong> — was simply impossible for one person to draw or afford. Then AI changed the maths, and since late 2023 I've finally been able to build the worlds I'd only ever imagined, entirely on my own.",
    'studio.story.p3': "And they're worlds I genuinely love. I'm fascinated by science and nature — biology, astronomy, palaeontology — and I photograph birds in my free time. These games are how I bring those passions together, and how I get to share a natural world most of us rarely meet. The first one took shape on the other side of the planet, during a honeymoon we were lucky enough to spend living in Asia for three months.",
    'studio.story.mara': "There's one last piece of home in all this. In January 2020 we adopted <strong>Mara</strong>, our dog, from a local shelter — an overlooked breed who arrived in a heartbreaking state and quickly became family. The studio carries her name, and you'll find her on everything we make. 🐾",
    'studio.story.sign': '— Adrián, founder of Maraverse Games',
    'studio.value.real.t': 'Rooted in reality',
    'studio.value.real.d': 'Real species, real science, real wonder.',
    'studio.value.craft.t': 'Made with craft',
    'studio.value.craft.d': 'Every image hand-reviewed for realism.',
    'studio.value.fair.t': 'Player-first',
    'studio.value.fair.d': 'Free, calm games — no dark patterns.',
    'studio.value.lang.t': 'Made to travel',
    'studio.value.lang.d': 'Bilingual from day one (EN · ES).',
    'studio.final.title': 'Start with the wild',
    'studio.final.sub': 'Our first game is almost here. Take a look while the next worlds take shape.',
    // 404
    'err.title': 'This trail leads nowhere',
    'err.sub': "The page you're looking for wandered off into the wild.",
    'err.back': 'BACK TO',
  },
  es: {
    'meta.description': 'Un juego de cartas gratuito y sin conexión. Descubre más de 2.600 especies reales y revisadas, abre sobres y completa colecciones — basado en datos reales de conservación de la Lista Roja de la UICN.',
    'nav.features': 'Características',
    'nav.learn': 'Aprende',
    'nav.conservation': 'Conservación',
    'hero.eyebrow': 'Un juego de cartas de vida salvaje',
    'hero.title': 'Colecciona lo salvaje,<br>sobre a sobre.',
    'hero.sub': 'Descubre <strong>más de 2.600 especies reales</strong>, abre sobres y completa colecciones temáticas. <strong>Totalmente gratis</strong> y <strong>jugable sin conexión</strong> — incluso en modo avión.',
    'cta.getiton': 'DISPONIBLE EN',
    'cta.soon': '🚀 Próximamente — primero en Android',
    'hero.badge.free': '100% gratis',
    'hero.badge.offline': 'Juega sin conexión',
    'hero.badge.real': 'Más de 2.600 especies reales',
    'hero.badge.lang': 'Inglés y Español',
    'stat.species': 'especies reales',
    'stat.collections': 'colecciones temáticas',
    'stat.free.v': '100%',
    'stat.free': 'gratis y sin conexión',
    'stat.lang': 'totalmente bilingüe',
    'band.free.t': 'Gratis para jugar',
    'band.free.d': 'Sin muro de pago para empezar y sin necesidad de cuenta. Descarga y empieza tu colección.',
    'band.offline.t': 'Funciona sin internet',
    'band.offline.d': 'Una vez instalado, todo el juego corre en tu dispositivo — juega en un vuelo, en el metro, donde sea. No necesita conexión.',
    'features.title': 'Todo lo que un coleccionista adora',
    'features.lead': 'Un bucle diario de descubrimiento, progreso y la emoción de una carta rara.',
    'feat.packs.t': 'Abre sobres',
    'feat.packs.d': 'Doce cartas por sobre, sorteadas por rareza real. Un sobre gratis cada hora — los sobres premium garantizan cartas más raras.',
    'feat.collections.t': 'Completa colecciones',
    'feat.collections.d': 'Llena álbumes temáticos — Sabana Africana, Selva del Amazonas, Arrecifes de Coral y más — para desbloquear la siguiente región.',
    'feat.trade.t': 'Mejora tus duplicados',
    'feat.trade.d': 'Acumula duplicados y cámbialos por cartas más raras — o desbloquea espectaculares variantes de color.',
    'feat.streaks.t': 'Recompensas y rachas',
    'feat.streaks.d': 'Entra cada día por monedas y sobres extra. Mantén una racha de 7 días para desbloquear la colección Compañeros Fieles.',
    'feat.foils.t': 'Cartas brillantes y variantes',
    'feat.foils.d': 'Persigue cartas brillantes Plata, Oro y Arcoíris, además de ilustraciones alternativas raras como la pantera negra del jaguar.',
    'feat.iucn.t': 'Datos reales de conservación',
    'feat.iucn.d': 'Cada especie lleva su estado real en la Lista Roja de la UICN — la Unión Internacional para la Conservación de la Naturaleza —, que determina su rareza y su valor en el juego.',
    'edu.eyebrow': 'Más que un juego',
    'edu.title': 'Un juego que enseña mientras juegas',
    'edu.lead': 'Los álbumes de cromos con los que muchos crecimos — reinventados, y discretamente educativos para cualquier edad.',
    'edu.all.t': 'Para todas las edades',
    'edu.all.d': 'Padres, hijos y curiosos en general. Nació de los álbumes de cromos de animales de la infancia — esa misma ilusión de completar una colección, ahora en tu bolsillo.',
    'edu.discover.t': 'Conoce lo desconocido',
    'edu.discover.d': 'La mayoría de estas especies no las habrás oído nombrar. Incluso los amantes de los animales descubren decenas nuevas — una ventana a un mundo natural que rara vez llegamos a ver.',
    'edu.scale.t': 'Uno de los catálogos más grandes que existen',
    'edu.scale.d': 'Más de 2.600 especies — una base de datos enorme de verdad, muy por encima de lo que ofrecen la mayoría de juegos de colección, cada una con sus propios datos para aprender.',
    'edu.real.t': 'Arte realista y revisado',
    'edu.real.d': 'Cada imagen se revisa para el mayor realismo posible, para que cada animal parezca de verdad — no un dibujo.',
    'screens.title': 'Míralo en acción',
    'screens.lead': 'Pantallas reales, capturadas directamente de la app.',
    'g.home': 'Panel diario',
    'g.album': 'Tu álbum',
    'g.pack': 'Apertura de sobre',
    'g.card': 'Detalle de carta',
    'g.collections': 'Colecciones',
    'g.profile': 'Tu perfil',
    'cons.eyebrow': 'Basado en datos reales de conservación',
    'cons.title': 'Cada estado cuenta una historia real',
    'cons.p1': 'La rareza aquí no es inventada. Cada especie lleva su estado real en la <strong>Lista Roja de la UICN</strong> — la Unión Internacional para la Conservación de la Naturaleza — de Preocupación Menor a En Peligro Crítico, Extinto en Estado Silvestre y Extinto. Ese estado es justo lo que decide lo rara que es cada carta.',
    'cons.p2': 'Y todos los niveles importan, no solo los más raros. Una especie de «Preocupación Menor» está bien hoy, pero sigue bajo vigilancia. Las «Casi Amenazadas» y «Vulnerables» van perdiendo terreno en silencio. Y demasiadas ya están En Peligro, o se han perdido para siempre — casi siempre por nuestra culpa, por la caza y la pérdida de los lugares donde viven. El juego incluso reúne todo un elenco de animales que ya solo sobreviven en cautividad, o que el planeta ha perdido por completo.',
    'cons.p3': 'Es una pequeña manera de poner el foco en un mundo natural que lo necesita — dando rostro a especies que de otro modo quizá nunca conocerías.',
    'cons.lc': 'Preocupación Menor',
    'cons.nt': 'Casi Amenazada',
    'cons.vu': 'Vulnerable',
    'cons.en': 'En Peligro',
    'cons.cr': 'En Peligro Crítico',
    'cons.ex': 'Extinto / Extinto en estado silvestre',
    'final.title': 'Empieza tu colección',
    'final.sub': 'Más de 2.600 especies te esperan — gratis, sin conexión y primero en Android.',
    'foot.tag': 'Un estudio indie de videojuegos. Mundos que merece la pena coleccionar.',
    'foot.tagGame': 'The Wildlife Collection es un juego de Maraverse Games.',
    'foot.privacy': 'Privacidad',
    'foot.contact': 'Contacto',
    // Home del estudio
    'nav.studio': '← Maraverse Games',
    'studio.meta': 'Maraverse Games es un estudio indie que crea juegos de colección y aventura en mundos reales e imaginados — empezando por The Wildlife Collection.',
    'studio.nav.games': 'Juegos',
    'studio.nav.about': 'Estudio',
    'studio.eyebrow': 'Estudio indie de videojuegos',
    'studio.title': 'Mundos que merece<br>la pena coleccionar.',
    'studio.sub': 'Somos <strong>Maraverse Games</strong>, un estudio indie de una sola persona que crea juegos de colección y aventura sobre los mundos —reales e imaginados— que merece la pena conocer. El primero ya está aquí: <strong>The Wildlife Collection</strong>.',
    'studio.cta.small': 'NUESTRO PRIMER JUEGO',
    'studio.games.title': 'Nuestros juegos',
    'studio.games.lead': 'Nuestro primer juego está al caer — y ya hay más tomando forma.',
    'studio.status.soon': 'Próximamente · Android',
    'studio.status.dev': 'En desarrollo',
    'studio.game.wildlife': 'Descubre más de 2.600 especies reales, abre sobres y completa colecciones — basado en datos reales de conservación de la Lista Roja de la UICN.',
    'studio.game.view': 'Ver juego →',
    'studio.soon.tile1': 'Un nuevo mundo en construcción',
    'studio.soon.tile2': 'Otra colección por descubrir',
    'studio.soon.tile3': 'Algo nuevo en el horizonte',
    'studio.soon.note': 'Hay más juegos en marcha. Sus mundos todavía se están imaginando — muy pronto sabrás más.',
    'studio.story.eyebrow': 'Nuestra historia',
    'studio.story.title': 'De dónde nace Maraverse Games',
    'studio.story.p1': 'Llevo años siendo ingeniero de software, pero los juegos fueron lo primero. Empecé a programar a los 15 precisamente para crearlos — pequeños juegos en blanco y negro escritos en C — y hasta mi proyecto de fin de carrera fue mi propia versión de un juego que me encantaba. Mi carrera profesional acabó tomando otro rumbo, pero crear juegos siguió siendo aquello a lo que siempre volvía en mi tiempo libre.',
    'studio.story.p2': 'Durante mucho tiempo, eso sí, no pudo pasar de ahí: un hobby. Crear algo como The Wildlife Collection — más de <strong>2.600 ilustraciones de animales realistas y revisadas a mano</strong> — era sencillamente imposible de dibujar o pagar para una sola persona. Entonces la IA cambió las cuentas, y desde finales de 2023 por fin puedo construir yo solo los mundos que antes solo imaginaba.',
    'studio.story.p3': 'Y son mundos que me apasionan de verdad. Me fascinan la ciencia y la naturaleza — la biología, la astronomía, la paleontología — y fotografío aves en mi tiempo libre. Estos juegos son mi forma de unir esas pasiones y de compartir un mundo natural que casi nunca llegamos a conocer. El primero tomó forma al otro lado del planeta, durante una luna de miel que tuvimos la suerte de pasar viviendo tres meses en Asia.',
    'studio.story.mara': 'Y queda un último trocito de casa en todo esto. En enero de 2020 adoptamos a <strong>Mara</strong>, nuestra perra, de una protectora local — una raza a la que se suele dar de lado, que llegó en un estado lamentable y enseguida se hizo familia. El estudio lleva su nombre, y la encontrarás en todo lo que hacemos. 🐾',
    'studio.story.sign': '— Adrián, fundador de Maraverse Games',
    'studio.value.real.t': 'Anclado en lo real',
    'studio.value.real.d': 'Especies reales, ciencia real, asombro real.',
    'studio.value.craft.t': 'Hecho con oficio',
    'studio.value.craft.d': 'Cada imagen revisada para que sea realista.',
    'studio.value.fair.t': 'El jugador primero',
    'studio.value.fair.d': 'Juegos gratuitos y tranquilos, sin patrones oscuros.',
    'studio.value.lang.t': 'Hecho para viajar',
    'studio.value.lang.d': 'Bilingüe desde el primer día (EN · ES).',
    'studio.final.title': 'Empieza por lo salvaje',
    'studio.final.sub': 'Nuestro primer juego está al caer. Échale un vistazo mientras los próximos mundos toman forma.',
    // 404
    'err.title': 'Este sendero no lleva a ningún sitio',
    'err.sub': 'La página que buscas se ha perdido en la espesura.',
    'err.back': 'VOLVER A',
  },
};

/* ---------------- Apply language ---------------- */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!(key in dict)) return;
    if (el.tagName === 'META') el.setAttribute('content', dict[key]);
    else el.innerHTML = dict[key];
  });

  // Swap screenshots to the matching language capture
  document.querySelectorAll('[data-shot]').forEach((img) => {
    img.src = `assets/screens/${img.dataset.shot}-${lang}.webp`;
  });

  // Active state on the toggle
  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.setLang === lang);
  });

  try { localStorage.setItem('wc_lang', lang); } catch (_) {}
}

/* ---------------- Google Play CTA ----------------
   Only the real Google Play buttons carry [data-play]. Studio navigation
   buttons reuse the .store-btn styling but must keep working as links, so we
   scope this strictly to [data-play] and never touch other buttons. */
function wirePlayCta() {
  const note = document.getElementById('cta-note');
  const btns = document.querySelectorAll('[data-play]');
  if (PLAY_STORE_URL) {
    btns.forEach((b) => {
      b.setAttribute('href', PLAY_STORE_URL);
      b.removeAttribute('aria-disabled');
      b.setAttribute('target', '_blank');
      b.setAttribute('rel', 'noopener');
    });
    if (note) note.style.display = 'none';
  } else {
    btns.forEach((b) => {
      b.addEventListener('click', (e) => e.preventDefault());
    });
  }
}

/* ---------------- Marquee ----------------
   A wide, varied set so one loop never feels repetitive. Images load eagerly
   (no lazy) so none "pop in" as the strip scrolls. The track holds two copies
   and animates to -50% for a seamless loop. */
const MARQUEE = [
  'Lion', 'Jaguar', 'PolarBear', 'ScarletMacaw', 'RedPanda', 'Orca', 'Meerkat',
  'SnowLeopard', 'GreenSeaTurtle', 'TocoToucan', 'EmperorPenguin', 'Axolotl',
  'BengalTiger', 'SeaOtter', 'GiantPanda', 'GreaterFlamingo', 'Chimpanzee',
  'Narwhal', 'PantherChameleon', 'AtlanticPuffin', 'Cheetah', 'BlueWhale',
  'RingTailedLemur', 'GreatWhiteShark', 'Koala', 'BaldEagle', 'Reindeer',
  'IndianPeafowl', 'Capybara', 'ArcticFox', 'AfricanBushElephant', 'RedFox',
  'OcellarisClownfish',
];
function buildMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const make = () => MARQUEE.map((n) =>
    `<img src="assets/marquee/${n}.webp" alt="" width="128" height="128" decoding="async" />`).join('');
  track.innerHTML = make() + make(); // duplicate for a seamless loop
}

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildMarquee();
  wirePlayCta();

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.setLang));
  });

  let initial = 'en';
  try {
    initial = localStorage.getItem('wc_lang')
      || ((navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en');
  } catch (_) {}
  applyLang(initial);

  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
});

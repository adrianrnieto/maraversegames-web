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
    'meta.description': 'A free, fully offline mobile card-collecting game. Discover 2,400+ real, hand-reviewed animal species, open packs, complete collections — built on real conservation data from the IUCN Red List.',
    'nav.features': 'Features',
    'nav.learn': 'Learn',
    'nav.conservation': 'Conservation',
    'hero.eyebrow': 'A wildlife card-collecting game',
    'hero.title': 'Collect the wild,<br>one pack at a time.',
    'hero.sub': 'Discover <strong>2,400+ real animal species</strong>, open packs and complete themed collections. <strong>Completely free</strong>, and fully <strong>playable offline</strong> — even in airplane mode.',
    'cta.getiton': 'GET IT ON',
    'cta.soon': '🚀 Launching soon — Android first',
    'hero.badge.free': '100% free',
    'hero.badge.offline': 'Plays fully offline',
    'hero.badge.real': '2,400+ real species',
    'hero.badge.lang': 'English & Español',
    'stat.species': 'real species',
    'stat.collections': 'themed collections',
    'stat.free.v': 'Free',
    'stat.free': '& fully offline',
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
    'edu.scale.d': 'Over 2,400 species — a genuinely huge database, far beyond what most collection games offer, each with its own facts to learn.',
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
    'cons.p2': 'And every level matters. "Least Concern" still means watched; "Near Threatened" and "Vulnerable" species are already slipping away; and far too many are endangered or already gone — most of it driven by human activity and habitat loss. The game even holds a large roster of animals that are <strong>Extinct in the Wild</strong> or <strong>Extinct</strong>.',
    'cons.p3': "It's a small way to put the spotlight on a natural world that needs it — giving a face to species you might otherwise never meet.",
    'cons.lc': 'Least Concern',
    'cons.nt': 'Near Threatened',
    'cons.vu': 'Vulnerable',
    'cons.en': 'Endangered',
    'cons.cr': 'Critically Endangered',
    'cons.ex': 'Extinct / Extinct in the Wild',
    'final.title': 'Start your collection',
    'final.sub': '2,400+ species are waiting — free, offline, on Android first.',
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
    'studio.game.wildlife': 'Discover 2,400+ real animal species, open packs and complete collections — built on real conservation data from the IUCN Red List.',
    'studio.game.view': 'View game →',
    'studio.soon.tile': 'A new world in the making',
    'studio.soon.note': 'More games are in the works. Their worlds are still being dreamed up — stay tuned.',
    'studio.story.eyebrow': 'Our story',
    'studio.story.title': 'Where Maraverse Games comes from',
    'studio.story.p1': 'I\'m a software engineer, and I\'ve been making games since I was 15 — my first ones were little black-and-white games written in C. My final computer-engineering project was my own version of a very famous video game. Life took my career down other paths, but building games never stopped being the thing I loved doing in my spare time.',
    'studio.story.p2': 'What changed everything was AI. Crafting something like The Wildlife Collection — over <strong>2,400 hand-reviewed, realistic animal illustrations</strong> — would have been impossible for one person to draw or pay for. Since late 2023 I\'ve finally been able to bring these worlds to life on my own.',
    'studio.story.p3': "I'm in love with science and nature — biology, astronomy and palaeontology — and I'm an amateur bird photographer. These games are my way of weaving those passions together, and of giving visibility to a natural world most of us never get to meet. The idea first took shape during our honeymoon, when we were lucky enough to live in Asia for three months.",
    'studio.story.mara': "🐾 And the name? In January 2020 we adopted <strong>Mara</strong>, our dog, from a local shelter — a breed people too often overlook, and she arrived in a sad state. She's become a huge part of our life, so the studio carries her name. You'll find her on everything we make.",
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
    'meta.description': 'Un juego de cartas gratuito y sin conexión. Descubre más de 2.400 especies reales y revisadas, abre sobres y completa colecciones — basado en datos reales de conservación de la Lista Roja de la UICN.',
    'nav.features': 'Características',
    'nav.learn': 'Aprende',
    'nav.conservation': 'Conservación',
    'hero.eyebrow': 'Un juego de cartas de vida salvaje',
    'hero.title': 'Colecciona lo salvaje,<br>sobre a sobre.',
    'hero.sub': 'Descubre <strong>más de 2.400 especies reales</strong>, abre sobres y completa colecciones temáticas. <strong>Totalmente gratis</strong> y <strong>jugable sin conexión</strong> — incluso en modo avión.',
    'cta.getiton': 'DISPONIBLE EN',
    'cta.soon': '🚀 Próximamente — primero en Android',
    'hero.badge.free': '100% gratis',
    'hero.badge.offline': 'Juega sin conexión',
    'hero.badge.real': 'Más de 2.400 especies reales',
    'hero.badge.lang': 'Inglés y Español',
    'stat.species': 'especies reales',
    'stat.collections': 'colecciones temáticas',
    'stat.free.v': 'Gratis',
    'stat.free': 'y sin conexión',
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
    'edu.scale.d': 'Más de 2.400 especies — una base de datos enorme de verdad, muy por encima de lo que ofrecen la mayoría de juegos de colección, cada una con sus propios datos para aprender.',
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
    'cons.p2': 'Y todos los niveles importan. «Preocupación Menor» sigue significando bajo vigilancia; las especies «Casi Amenazadas» y «Vulnerables» ya están desapareciendo poco a poco; y demasiadas están en peligro o ya se han perdido — casi siempre por la actividad humana y la pérdida de hábitat. El juego incluso reúne un buen grupo de animales <strong>Extintos en Estado Silvestre</strong> o <strong>Extintos</strong>.',
    'cons.p3': 'Es una pequeña manera de poner el foco en un mundo natural que lo necesita — dando rostro a especies que de otro modo quizá nunca conocerías.',
    'cons.lc': 'Preocupación Menor',
    'cons.nt': 'Casi Amenazada',
    'cons.vu': 'Vulnerable',
    'cons.en': 'En Peligro',
    'cons.cr': 'En Peligro Crítico',
    'cons.ex': 'Extinto / Extinto en estado silvestre',
    'final.title': 'Empieza tu colección',
    'final.sub': 'Más de 2.400 especies te esperan — gratis, sin conexión y primero en Android.',
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
    'studio.game.wildlife': 'Descubre más de 2.400 especies reales, abre sobres y completa colecciones — basado en datos reales de conservación de la Lista Roja de la UICN.',
    'studio.game.view': 'Ver juego →',
    'studio.soon.tile': 'Un nuevo mundo en construcción',
    'studio.soon.note': 'Hay más juegos en marcha. Sus mundos todavía se están imaginando — muy pronto sabrás más.',
    'studio.story.eyebrow': 'Nuestra historia',
    'studio.story.title': 'De dónde nace Maraverse Games',
    'studio.story.p1': 'Soy ingeniero de software y llevo haciendo juegos desde los 15 años — los primeros eran pequeños juegos en blanco y negro programados en C. Mi proyecto de fin de carrera de ingeniería informática fue mi propia versión de un videojuego muy famoso. La vida laboral me llevó por otros caminos, pero crear juegos nunca dejó de ser lo que más me gustaba hacer en mi tiempo libre.',
    'studio.story.p2': 'Lo que lo cambió todo fue la IA. Crear algo como The Wildlife Collection — más de <strong>2.400 ilustraciones de animales realistas y revisadas a mano</strong> — habría sido imposible de dibujar o pagar para una sola persona. Desde finales de 2023 por fin puedo dar vida a estos mundos yo solo.',
    'studio.story.p3': 'Me apasionan la ciencia y la naturaleza — la biología, la astronomía y la paleontología — y soy fotógrafo aficionado de aves. Estos juegos son mi manera de unir esas pasiones, y de dar visibilidad a un mundo natural que casi nunca llegamos a conocer. La idea tomó forma durante nuestra luna de miel, cuando tuvimos la suerte de vivir tres meses en Asia.',
    'studio.story.mara': '🐾 ¿Y el nombre? En enero de 2020 adoptamos a <strong>Mara</strong>, nuestra perra, de una protectora local — una raza a la que la gente demasiadas veces da de lado, y que llegó en un estado lamentable. Se ha convertido en una parte enorme de nuestra vida, así que el estudio lleva su nombre. La encontrarás en todo lo que hacemos.',
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

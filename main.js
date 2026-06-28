/* =========================================================================
   The Wildlife Collection — landing interactions
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
    'meta.description': 'A mobile card-collecting game. Discover 2,400+ real animal species, open packs, complete collections — all built on genuine IUCN conservation data.',
    'nav.features': 'Features',
    'nav.screens': 'Screens',
    'nav.conservation': 'Conservation',
    'hero.eyebrow': 'A wildlife card-collecting game',
    'hero.title': 'Collect the wild,<br>one pack at a time.',
    'hero.sub': 'Discover <strong>2,400+ real animal species</strong>, open packs, trade duplicates up, and complete themed collections — every card built on genuine IUCN conservation data.',
    'cta.getiton': 'GET IT ON',
    'cta.soon': '🚀 Launching soon — Android first',
    'hero.badge.real': 'Real species',
    'hero.badge.offline': 'Plays offline',
    'hero.badge.free': 'Free to play',
    'hero.badge.lang': 'English & Español',
    'stat.species': 'real species',
    'stat.collections': 'themed collections',
    'stat.iucn': 'real conservation data',
    'stat.lang': 'fully bilingual',
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
    'feat.foils.t': 'Foils & variants',
    'feat.foils.d': 'Chase Silver, Gold and Rainbow foils, plus rare alternate artwork like the Black Panther morph of the Jaguar.',
    'feat.iucn.t': 'Real conservation data',
    'feat.iucn.d': 'Every species carries its genuine IUCN Red List status, which drives its rarity and in-game value.',
    'screens.title': 'See it in action',
    'screens.lead': 'Real screens, captured straight from the app.',
    'g.home': 'Daily dashboard',
    'g.album': 'Your album',
    'g.pack': 'Pack reveal',
    'g.card': 'Card detail',
    'g.collections': 'Collections',
    'g.profile': 'Your profile',
    'cons.eyebrow': 'Built on real data',
    'cons.title': 'Every card tells a real story',
    'cons.p1': "Rarity here isn't made up. Each species carries its real <strong>IUCN Red List status</strong> — from Least Concern to Critically Endangered, Extinct in the Wild, and Extinct — and that status decides how rare the card is and what it's worth.",
    'cons.p2': "Collect a Critically Endangered card and you're holding a species that's genuinely vanishing from our planet. It's a game that quietly teaches you the natural world while you play.",
    'cons.lc': 'Least Concern',
    'cons.nt': 'Near Threatened',
    'cons.vu': 'Vulnerable',
    'cons.en': 'Endangered',
    'cons.cr': 'Critically Endangered',
    'cons.ex': 'Extinct',
    'final.title': 'Start your collection',
    'final.sub': '2,400+ species are waiting to be discovered. Android first, more platforms to follow.',
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
    'studio.sub': "We're <strong>Maraverse Games</strong> — a small studio crafting collection and adventure games across real and imagined worlds. Our first journey: wildlife. Next stops: the cosmos, the age of dinosaurs, and a fantasy realm of our own.",
    'studio.cta.small': 'OUR FIRST GAME',
    'studio.games.title': 'Our games',
    'studio.games.lead': 'One world almost here, and more already taking shape.',
    'studio.status.soon': 'Coming soon · Android',
    'studio.status.dev': 'In the works',
    'studio.game.wildlife': 'Discover 2,400+ real animal species, open packs and complete collections — built on genuine IUCN conservation data.',
    'studio.game.view': 'View game →',
    'studio.game.cosmos.t': 'The Cosmos Collection',
    'studio.game.cosmos.d': 'Collect the night sky — planets, moons, and deep-space wonders.',
    'studio.game.dino.t': 'The Dinosaur Collection',
    'studio.game.dino.d': 'Bring the age of dinosaurs back to your album, one card at a time.',
    'studio.game.fantasy.t': 'A Fantasy World',
    'studio.game.fantasy.d': 'An original realm of our own — collection meets adventure.',
    'studio.about.eyebrow': 'About the studio',
    'studio.about.title': 'Small studio, big worlds',
    'studio.about.p1': 'Maraverse Games is an independent studio that builds beautiful, respectful games about the things worth knowing — real wildlife, the night sky, the deep past, and worlds we dream up ourselves.',
    'studio.about.p2': 'We care about craft: genuine data, hand-tuned art, and a daily loop that feels good to come back to. No dark patterns, no clutter — just the quiet joy of filling a collection.',
    'studio.about.p3': "🐾 The name carries a little piece of home: <strong>Mara</strong>, our dog — and the mark you'll find on everything we make.",
    'studio.value.real.t': 'Rooted in reality',
    'studio.value.real.d': 'Real species, real science, real wonder.',
    'studio.value.craft.t': 'Made with craft',
    'studio.value.craft.d': 'Considered art and design in every screen.',
    'studio.value.fair.t': 'Player-first',
    'studio.value.fair.d': 'Fair, calm games — no dark patterns.',
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
    'meta.description': 'Un juego móvil de colección de cartas. Descubre más de 2.400 especies reales, abre sobres y completa colecciones — todo basado en datos reales de conservación de la UICN.',
    'nav.features': 'Características',
    'nav.screens': 'Pantallas',
    'nav.conservation': 'Conservación',
    'hero.eyebrow': 'Un juego de cartas de vida salvaje',
    'hero.title': 'Colecciona lo salvaje,<br>sobre a sobre.',
    'hero.sub': 'Descubre <strong>más de 2.400 especies reales</strong>, abre sobres, mejora tus duplicados y completa colecciones temáticas — cada carta basada en datos reales de conservación de la UICN.',
    'cta.getiton': 'DISPONIBLE EN',
    'cta.soon': '🚀 Próximamente — primero en Android',
    'hero.badge.real': 'Especies reales',
    'hero.badge.offline': 'Funciona sin conexión',
    'hero.badge.free': 'Gratis',
    'hero.badge.lang': 'Inglés y Español',
    'stat.species': 'especies reales',
    'stat.collections': 'colecciones temáticas',
    'stat.iucn': 'datos reales de conservación',
    'stat.lang': 'totalmente bilingüe',
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
    'feat.foils.t': 'Foils y variantes',
    'feat.foils.d': 'Persigue foils Plata, Oro y Arcoíris, además de ilustraciones alternativas raras como la pantera negra del jaguar.',
    'feat.iucn.t': 'Datos reales de conservación',
    'feat.iucn.d': 'Cada especie lleva su estado real en la Lista Roja de la UICN, que determina su rareza y su valor en el juego.',
    'screens.title': 'Míralo en acción',
    'screens.lead': 'Pantallas reales, capturadas directamente de la app.',
    'g.home': 'Panel diario',
    'g.album': 'Tu álbum',
    'g.pack': 'Apertura de sobre',
    'g.card': 'Detalle de carta',
    'g.collections': 'Colecciones',
    'g.profile': 'Tu perfil',
    'cons.eyebrow': 'Basado en datos reales',
    'cons.title': 'Cada carta cuenta una historia real',
    'cons.p1': 'La rareza aquí no es inventada. Cada especie lleva su <strong>estado real en la Lista Roja de la UICN</strong> — de Preocupación Menor a En Peligro Crítico, Extinto en Estado Silvestre y Extinto — y ese estado decide lo rara que es la carta y cuánto vale.',
    'cons.p2': 'Consigue una carta En Peligro Crítico y tendrás en tus manos una especie que de verdad está desapareciendo de nuestro planeta. Un juego que te enseña el mundo natural mientras juegas.',
    'cons.lc': 'Preocupación Menor',
    'cons.nt': 'Casi Amenazada',
    'cons.vu': 'Vulnerable',
    'cons.en': 'En Peligro',
    'cons.cr': 'En Peligro Crítico',
    'cons.ex': 'Extinto',
    'final.title': 'Empieza tu colección',
    'final.sub': 'Más de 2.400 especies esperan ser descubiertas. Primero en Android, más plataformas en camino.',
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
    'studio.sub': 'Somos <strong>Maraverse Games</strong>, un estudio pequeño que crea juegos de colección y aventura en mundos reales e imaginados. Nuestro primer viaje: la fauna. Próximas paradas: el cosmos, la era de los dinosaurios y un reino de fantasía propio.',
    'studio.cta.small': 'NUESTRO PRIMER JUEGO',
    'studio.games.title': 'Nuestros juegos',
    'studio.games.lead': 'Un mundo a punto de llegar, y más ya tomando forma.',
    'studio.status.soon': 'Próximamente · Android',
    'studio.status.dev': 'En desarrollo',
    'studio.game.wildlife': 'Descubre más de 2.400 especies reales, abre sobres y completa colecciones — basado en datos reales de conservación de la UICN.',
    'studio.game.view': 'Ver juego →',
    'studio.game.cosmos.t': 'The Cosmos Collection',
    'studio.game.cosmos.d': 'Colecciona el cielo nocturno: planetas, lunas y maravillas del espacio profundo.',
    'studio.game.dino.t': 'The Dinosaur Collection',
    'studio.game.dino.d': 'Trae de vuelta la era de los dinosaurios a tu álbum, carta a carta.',
    'studio.game.fantasy.t': 'Un mundo de fantasía',
    'studio.game.fantasy.d': 'Un reino original nuestro — la colección se encuentra con la aventura.',
    'studio.about.eyebrow': 'Sobre el estudio',
    'studio.about.title': 'Estudio pequeño, mundos enormes',
    'studio.about.p1': 'Maraverse Games es un estudio independiente que crea juegos bonitos y respetuosos sobre lo que merece la pena conocer: fauna real, el cielo nocturno, el pasado remoto y mundos que imaginamos nosotros mismos.',
    'studio.about.p2': 'Nos importa el oficio: datos genuinos, arte cuidado al detalle y un bucle diario al que apetece volver. Sin patrones oscuros, sin ruido — solo la calma de ir llenando una colección.',
    'studio.about.p3': '🐾 El nombre lleva un trocito de casa: <strong>Mara</strong>, nuestra perra — y la marca que encontrarás en todo lo que hacemos.',
    'studio.value.real.t': 'Anclado en lo real',
    'studio.value.real.d': 'Especies reales, ciencia real, asombro real.',
    'studio.value.craft.t': 'Hecho con oficio',
    'studio.value.craft.d': 'Arte y diseño cuidados en cada pantalla.',
    'studio.value.fair.t': 'El jugador primero',
    'studio.value.fair.d': 'Juegos justos y tranquilos, sin patrones oscuros.',
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

/* ---------------- Google Play CTA ---------------- */
function wirePlayCta() {
  const note = document.getElementById('cta-note');
  const btns = document.querySelectorAll('.store-btn');
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

/* ---------------- Marquee ---------------- */
const MARQUEE = [
  'Lion', 'AfricanBushElephant', 'BengalTiger', 'Jaguar', 'BlueWhale',
  'ArcticFox', 'Koala', 'BactrianCamel', 'LearsMacaw', 'OcellarisClownfish',
  'AfricanWildDog', 'AbyssinianGroundHornbill',
];
function buildMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const make = () => MARQUEE.map((n) =>
    `<img src="assets/marquee/${n}.webp" alt="" width="92" height="92" loading="lazy" />`).join('');
  track.innerHTML = make() + make(); // duplicate for seamless loop
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

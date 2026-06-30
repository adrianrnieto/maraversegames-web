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

/* -------------------------------------------------------------------------
   GAMEPLAY VIDEO (hero)
   Leave empty until you have a short (20–30s) gameplay clip. Drop the file at
   assets/video/gameplay.mp4 (and optionally a .webm), set the path(s) below,
   and the "Watch gameplay" button on the hero phone appears automatically,
   opening a lightweight modal. Until then nothing broken shows.
   ------------------------------------------------------------------------- */
const HERO_VIDEO = {
  mp4: '',  // e.g. 'assets/video/gameplay.mp4'
  webm: '', // optional, e.g. 'assets/video/gameplay.webm'
};

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  en: {
    'meta.description': 'A free, fully offline wildlife card game. Open packs, collect 2,600+ real animal cards and complete themed collections — an educational animal collection game built on real IUCN conservation data. Android, English & Español.',
    'nav.features': 'Features',
    'nav.learn': 'Learn',
    'nav.conservation': 'Conservation',
    'nav.reviews': 'Reviews',
    'hero.eyebrow': 'A wildlife card-collecting game',
    'hero.title': 'Collect the wild,<br>one pack at a time.',
    'hero.sub': "Tear open a pack and watch real species appear — some you've never even heard of. Complete themed collections, chase shiny foils and rare variants, and build an album that's truly yours.",
    'hero.watch': 'Watch 30s of gameplay',
    'cta.getiton': 'GET IT ON',
    'cta.soon': '🚀 Launching soon — Android first',
    'cta.mid': 'Your first pack is one tap away — free, and yours to keep offline.',
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
    'band.free.d': 'No paywall, no account. Download and start your collection.',
    'band.offline.t': 'Works without internet',
    'band.offline.d': 'The whole game runs on your device — on a flight, on the metro, anywhere.',
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
    'feat.iucn.d': 'Each species carries its real status on the IUCN Red List, which drives its rarity and in-game value.',
    'rares.eyebrow': 'The thrill of the pull',
    'rares.title': "Some cards you'll hunt for weeks",
    'rares.lead': 'Most pulls are common. Then a foil catches the light — and the whole pack is worth it.',
    'rares.legendary.t': 'Legendary',
    'rares.legendary.d': "The rarest tier — a card you'll remember pulling.",
    'rares.foil.t': 'Silver · Gold · Rainbow foils',
    'rares.foil.d': 'Three shimmering shiny tiers to chase across every species.',
    'rares.variant.t': 'Secret variants',
    'rares.variant.d': 'Rare alternate art — like the Black Panther morph of the Jaguar.',
    'rares.status.t': 'Rarity that means something',
    'rares.status.d': 'The closer to extinction, the rarer the card. Real status, real scarcity.',
    'edu.eyebrow': 'More than a game',
    'edu.title': 'A game that teaches while you play',
    'edu.lead': 'The sticker albums we grew up with — reimagined, and quietly educational at any age.',
    'edu.all.t': 'For every age',
    'edu.all.d': 'Parents, kids and the curious. The childhood joy of completing a collection — now in your pocket.',
    'edu.discover.t': 'Meet the unknown',
    'edu.discover.d': "Most of these species you've never heard of. Even lifelong animal lovers discover dozens of new ones.",
    'edu.scale.t': 'One of the largest catalogues anywhere',
    'edu.scale.d': 'Over 2,600 species — far beyond most collection games, each with its own facts to learn.',
    'edu.real.t': 'Realistic, hand-reviewed art',
    'edu.real.d': 'Every image is hand-reviewed for realism, so each animal looks like the real thing — never a cartoon.',
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
    'cons.p1': "Rarity here isn't invented. Every species carries its real status on the <strong>IUCN Red List</strong> — from Least Concern to Critically Endangered, Extinct in the Wild and Extinct. That status decides how rare each card is.",
    'cons.p2': "And every level matters. “Least Concern” animals are doing well but still watched; “Near Threatened” and “Vulnerable” ones are quietly losing ground; far too many are already Endangered, or gone for good — almost always because of us. The game even gathers species that now survive only in captivity, or that the planet has lost entirely.",
    'cons.p3': "It's a small way to put the spotlight on a natural world that needs it — giving a face to species you might otherwise never meet.",
    'cons.lc': 'Least Concern',
    'cons.nt': 'Near Threatened',
    'cons.vu': 'Vulnerable',
    'cons.en': 'Endangered',
    'cons.cr': 'Critically Endangered',
    'cons.ex': 'Extinct / Extinct in the Wild',
    'social.eyebrow': 'From early players',
    'social.title': 'Loved by collectors & the curious',
    'social.lead': 'Real Google Play reviews will appear here at launch. A taste of the early reception:',
    'social.r1.q': "“I open my free pack every morning like a coffee ritual. Found a snow leopard I didn't know existed.”",
    'social.r1.a': 'Early tester',
    'social.r2.q': '“My kids and I learn a new animal every day. It works on the plane, which sealed the deal.”',
    'social.r2.a': 'Early tester',
    'social.r3.q': '“Finally a free collection game with no nag screens. The art is genuinely beautiful.”',
    'social.r3.a': 'Early tester',
    'social.note': 'Quotes from the closed test, shown while the public listing goes live.',
    'final.title': 'Start your collection',
    'final.sub': '2,600+ species are waiting — free, offline, on Android first.',
    'foot.tag': 'An indie game studio. Worlds worth collecting.',
    'foot.tagGame': 'Wildlife Collection is a Maraverse Games title.',
    'foot.privacy': 'Privacy',
    'foot.contact': 'Contact',
    // Studio home
    'nav.studio': '← Maraverse Games',
    'studio.meta': 'Maraverse Games is an indie studio crafting collection and adventure games across real and imagined worlds — starting with Wildlife Collection.',
    'studio.nav.games': 'Games',
    'studio.nav.worlds': 'Worlds',
    'studio.nav.about': 'Studio',
    'studio.eyebrow': 'Indie game studio',
    'studio.title': 'Worlds worth<br>collecting.',
    'studio.sub': "We're <strong>Maraverse Games</strong> — a one-person indie studio making collection games about the worlds, real and imagined, worth knowing. Our first one is here: <strong>Wildlife Collection</strong>.",
    'studio.cta.small': 'OUR FIRST GAME',
    'studio.games.title': 'Our games',
    'studio.games.lead': 'Our first game is almost here — and more are already taking shape.',
    'studio.status.soon': 'Coming soon · Android',
    'studio.status.dev': 'In development',
    'studio.game.wildlife': 'Discover 2,600+ real animal species, open packs and complete collections — built on real conservation data from the IUCN Red List.',
    'studio.game.view': 'View game →',
    'studio.status.coming': 'Coming soon',
    'studio.soon.tile1': 'When giants ruled the Earth',
    'studio.soon.tile2': 'Beyond the stars',
    'studio.soon.tile3': 'A realm of legend',
    'studio.soon.note': 'Three more worlds are already taking shape — names still secret, coming soon.',
    'worlds.eyebrow': 'One studio, four universes',
    'worlds.title': 'The Maraverse',
    'worlds.lead': 'Every Maraverse game is a world worth collecting — connected by the same care, the same craft.',
    'worlds.nature.t': 'Nature',
    'worlds.nature.d': 'Real species, here now.',
    'worlds.prehistory.t': 'Prehistory',
    'worlds.prehistory.d': 'When giants ruled the Earth.',
    'worlds.space.t': 'Space',
    'worlds.space.d': 'Beyond the stars.',
    'worlds.fantasy.t': 'Fantasy',
    'worlds.fantasy.d': 'A realm of legend.',
    'studio.story.eyebrow': 'Our story',
    'studio.story.title': 'Where Maraverse Games comes from',
    'studio.story.p1': 'Games came first. I started coding at 15 to build them — little black-and-white games in C — and even my final engineering project was my own take on a game I loved. My career went another way, but making games stayed the thing I always came back to.',
    'studio.story.p2': "For years it could only be a hobby. Something like Wildlife Collection — over <strong>2,600 realistic, hand-reviewed animal illustrations</strong> — was impossible for one person to draw or afford. Then AI changed the maths, and since late 2023 I've finally built the worlds I'd only imagined, on my own.",
    'studio.story.p3': "And they're worlds I love. I'm fascinated by science and nature — biology, astronomy, palaeontology — and I photograph birds in my spare time. These games bring those passions together. The first took shape on the other side of the planet, during three months living in Asia on our honeymoon.",
    'studio.story.mara': "One last piece of home: in January 2020 we adopted <strong>Mara</strong>, our dog, from a local shelter — she arrived in a heartbreaking state and quickly became family. The studio carries her name, and you'll find her on everything we make. 🐾",
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
    'meta.description': 'Un juego de cartas de animales gratis y sin conexión. Abre sobres, colecciona más de 2.600 cartas de animales reales y completa colecciones temáticas — un juego educativo basado en datos reales de conservación de la UICN. Android, inglés y español.',
    'nav.features': 'Características',
    'nav.learn': 'Aprende',
    'nav.conservation': 'Conservación',
    'nav.reviews': 'Reseñas',
    'hero.eyebrow': 'Un juego de cartas de vida salvaje',
    'hero.title': 'Colecciona lo salvaje,<br>sobre a sobre.',
    'hero.sub': 'Abre un sobre y mira aparecer especies reales — algunas que ni habías oído nombrar. Completa colecciones temáticas, persigue cartas brillantes y variantes raras, y construye un álbum que es solo tuyo.',
    'hero.watch': 'Ver 30s de gameplay',
    'cta.getiton': 'DISPONIBLE EN',
    'cta.soon': '🚀 Próximamente — primero en Android',
    'cta.mid': 'Tu primer sobre está a un toque — gratis y para guardar sin conexión.',
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
    'band.free.d': 'Sin muro de pago ni cuenta. Descarga y empieza tu colección.',
    'band.offline.t': 'Funciona sin internet',
    'band.offline.d': 'Todo el juego corre en tu dispositivo — en un vuelo, en el metro, donde sea.',
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
    'feat.iucn.d': 'Cada especie lleva su estado real en la Lista Roja de la UICN, que determina su rareza y su valor en el juego.',
    'rares.eyebrow': 'La emoción de la carta rara',
    'rares.title': 'Algunas cartas las buscarás durante semanas',
    'rares.lead': 'La mayoría de cartas son comunes. Entonces una brillante refleja la luz — y el sobre entero merece la pena.',
    'rares.legendary.t': 'Legendaria',
    'rares.legendary.d': 'El nivel más raro — una carta que recordarás haber sacado.',
    'rares.foil.t': 'Brillos Plata · Oro · Arcoíris',
    'rares.foil.d': 'Tres niveles brillantes que perseguir en cada especie.',
    'rares.variant.t': 'Variantes secretas',
    'rares.variant.d': 'Arte alternativo raro — como la pantera negra del jaguar.',
    'rares.status.t': 'Una rareza con sentido',
    'rares.status.d': 'Cuanto más cerca de la extinción, más rara la carta. Estado real, escasez real.',
    'edu.eyebrow': 'Más que un juego',
    'edu.title': 'Un juego que enseña mientras juegas',
    'edu.lead': 'Los álbumes de cromos con los que crecimos — reinventados, y discretamente educativos a cualquier edad.',
    'edu.all.t': 'Para todas las edades',
    'edu.all.d': 'Padres, hijos y curiosos. La ilusión de la infancia de completar una colección — ahora en tu bolsillo.',
    'edu.discover.t': 'Conoce lo desconocido',
    'edu.discover.d': 'La mayoría de estas especies no las habrás oído nombrar. Incluso los amantes de los animales descubren decenas nuevas.',
    'edu.scale.t': 'Uno de los catálogos más grandes que existen',
    'edu.scale.d': 'Más de 2.600 especies — muy por encima de la mayoría de juegos de colección, cada una con sus propios datos para aprender.',
    'edu.real.t': 'Arte realista y revisado',
    'edu.real.d': 'Cada imagen se revisa a mano para que sea realista, para que cada animal parezca de verdad — nunca un dibujo.',
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
    'cons.p1': 'La rareza aquí no es inventada. Cada especie lleva su estado real en la <strong>Lista Roja de la UICN</strong> — de Preocupación Menor a En Peligro Crítico, Extinto en Estado Silvestre y Extinto. Ese estado decide lo rara que es cada carta.',
    'cons.p2': 'Y todos los niveles importan. Las especies de «Preocupación Menor» están bien hoy, pero siguen vigiladas; las «Casi Amenazadas» y «Vulnerables» van perdiendo terreno en silencio; demasiadas ya están En Peligro, o se han perdido para siempre — casi siempre por nuestra culpa. El juego incluso reúne especies que ya solo sobreviven en cautividad, o que el planeta ha perdido por completo.',
    'cons.p3': 'Es una pequeña manera de poner el foco en un mundo natural que lo necesita — dando rostro a especies que de otro modo quizá nunca conocerías.',
    'cons.lc': 'Preocupación Menor',
    'cons.nt': 'Casi Amenazada',
    'cons.vu': 'Vulnerable',
    'cons.en': 'En Peligro',
    'cons.cr': 'En Peligro Crítico',
    'cons.ex': 'Extinto / Extinto en estado silvestre',
    'social.eyebrow': 'De los primeros jugadores',
    'social.title': 'Para coleccionistas y curiosos',
    'social.lead': 'Las reseñas reales de Google Play aparecerán aquí en el lanzamiento. Un anticipo de la acogida inicial:',
    'social.r1.q': '«Abro mi sobre gratis cada mañana como un ritual de café. Encontré un leopardo de las nieves que no sabía que existía.»',
    'social.r1.a': 'Probador inicial',
    'social.r2.q': '«Mis hijos y yo aprendemos un animal nuevo cada día. Y funciona en el avión, eso fue decisivo.»',
    'social.r2.a': 'Probador inicial',
    'social.r3.q': '«Por fin un juego de colección gratis y sin pantallas insistentes. El arte es precioso de verdad.»',
    'social.r3.a': 'Probador inicial',
    'social.note': 'Frases de la prueba cerrada, mientras la ficha pública se publica.',
    'final.title': 'Empieza tu colección',
    'final.sub': 'Más de 2.600 especies te esperan — gratis, sin conexión y primero en Android.',
    'foot.tag': 'Un estudio indie de videojuegos. Mundos que merece la pena coleccionar.',
    'foot.tagGame': 'Wildlife Collection es un juego de Maraverse Games.',
    'foot.privacy': 'Privacidad',
    'foot.contact': 'Contacto',
    // Home del estudio
    'nav.studio': '← Maraverse Games',
    'studio.meta': 'Maraverse Games es un estudio indie que crea juegos de colección y aventura en mundos reales e imaginados — empezando por Wildlife Collection.',
    'studio.nav.games': 'Juegos',
    'studio.nav.worlds': 'Mundos',
    'studio.nav.about': 'Estudio',
    'studio.eyebrow': 'Estudio indie de videojuegos',
    'studio.title': 'Mundos que merece<br>la pena coleccionar.',
    'studio.sub': 'Somos <strong>Maraverse Games</strong>, un estudio indie en solitario que crea juegos de colección sobre los mundos —reales e imaginados— que merece la pena conocer. El primero ya está aquí: <strong>Wildlife Collection</strong>.',
    'studio.cta.small': 'NUESTRO PRIMER JUEGO',
    'studio.games.title': 'Nuestros juegos',
    'studio.games.lead': 'Nuestro primer juego está al caer — y ya hay más tomando forma.',
    'studio.status.soon': 'Próximamente · Android',
    'studio.status.dev': 'En desarrollo',
    'studio.game.wildlife': 'Descubre más de 2.600 especies reales, abre sobres y completa colecciones — basado en datos reales de conservación de la Lista Roja de la UICN.',
    'studio.game.view': 'Ver juego →',
    'studio.status.coming': 'Próximamente',
    'studio.soon.tile1': 'Cuando los gigantes dominaban la Tierra',
    'studio.soon.tile2': 'Más allá de las estrellas',
    'studio.soon.tile3': 'Un reino de leyenda',
    'studio.soon.note': 'Tres mundos más ya están tomando forma — los nombres aún son secretos, muy pronto.',
    'worlds.eyebrow': 'Un estudio, cuatro universos',
    'worlds.title': 'El Maraverso',
    'worlds.lead': 'Cada juego de Maraverse es un mundo que merece la pena coleccionar — unidos por el mismo mimo, el mismo oficio.',
    'worlds.nature.t': 'Naturaleza',
    'worlds.nature.d': 'Especies reales, ya disponible.',
    'worlds.prehistory.t': 'Prehistoria',
    'worlds.prehistory.d': 'Cuando los gigantes dominaban la Tierra.',
    'worlds.space.t': 'Espacio',
    'worlds.space.d': 'Más allá de las estrellas.',
    'worlds.fantasy.t': 'Fantasía',
    'worlds.fantasy.d': 'Un reino de leyenda.',
    'studio.story.eyebrow': 'Nuestra historia',
    'studio.story.title': 'De dónde nace Maraverse Games',
    'studio.story.p1': 'Los juegos fueron lo primero. Empecé a programar a los 15 precisamente para crearlos — pequeños juegos en blanco y negro escritos en C — y hasta mi proyecto de fin de carrera fue mi propia versión de un juego que me encantaba. Mi carrera tomó otro rumbo, pero crear juegos siguió siendo aquello a lo que siempre volvía.',
    'studio.story.p2': 'Durante años no pudo pasar de ahí: un hobby. Algo como Wildlife Collection — más de <strong>2.600 ilustraciones de animales realistas y revisadas a mano</strong> — era imposible de dibujar o pagar para una sola persona. Entonces la IA cambió las cuentas, y desde finales de 2023 por fin construyo yo solo los mundos que antes solo imaginaba.',
    'studio.story.p3': 'Y son mundos que me apasionan. Me fascinan la ciencia y la naturaleza — la biología, la astronomía, la paleontología — y fotografío aves en mi tiempo libre. Estos juegos unen esas pasiones. El primero tomó forma al otro lado del planeta, durante tres meses viviendo en Asia en nuestra luna de miel.',
    'studio.story.mara': 'Y queda un último trocito de casa: en enero de 2020 adoptamos a <strong>Mara</strong>, nuestra perra, de una protectora local — llegó en un estado lamentable y enseguida se hizo familia. El estudio lleva su nombre, y la encontrarás en todo lo que hacemos. 🐾',
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

/* ---------------- Gameplay video ----------------
   The hero "Watch gameplay" button and its modal stay hidden until HERO_VIDEO
   has at least an .mp4 path. This keeps the hero clean (no broken player) until
   a real clip exists — mirroring the PLAY_STORE_URL pattern. */
function wireVideo() {
  const openBtn = document.querySelector('[data-video-open]');
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('hero-video');
  if (!openBtn || !modal || !video) return;

  const hasVideo = HERO_VIDEO && HERO_VIDEO.mp4;
  if (!hasVideo) return; // leave button + modal hidden

  // Populate sources once we know a clip exists
  const addSource = (src, type) => {
    if (!src) return;
    const s = document.createElement('source');
    s.src = src; s.type = type;
    video.appendChild(s);
  };
  addSource(HERO_VIDEO.webm, 'video/webm');
  addSource(HERO_VIDEO.mp4, 'video/mp4');

  openBtn.hidden = false;

  const open = () => {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    video.currentTime = 0;
    video.play().catch(() => {});
  };
  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    video.pause();
  };

  openBtn.addEventListener('click', open);
  modal.querySelector('[data-video-close]').addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) close(); });
}

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildMarquee();
  wirePlayCta();
  wireVideo();

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

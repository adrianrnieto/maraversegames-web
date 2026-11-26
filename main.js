/* =========================================================================
   Maraverse Games — site interactions (shared by all pages)
   ========================================================================= */

/* -------------------------------------------------------------------------
   GOOGLE PLAY LINK
   The store listing is live: every "Get it on Google Play" button points here
   and the "Launching soon" note stays hidden. Clearing this string reverts the
   buttons to the pre-launch (disabled + "Launching soon") state.
   ------------------------------------------------------------------------- */
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.maraversegames.wildlifecollection';

/* ---------------- i18n dictionary ----------------
   en and es are complete. fr and pt (Brazilian Portuguese, <html lang="pt-BR">)
   follow the game's glossary (Wildlifecollection docs/glossary.md and
   src/i18n/locales/{fr,pt}.ts): foil card = carte brillante / carta brilhante,
   pack = paquet / pacote, badge = succès / conquista, quest = quête / missão.

   TODO(facts): keys whose content is a number or a specific feature claim are
   NOT in fr / pt yet; they fall back to English until they are rewritten from
   the game's facts sheet (and en / es updated with them):
     hero.badge.real, hero.badge.lang, stat.lang, feat.packs.d, feat.streaks.d,
     feat.foils.d, feat.trivia.d, rares.foil.d, edu.scale.d, studio.value.lang.d
   The fr / pt page titles, meta / OG descriptions, final.sub,
   studio.game.wildlife and studio.story.p2 are written without the species
   count for the same reason: add it back in phase 2.
   The numbers in the stats strip (3,500+, 20+, EN · ES) are hard-coded in
   the-wildlife-collection.html, also TODO(facts). */
const I18N = {
  en: {
    'page.title': 'Wildlife Collection — Free Wildlife Card Game · Collect 3,500+ Real Animals',
    'og.title': 'Wildlife Collection — Free Wildlife Card Game',
    'og.description': 'Open packs, collect 3,500+ real animal cards and complete collections. Free, fully offline, built on real IUCN conservation data.',
    'studio.page.title': 'Maraverse Games — Indie Studio · Worlds Worth Collecting',
    'studio.og.title': 'Maraverse Games — Worlds worth collecting',
    'studio.og.description': 'A one-person indie studio crafting collection games across real and imagined worlds — starting with Wildlife Collection.',
    'meta.description': 'A free, fully offline wildlife card game. Open packs, collect 3,500+ real animal cards and complete themed collections — an educational animal collection game built on real IUCN conservation data. Android, English & Español.',
    'nav.features': 'Features',
    'nav.learn': 'Learn',
    'nav.conservation': 'Conservation',
    'nav.reviews': 'Reviews',
    'hero.eyebrow': 'A wildlife card-collecting game',
    'hero.title': 'Collect the wild,<br>one pack at a time.',
    'hero.sub': "Tear open a pack and watch real species appear — some you've never even heard of. Complete themed collections, chase foil cards and rare variants, and build an album that's truly yours.",
    'cta.getiton': 'GET IT ON',
    'cta.soon': '🚀 Launching soon — Android first',
    'cta.mid': 'Your first pack is one tap away — free, and yours to keep offline.',
    'hero.badge.free': '100% free',
    'hero.badge.offline': 'Plays fully offline',
    'hero.badge.real': '3,500+ real species',
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
    'feat.collections.d': 'Fill themed albums from habitats around the world — each one you finish opens the next. New collections keep arriving with every update.',
    'feat.trade.t': 'Trade duplicates up',
    'feat.trade.d': 'Stack duplicates and exchange them for rarer cards — or unlock stunning colour-morph variants.',
    'feat.streaks.t': 'Daily rewards & streaks',
    'feat.streaks.d': 'Log in daily for coins and bonus packs. Keep a 7-day streak to unlock a special collection.',
    'feat.foils.t': 'Foil cards & variants',
    'feat.foils.d': 'Chase Silver, Gold and Rainbow foil cards, plus rare colour-morph variants with their own alternate artwork.',
    'feat.trivia.t': 'Wild Trivia',
    'feat.trivia.d': 'An endless animal quiz with three lives and questions that keep getting harder. Climb the weekly standings against rival naturalists — the weekly prize turns one of your cards into a foil.',
    'feat.cal.t': 'Real wildlife calendar',
    'feat.cal.d': 'An in-game calendar of real international wildlife days, each with special boosts to make the most of.',
    'feat.quests.t': 'Quests & badges',
    'feat.quests.d': 'Daily and weekly quests, plus long-term badges with multi-level coin rewards, give every session a goal.',
    'feat.iucn.t': 'Real conservation data',
    'feat.iucn.d': 'Each species carries its real status on the IUCN Red List, which drives its rarity and in-game value.',
    'rares.eyebrow': 'The thrill of the pull',
    'rares.title': "Some cards you'll hunt for weeks",
    'rares.lead': 'Most pulls are common. Then a foil catches the light — and the whole pack is worth it.',
    'rares.legendary.t': 'Legendary',
    'rares.legendary.d': "The rarest tier — a card you'll remember pulling.",
    'rares.foil.t': 'Silver · Gold · Rainbow foils',
    'rares.foil.d': 'Three shimmering foil tiers to chase across every species.',
    'rares.variant.t': 'Secret variants',
    'rares.variant.d': 'Rare colour-morph variants with their own alternate art.',
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
    'edu.scale.d': 'Over 3,500 species — far beyond most collection games, each with its own facts to learn.',
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
    'social.eyebrow': "Real Google Play reviews",
    'social.title': "Rated 4.9★ on Google Play",
    'social.lead': "What players are saying — straight from the store listing:",
    'social.r1.q': "“I love this app! … You can play offline and get a free 12-card pack every hour. No purchases required! I love the conservation status system, from Least Concern to Extinct.”",
    'social.r1.a': "rocky085 · Google Play",
    'social.r2.q': "“A super fun and very intuitive game. It really hooks you: you come in for a little while and end up playing for a good while.”",
    'social.r2.a': "Carla B. · Google Play",
    'social.r3.q': "“A very entertaining game where you learn a ton — every day you discover fascinating animals from all over the world. 200% recommended!”",
    'social.r3.a': "Nuria L. · Google Play",
    'social.note': "Reviews from the Google Play listing; some translated or shortened.",
    'final.title': 'Start your collection',
    'final.sub': '3,500+ species are waiting — free, offline, on Android first.',
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
    'studio.status.live': 'On Google Play · Android',
    'studio.status.dev': 'In development',
    'studio.game.wildlife': 'Discover 3,500+ real animal species, open packs and complete collections — built on real conservation data from the IUCN Red List.',
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
    'studio.story.p2': "For years it could only be a hobby. Something like Wildlife Collection — over <strong>3,500 realistic, hand-reviewed animal illustrations</strong> — was impossible for one person to draw or afford. Then AI changed the maths, and since late 2023 I've finally built the worlds I'd only imagined, on my own.",
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
    'page.title': 'Wildlife Collection — Juego de cartas de animales gratis · Colecciona más de 3.500 animales reales',
    'og.title': 'Wildlife Collection — Juego de cartas de animales gratis',
    'og.description': 'Abre sobres, colecciona más de 3.500 cartas de animales reales y completa colecciones. Gratis, sin conexión y basado en datos reales de conservación de la UICN.',
    'studio.page.title': 'Maraverse Games — Estudio indie · Mundos que merece la pena coleccionar',
    'studio.og.title': 'Maraverse Games — Mundos que merece la pena coleccionar',
    'studio.og.description': 'Un estudio indie en solitario que crea juegos de colección en mundos reales e imaginados, empezando por Wildlife Collection.',
    'meta.description': 'Un juego de cartas de animales gratis y sin conexión. Abre sobres, colecciona más de 3.500 cartas de animales reales y completa colecciones temáticas — un juego educativo basado en datos reales de conservación de la UICN. Android, inglés y español.',
    'nav.features': 'Características',
    'nav.learn': 'Aprende',
    'nav.conservation': 'Conservación',
    'nav.reviews': 'Reseñas',
    'hero.eyebrow': 'Un juego de cartas de vida salvaje',
    'hero.title': 'Colecciona lo salvaje,<br>sobre a sobre.',
    'hero.sub': 'Abre un sobre y mira aparecer especies reales — algunas que ni habías oído nombrar. Completa colecciones temáticas, persigue cartas brillantes y variantes raras, y construye un álbum que es solo tuyo.',
    'cta.getiton': 'DISPONIBLE EN',
    'cta.soon': '🚀 Próximamente — primero en Android',
    'cta.mid': 'Tu primer sobre está a un toque — gratis y para guardar sin conexión.',
    'hero.badge.free': '100% gratis',
    'hero.badge.offline': 'Juega sin conexión',
    'hero.badge.real': 'Más de 3.500 especies reales',
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
    'feat.collections.d': 'Llena álbumes temáticos de hábitats de todo el mundo — cada uno que completas abre el siguiente. Con cada actualización llegan colecciones nuevas.',
    'feat.trade.t': 'Mejora tus duplicados',
    'feat.trade.d': 'Acumula duplicados y cámbialos por cartas más raras — o desbloquea espectaculares variantes de color.',
    'feat.streaks.t': 'Recompensas y rachas',
    'feat.streaks.d': 'Entra cada día por monedas y sobres extra. Mantén una racha de 7 días para desbloquear una colección especial.',
    'feat.foils.t': 'Cartas brillantes y variantes',
    'feat.foils.d': 'Persigue cartas brillantes Plata, Oro y Arcoíris, además de variantes de color raras con su propia ilustración alternativa.',
    'feat.trivia.t': 'Trivia salvaje',
    'feat.trivia.d': 'Un quiz de animales sin fin, con tres vidas y preguntas cada vez más difíciles. Sube en la clasificación semanal frente a otros naturalistas — el premio semanal convierte una de tus cartas en brillante.',
    'feat.cal.t': 'Calendario de vida salvaje',
    'feat.cal.d': 'Un calendario con días internacionales reales de la naturaleza, cada uno con bonificaciones especiales para aprovechar.',
    'feat.quests.t': 'Misiones y logros',
    'feat.quests.d': 'Misiones diarias y semanales, y logros a largo plazo con recompensas de monedas por niveles, para que cada partida tenga un objetivo.',
    'feat.iucn.t': 'Datos reales de conservación',
    'feat.iucn.d': 'Cada especie lleva su estado real en la Lista Roja de la UICN, que determina su rareza y su valor en el juego.',
    'rares.eyebrow': 'La emoción de la carta rara',
    'rares.title': 'Algunas cartas las buscarás durante semanas',
    'rares.lead': 'La mayoría de cartas son comunes. Entonces una brillante refleja la luz — y el sobre entero merece la pena.',
    'rares.legendary.t': 'Legendaria',
    'rares.legendary.d': 'El nivel más raro — una carta que recordarás haber sacado.',
    'rares.foil.t': 'Brillantes Plata · Oro · Arcoíris',
    'rares.foil.d': 'Tres niveles brillantes que perseguir en cada especie.',
    'rares.variant.t': 'Variantes secretas',
    'rares.variant.d': 'Variantes de color raras con su propio arte alternativo.',
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
    'edu.scale.d': 'Más de 3.500 especies — muy por encima de la mayoría de juegos de colección, cada una con sus propios datos para aprender.',
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
    'social.eyebrow': "Reseñas reales de Google Play",
    'social.title': "4,9★ en Google Play",
    'social.lead': "Lo que dicen los jugadores, directamente desde la ficha de la tienda:",
    'social.r1.q': "«¡Me encanta esta app! … Puedes jugar sin conexión y obtener un paquete de 12 cartas gratis cada hora. ¡No requiere compras! Me encanta el sistema de estado de conservación, desde Preocupación Menor hasta Extinta.»",
    'social.r1.a': "rocky085 · Google Play",
    'social.r2.q': "«Un juego súper entretenido y bastante intuitivo. Engancha muchísimo: entras solo para un rato y te acabas quedando un buen rato jugando.»",
    'social.r2.a': "Carla B. · Google Play",
    'social.r3.q': "«Un juego muy entretenido con el que se aprende un montón, todos los días descubres animales fascinantes de todas las partes del mundo. ¡200% recomendable!»",
    'social.r3.a': "Nuria L. · Google Play",
    'social.note': "Reseñas de la ficha de Google Play; algunas traducidas o abreviadas.",
    'final.title': 'Empieza tu colección',
    'final.sub': 'Más de 3.500 especies te esperan — gratis, sin conexión y primero en Android.',
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
    'studio.status.live': 'En Google Play · Android',
    'studio.status.dev': 'En desarrollo',
    'studio.game.wildlife': 'Descubre más de 3.500 especies reales, abre sobres y completa colecciones — basado en datos reales de conservación de la Lista Roja de la UICN.',
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
    'studio.story.p2': 'Durante años no pudo pasar de ahí: un hobby. Algo como Wildlife Collection — más de <strong>3.500 ilustraciones de animales realistas y revisadas a mano</strong> — era imposible de dibujar o pagar para una sola persona. Entonces la IA cambió las cuentas, y desde finales de 2023 por fin construyo yo solo los mundos que antes solo imaginaba.',
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
  fr: {
    // Français, tutoiement comme dans le jeu. Espace insécable ( ) avant : ; ! ? % et dans « ».
    'page.title': 'Wildlife Collection · Jeu de cartes gratuit sur les animaux sauvages',
    'og.title': 'Wildlife Collection · Le jeu de cartes gratuit sur la faune sauvage',
    'og.description': 'Ouvre des paquets, collectionne de vraies cartes d’animaux et complète des collections. Gratuit, jouable hors ligne et fondé sur les vraies données de conservation de l’UICN.',
    'studio.page.title': 'Maraverse Games · Studio indépendant · Des mondes à collectionner',
    'studio.og.title': 'Maraverse Games · Des mondes à collectionner',
    'studio.og.description': 'Un studio indépendant d’une seule personne qui crée des jeux de collection dans des mondes réels et imaginaires, à commencer par Wildlife Collection.',
    'meta.description': 'Un jeu de cartes gratuit sur les animaux sauvages, entièrement jouable hors ligne. Ouvre des paquets, collectionne de vraies espèces et complète des collections thématiques : un jeu éducatif fondé sur les vraies données de conservation de l’UICN. Sur Android.',
    'nav.features': 'Fonctionnalités',
    'nav.learn': 'Apprendre',
    'nav.conservation': 'Conservation',
    'nav.reviews': 'Avis',
    'hero.eyebrow': 'Un jeu de cartes à collectionner sur la faune sauvage',
    'hero.title': 'La nature à collectionner,<br>paquet après paquet.',
    'hero.sub': 'Ouvre un paquet et regarde apparaître de vraies espèces, dont certaines dont tu n’as jamais entendu parler. Complète des collections thématiques, traque les cartes brillantes et les variantes rares, et compose un album qui n’appartient qu’à toi.',
    'cta.getiton': 'DISPONIBLE SUR',
    'cta.soon': '🚀 Bientôt disponible, d’abord sur Android',
    'cta.mid': 'Ton premier paquet est à portée de doigt : gratuit, et à toi, même hors ligne.',
    'hero.badge.free': '100 % gratuit',
    'hero.badge.offline': 'Jouable entièrement hors ligne',
    'stat.species': 'espèces réelles',
    'stat.collections': 'collections thématiques',
    'stat.free.v': '100 %',
    'stat.free': 'gratuit et hors ligne',
    'band.free.t': 'Gratuit',
    'band.free.d': 'Rien à payer pour jouer, aucun compte à créer. Télécharge le jeu et commence ta collection.',
    'band.offline.t': 'Fonctionne sans internet',
    'band.offline.d': 'Tout le jeu tourne sur ton appareil : en avion, dans le métro, partout.',
    'features.title': 'Tout ce qu’un collectionneur adore',
    'features.lead': 'Un rendez-vous quotidien fait de découvertes, de progrès et du frisson de la carte rare.',
    'feat.packs.t': 'Ouvre des paquets',
    'feat.collections.t': 'Complète des collections',
    'feat.collections.d': 'Complète des collections thématiques venues des milieux naturels du monde entier : chacune que tu termines ouvre la suivante. De nouvelles collections arrivent à chaque mise à jour.',
    'feat.trade.t': 'Améliore tes doublons',
    'feat.trade.d': 'Accumule les doublons et échange-les contre des cartes plus rares, ou débloque de superbes variantes.',
    'feat.streaks.t': 'Récompenses quotidiennes et séries',
    'feat.foils.t': 'Cartes brillantes et variantes',
    'feat.trivia.t': 'Quiz sauvage',
    'feat.cal.t': 'Un vrai calendrier de la nature',
    'feat.cal.d': 'Un calendrier des vraies journées mondiales consacrées à la faune, chacune avec ses bonus à ne pas manquer.',
    'feat.quests.t': 'Quêtes et succès',
    'feat.quests.d': 'Des quêtes quotidiennes et hebdomadaires, et des succès à long terme qui rapportent des pièces à chaque niveau : chaque partie a son objectif.',
    'feat.iucn.t': 'De vraies données de conservation',
    'feat.iucn.d': 'Chaque espèce porte son véritable statut sur la Liste rouge de l’UICN, qui fixe sa rareté et sa valeur dans le jeu.',
    'rares.eyebrow': 'Le frisson du tirage',
    'rares.title': 'Certaines cartes, tu les chercheras des semaines',
    'rares.lead': 'La plupart des tirages sont communs. Puis une brillante accroche la lumière, et le paquet entier en valait la peine.',
    'rares.legendary.t': 'Légendaire',
    'rares.legendary.d': 'Le rang le plus rare : une carte que tu n’oublieras pas d’avoir tirée.',
    'rares.foil.t': 'Brillantes Argent · Or · Arc-en-ciel',
    'rares.variant.t': 'Variantes secrètes',
    'rares.variant.d': 'Des variantes rares, chacune avec sa propre illustration.',
    'rares.status.t': 'Une rareté qui a du sens',
    'rares.status.d': 'Plus l’espèce est proche de l’extinction, plus la carte est rare. Un vrai statut, une vraie rareté.',
    'edu.eyebrow': 'Plus qu’un jeu',
    'edu.title': 'Un jeu qui t’apprend plein de choses en jouant',
    'edu.lead': 'Les albums d’images de notre enfance, réinventés et discrètement éducatifs, à tout âge.',
    'edu.all.t': 'Pour tous les âges',
    'edu.all.d': 'Parents, enfants et curieux. Le plaisir d’enfance de compléter une collection, désormais dans ta poche.',
    'edu.discover.t': 'À la rencontre de l’inconnu',
    'edu.discover.d': 'La plupart de ces espèces, tu n’en as jamais entendu parler. Même les passionnés d’animaux en découvrent des dizaines.',
    'edu.scale.t': 'L’un des plus grands catalogues qui soient',
    'edu.real.t': 'Des illustrations réalistes, revues à la main',
    'edu.real.d': 'Chaque image est vérifiée à la main pour son réalisme : chaque animal ressemble au vrai, jamais à un dessin animé.',
    'screens.title': 'Le jeu en images',
    'screens.lead': 'De vrais écrans, capturés directement dans l’appli.',
    'g.home': 'Tableau de bord du jour',
    'g.album': 'Ton album',
    'g.pack': 'Ouverture d’un paquet',
    'g.card': 'Fiche de la carte',
    'g.collections': 'Collections',
    'g.profile': 'Ton profil',
    'cons.eyebrow': 'Fondé sur de vraies données de conservation',
    'cons.title': 'Chaque statut raconte une histoire vraie',
    'cons.p1': 'Ici, la rareté n’est pas inventée. Chaque espèce porte son véritable statut sur la <strong>Liste rouge de l’UICN</strong>, de Préoccupation mineure à En danger critique, Éteinte à l’état sauvage et Éteinte. C’est ce statut qui fixe la rareté de chaque carte.',
    'cons.p2': 'Et chaque niveau compte. Les espèces en « Préoccupation mineure » se portent bien, mais restent surveillées ; celles qui sont « Quasi menacées » ou « Vulnérables » perdent du terrain en silence ; beaucoup trop sont déjà En danger, ou ont disparu pour de bon, presque toujours à cause de nous. Le jeu rassemble même des espèces qui ne survivent plus qu’en captivité, ou que la planète a définitivement perdues.',
    'cons.p3': 'C’est une petite façon de mettre en lumière un monde naturel qui en a besoin, en donnant un visage à des espèces que tu n’aurais peut-être jamais croisées.',
    'cons.lc': 'Préoccupation mineure',
    'cons.nt': 'Quasi menacée',
    'cons.vu': 'Vulnérable',
    'cons.en': 'En danger',
    'cons.cr': 'En danger critique',
    'cons.ex': 'Éteinte / Éteinte à l’état sauvage',
    'social.eyebrow': 'De vrais avis Google Play',
    'social.title': 'Noté 4,9 ★ sur Google Play',
    'social.lead': 'Ce que disent les joueurs, directement depuis la fiche du Play Store :',
    'social.r1.q': '« J’adore cette appli ! … On peut jouer hors ligne et recevoir un paquet gratuit de 12 cartes toutes les heures. Aucun achat obligatoire ! J’adore le système de statuts de conservation, de Préoccupation mineure à Éteinte. »',
    'social.r1.a': 'rocky085 · Google Play',
    'social.r2.q': '« Un jeu super amusant et très intuitif. On devient vite accro : on vient pour un petit moment et on finit par y jouer un bon moment. »',
    'social.r2.a': 'Carla B. · Google Play',
    'social.r3.q': '« Un jeu très divertissant où l’on apprend énormément : chaque jour, on découvre des animaux fascinants du monde entier. Recommandé à 200 % ! »',
    'social.r3.a': 'Nuria L. · Google Play',
    'social.note': 'Avis issus de la fiche Google Play ; certains traduits ou raccourcis.',
    'final.title': 'Commence ta collection',
    'final.sub': 'Des espèces du monde entier t’attendent : gratuit, hors ligne, sur Android.',
    'foot.tag': 'Un studio de jeux indépendant. Des mondes à collectionner.',
    'foot.tagGame': 'Wildlife Collection est un jeu Maraverse Games.',
    'foot.privacy': 'Confidentialité (en anglais)',
    'foot.contact': 'Contact',
    // Accueil du studio
    'nav.studio': '← Maraverse Games',
    'studio.meta': 'Maraverse Games est un studio indépendant qui crée des jeux de collection et d’aventure dans des mondes réels et imaginaires, à commencer par Wildlife Collection.',
    'studio.nav.games': 'Jeux',
    'studio.nav.worlds': 'Mondes',
    'studio.nav.about': 'Studio',
    'studio.eyebrow': 'Studio de jeux indépendant',
    'studio.title': 'Des mondes<br>à collectionner.',
    'studio.sub': 'Nous sommes <strong>Maraverse Games</strong>, un studio indépendant d’une seule personne qui crée des jeux de collection sur les mondes, réels ou imaginaires, qui méritent d’être connus. Le premier est là : <strong>Wildlife Collection</strong>.',
    'studio.cta.small': 'NOTRE PREMIER JEU',
    'studio.games.title': 'Nos jeux',
    'studio.games.lead': 'Notre premier jeu est presque là, et d’autres prennent déjà forme.',
    'studio.status.live': 'Sur Google Play · Android',
    'studio.status.dev': 'En développement',
    'studio.game.wildlife': 'Découvre de vraies espèces animales, ouvre des paquets et complète des collections, le tout fondé sur les vraies données de conservation de la Liste rouge de l’UICN.',
    'studio.game.view': 'Voir le jeu →',
    'studio.status.coming': 'Bientôt',
    'studio.soon.tile1': 'Quand les géants régnaient sur la Terre',
    'studio.soon.tile2': 'Au-delà des étoiles',
    'studio.soon.tile3': 'Un royaume de légende',
    'studio.soon.note': 'Trois autres mondes prennent déjà forme. Leurs noms sont encore secrets : à très bientôt.',
    'worlds.eyebrow': 'Un studio, quatre univers',
    'worlds.title': 'Le Maraverse',
    'worlds.lead': 'Chaque jeu Maraverse est un monde à collectionner, tous unis par le même soin et le même savoir-faire.',
    'worlds.nature.t': 'Nature',
    'worlds.nature.d': 'De vraies espèces, dès maintenant.',
    'worlds.prehistory.t': 'Préhistoire',
    'worlds.prehistory.d': 'Quand les géants régnaient sur la Terre.',
    'worlds.space.t': 'Espace',
    'worlds.space.d': 'Au-delà des étoiles.',
    'worlds.fantasy.t': 'Fantasy',
    'worlds.fantasy.d': 'Un royaume de légende.',
    'studio.story.eyebrow': 'Notre histoire',
    'studio.story.title': 'D’où vient Maraverse Games',
    'studio.story.p1': 'Les jeux sont venus en premier. J’ai commencé à programmer à 15 ans justement pour en créer, de petits jeux en noir et blanc écrits en C, et même mon projet de fin d’études d’ingénieur était ma propre version d’un jeu que j’adorais. Ma carrière a pris un autre chemin, mais créer des jeux est resté ce vers quoi je revenais toujours.',
    'studio.story.p2': 'Pendant des années, ça n’a pu être qu’un loisir. Un projet comme Wildlife Collection, avec <strong>tout un catalogue d’illustrations animalières réalistes, revues à la main</strong>, était impossible à dessiner ou à financer pour une seule personne. Puis l’IA a changé la donne, et depuis fin 2023 je construis enfin, seul, les mondes que je n’avais fait qu’imaginer.',
    'studio.story.p3': 'Et ce sont des mondes que j’aime. Je suis passionné de science et de nature (biologie, astronomie, paléontologie) et je photographie les oiseaux pendant mon temps libre. Ces jeux réunissent ces passions. Le premier a pris forme à l’autre bout de la planète, pendant les trois mois passés en Asie pour notre lune de miel.',
    'studio.story.mara': 'Un dernier petit bout de la maison : en janvier 2020, nous avons adopté <strong>Mara</strong>, notre chienne, dans un refuge près de chez nous. Elle est arrivée dans un état déchirant et elle a vite fait partie de la famille. Le studio porte son nom, et tu la retrouveras dans tout ce que nous créons. 🐾',
    'studio.story.sign': '— Adrián, fondateur de Maraverse Games',
    'studio.value.real.t': 'Ancré dans le réel',
    'studio.value.real.d': 'De vraies espèces, de la vraie science, un vrai émerveillement.',
    'studio.value.craft.t': 'Fait avec soin',
    'studio.value.craft.d': 'Chaque image revue à la main pour son réalisme.',
    'studio.value.fair.t': 'Le joueur d’abord',
    'studio.value.fair.d': 'Des jeux gratuits et paisibles, sans interfaces trompeuses.',
    'studio.value.lang.t': 'Fait pour voyager',
    'studio.final.title': 'Commence par la nature',
    'studio.final.sub': 'Notre premier jeu est presque là. Jette un œil pendant que les prochains mondes prennent forme.',
    // 404
    'err.title': 'Ce sentier ne mène nulle part',
    'err.sub': 'La page que tu cherches s’est perdue dans la nature.',
    'err.back': 'RETOUR À',
  },
  pt: {
    // Português do Brasil (<html lang="pt-BR">): "você", aspas “ ”, sem travessões explicativos.
    'page.title': 'Wildlife Collection · Jogo de cartas de animais grátis',
    'og.title': 'Wildlife Collection · O jogo de cartas de animais grátis',
    'og.description': 'Abra pacotes, colecione cartas de animais reais e complete coleções. Grátis, funciona sem internet e é baseado em dados reais de conservação da IUCN.',
    'studio.page.title': 'Maraverse Games · Estúdio indie · Mundos para colecionar',
    'studio.og.title': 'Maraverse Games · Mundos para colecionar',
    'studio.og.description': 'Um estúdio indie de uma pessoa só que cria jogos de coleção em mundos reais e imaginários, começando por Wildlife Collection.',
    'meta.description': 'Um jogo de cartas de animais grátis que funciona totalmente sem internet. Abra pacotes, colecione espécies reais e complete coleções temáticas: um jogo educativo baseado em dados reais de conservação da IUCN. Para Android.',
    'nav.features': 'Recursos',
    'nav.learn': 'Aprenda',
    'nav.conservation': 'Conservação',
    'nav.reviews': 'Avaliações',
    'hero.eyebrow': 'Um jogo de colecionar cartas da vida selvagem',
    'hero.title': 'Colecione a natureza,<br>um pacote de cada vez.',
    'hero.sub': 'Abra um pacote e veja surgir espécies reais, algumas que você nem sabia que existiam. Complete coleções temáticas, vá atrás de cartas brilhantes e variantes raras e monte um álbum que é só seu.',
    'cta.getiton': 'DISPONÍVEL NO',
    'cta.soon': '🚀 Em breve, primeiro no Android',
    'cta.mid': 'Seu primeiro pacote está a um toque: grátis, e seu para jogar sem internet.',
    'hero.badge.free': '100% grátis',
    'hero.badge.offline': 'Funciona totalmente sem internet',
    'stat.species': 'espécies reais',
    'stat.collections': 'coleções temáticas',
    'stat.free.v': '100%',
    'stat.free': 'grátis e sem internet',
    'band.free.t': 'Grátis para jogar',
    'band.free.d': 'Sem pagar para jogar e sem precisar de conta. Baixe e comece sua coleção.',
    'band.offline.t': 'Funciona sem internet',
    'band.offline.d': 'O jogo inteiro roda no seu aparelho: no avião, no metrô, em qualquer lugar.',
    'features.title': 'Tudo o que um colecionador ama',
    'features.lead': 'Uma rotina diária de descobertas, progresso e a emoção de tirar uma carta rara.',
    'feat.packs.t': 'Abra pacotes',
    'feat.collections.t': 'Complete coleções',
    'feat.collections.d': 'Preencha coleções temáticas de ambientes do mundo todo. Cada uma que você completa abre a próxima, e novas coleções chegam a cada atualização.',
    'feat.trade.t': 'Melhore suas repetidas',
    'feat.trade.d': 'Junte cartas repetidas e converta em cartas mais raras, ou desbloqueie variantes incríveis.',
    'feat.streaks.t': 'Recompensas diárias e sequências',
    'feat.foils.t': 'Cartas brilhantes e variantes',
    'feat.trivia.t': 'Quiz selvagem',
    'feat.cal.t': 'Calendário real da natureza',
    'feat.cal.d': 'Um calendário com os dias internacionais reais dedicados à vida selvagem, cada um com bônus especiais para aproveitar.',
    'feat.quests.t': 'Missões e conquistas',
    'feat.quests.d': 'Missões diárias e semanais, além de conquistas de longo prazo que dão moedas a cada nível, trazem um objetivo para cada partida.',
    'feat.iucn.t': 'Dados reais de conservação',
    'feat.iucn.d': 'Cada espécie traz seu status real na Lista Vermelha da IUCN, que define sua raridade e seu valor no jogo.',
    'rares.eyebrow': 'A emoção da carta rara',
    'rares.title': 'Tem carta que você vai caçar por semanas',
    'rares.lead': 'A maioria das cartas é comum. Aí uma brilhante reflete a luz, e o pacote inteiro vale a pena.',
    'rares.legendary.t': 'Lendária',
    'rares.legendary.d': 'O nível mais raro: uma carta que você nunca vai esquecer de ter tirado.',
    'rares.foil.t': 'Brilhantes Prata · Ouro · Arco-íris',
    'rares.variant.t': 'Variantes secretas',
    'rares.variant.d': 'Variantes raras, cada uma com sua própria ilustração.',
    'rares.status.t': 'Uma raridade que faz sentido',
    'rares.status.d': 'Quanto mais perto da extinção, mais rara a carta. Status real, escassez real.',
    'edu.eyebrow': 'Mais que um jogo',
    'edu.title': 'Um jogo que ensina enquanto você joga',
    'edu.lead': 'Os álbuns de figurinhas da nossa infância, reinventados e discretamente educativos em qualquer idade.',
    'edu.all.t': 'Para todas as idades',
    'edu.all.d': 'Pais, filhos e curiosos. A alegria de infância de completar uma coleção, agora no seu bolso.',
    'edu.discover.t': 'Conheça o desconhecido',
    'edu.discover.d': 'Você nunca ouviu falar da maioria destas espécies. Até quem é apaixonado por animais descobre dezenas de novas.',
    'edu.scale.t': 'Um dos maiores catálogos que existem',
    'edu.real.t': 'Arte realista, revisada à mão',
    'edu.real.d': 'Cada imagem é revisada à mão para ser realista, para que cada animal pareça de verdade, nunca um desenho.',
    'screens.title': 'Veja o jogo em ação',
    'screens.lead': 'Telas reais, capturadas direto do app.',
    'g.home': 'Painel do dia',
    'g.album': 'Seu álbum',
    'g.pack': 'Abertura de pacote',
    'g.card': 'Detalhe da carta',
    'g.collections': 'Coleções',
    'g.profile': 'Seu perfil',
    'cons.eyebrow': 'Baseado em dados reais de conservação',
    'cons.title': 'Cada status conta uma história real',
    'cons.p1': 'Aqui a raridade não é inventada. Cada espécie traz seu status real na <strong>Lista Vermelha da IUCN</strong>, de Menos preocupante a Criticamente em perigo, Extinta na natureza e Extinta. É esse status que define o quão rara é cada carta.',
    'cons.p2': 'E cada nível importa. As espécies classificadas como “Menos preocupante” estão bem, mas seguem monitoradas; as “Quase ameaçadas” e “Vulneráveis” vão perdendo espaço em silêncio; e muitas já estão Em perigo ou desapareceram para sempre, quase sempre por nossa causa. O jogo reúne até espécies que hoje só sobrevivem em cativeiro, ou que o planeta perdeu por completo.',
    'cons.p3': 'É uma pequena forma de iluminar um mundo natural que precisa disso, dando um rosto a espécies que você talvez nunca chegasse a conhecer.',
    'cons.lc': 'Menos preocupante',
    'cons.nt': 'Quase ameaçada',
    'cons.vu': 'Vulnerável',
    'cons.en': 'Em perigo',
    'cons.cr': 'Criticamente em perigo',
    'cons.ex': 'Extinta / Extinta na natureza',
    'social.eyebrow': 'Avaliações reais do Google Play',
    'social.title': 'Nota 4,9★ no Google Play',
    'social.lead': 'O que os jogadores dizem, direto da página da loja:',
    'social.r1.q': '“Eu amo este app! … Dá para jogar sem internet e ganhar um pacote grátis de 12 cartas a cada hora. Nenhuma compra obrigatória! Adoro o sistema de status de conservação, de Menos preocupante a Extinta.”',
    'social.r1.a': 'rocky085 · Google Play',
    'social.r2.q': '“Um jogo superdivertido e bem intuitivo. Vicia de verdade: você entra só um pouquinho e acaba jogando um tempão.”',
    'social.r2.a': 'Carla B. · Google Play',
    'social.r3.q': '“Um jogo muito divertido com o qual se aprende muito: todo dia você descobre animais fascinantes do mundo inteiro. Recomendo 200%!”',
    'social.r3.a': 'Nuria L. · Google Play',
    'social.note': 'Avaliações da página do Google Play; algumas traduzidas ou resumidas.',
    'final.title': 'Comece sua coleção',
    'final.sub': 'Espécies do mundo todo esperam por você: grátis, sem internet, no Android.',
    'foot.tag': 'Um estúdio indie de jogos. Mundos para colecionar.',
    'foot.tagGame': 'Wildlife Collection é um jogo da Maraverse Games.',
    'foot.privacy': 'Privacidade (em inglês)',
    'foot.contact': 'Contato',
    // Página do estúdio
    'nav.studio': '← Maraverse Games',
    'studio.meta': 'Maraverse Games é um estúdio indie que cria jogos de coleção e aventura em mundos reais e imaginários, começando por Wildlife Collection.',
    'studio.nav.games': 'Jogos',
    'studio.nav.worlds': 'Mundos',
    'studio.nav.about': 'Estúdio',
    'studio.eyebrow': 'Estúdio indie de jogos',
    'studio.title': 'Mundos para<br>colecionar.',
    'studio.sub': 'Somos a <strong>Maraverse Games</strong>, um estúdio indie de uma pessoa só que cria jogos de coleção sobre mundos, reais e imaginários, que valem a pena conhecer. O primeiro já chegou: <strong>Wildlife Collection</strong>.',
    'studio.cta.small': 'NOSSO PRIMEIRO JOGO',
    'studio.games.title': 'Nossos jogos',
    'studio.games.lead': 'Nosso primeiro jogo está quase aí, e outros já estão tomando forma.',
    'studio.status.live': 'No Google Play · Android',
    'studio.status.dev': 'Em desenvolvimento',
    'studio.game.wildlife': 'Descubra espécies animais reais, abra pacotes e complete coleções, tudo baseado nos dados reais de conservação da Lista Vermelha da IUCN.',
    'studio.game.view': 'Ver o jogo →',
    'studio.status.coming': 'Em breve',
    'studio.soon.tile1': 'Quando os gigantes dominavam a Terra',
    'studio.soon.tile2': 'Além das estrelas',
    'studio.soon.tile3': 'Um reino de lenda',
    'studio.soon.note': 'Mais três mundos já estão tomando forma. Os nomes ainda são segredo: em breve.',
    'worlds.eyebrow': 'Um estúdio, quatro universos',
    'worlds.title': 'O Maraverso',
    'worlds.lead': 'Cada jogo da Maraverse é um mundo para colecionar, todos unidos pelo mesmo cuidado e pelo mesmo capricho.',
    'worlds.nature.t': 'Natureza',
    'worlds.nature.d': 'Espécies reais, já disponível.',
    'worlds.prehistory.t': 'Pré-história',
    'worlds.prehistory.d': 'Quando os gigantes dominavam a Terra.',
    'worlds.space.t': 'Espaço',
    'worlds.space.d': 'Além das estrelas.',
    'worlds.fantasy.t': 'Fantasia',
    'worlds.fantasy.d': 'Um reino de lenda.',
    'studio.story.eyebrow': 'Nossa história',
    'studio.story.title': 'De onde vem a Maraverse Games',
    'studio.story.p1': 'Os jogos vieram primeiro. Comecei a programar aos 15 anos justamente para criá-los, joguinhos em preto e branco escritos em C, e até meu trabalho de conclusão do curso de engenharia foi minha própria versão de um jogo que eu adorava. Minha carreira seguiu outro caminho, mas criar jogos continuou sendo aquilo a que eu sempre voltava.',
    'studio.story.p2': 'Durante anos, isso só podia ser um hobby. Algo como Wildlife Collection, com <strong>um catálogo inteiro de ilustrações realistas de animais, revisadas à mão</strong>, era impossível de desenhar ou bancar para uma pessoa só. Aí a IA mudou a conta, e desde o fim de 2023 eu finalmente construo sozinho os mundos que antes só imaginava.',
    'studio.story.p3': 'E são mundos que eu amo. Sou fascinado por ciência e natureza (biologia, astronomia, paleontologia) e fotografo aves no meu tempo livre. Estes jogos juntam essas paixões. O primeiro tomou forma do outro lado do planeta, durante três meses morando na Ásia na nossa lua de mel.',
    'studio.story.mara': 'Um último pedacinho de casa: em janeiro de 2020 adotamos a <strong>Mara</strong>, nossa cachorra, de um abrigo local. Ela chegou num estado de partir o coração e logo virou família. O estúdio leva o nome dela, e você vai encontrá-la em tudo o que fazemos. 🐾',
    'studio.story.sign': '— Adrián, fundador da Maraverse Games',
    'studio.value.real.t': 'Raízes na realidade',
    'studio.value.real.d': 'Espécies reais, ciência real, encanto real.',
    'studio.value.craft.t': 'Feito com capricho',
    'studio.value.craft.d': 'Cada imagem revisada à mão para ser realista.',
    'studio.value.fair.t': 'O jogador em primeiro lugar',
    'studio.value.fair.d': 'Jogos grátis e tranquilos, sem armadilhas de design.',
    'studio.value.lang.t': 'Feito para viajar',
    'studio.final.title': 'Comece pela natureza',
    'studio.final.sub': 'Nosso primeiro jogo está quase aí. Dê uma olhada enquanto os próximos mundos tomam forma.',
    // 404
    'err.title': 'Esta trilha não leva a lugar nenhum',
    'err.sub': 'A página que você procura se perdeu na natureza.',
    'err.back': 'VOLTAR PARA',
  },
};

/* ---------------- Languages ----------------
   Dictionary key -> <html lang> / hreflang and og:locale. Each language has its
   own URL for search engines: English is the bare URL, the others ?lang=xx
   (the hreflang links in each page's <head> list them). */
const LANGS = ['en', 'es', 'fr', 'pt'];
const HTML_LANG = { en: 'en', es: 'es', fr: 'fr', pt: 'pt-BR' };
const OG_LOCALE = { en: 'en_US', es: 'es_ES', fr: 'fr_FR', pt: 'pt_BR' };
// Languages that have their own screenshots in assets/screens; the others show
// the English captures. TODO(facts): add fr / pt with the new captures.
const SHOT_LANGS = ['en', 'es'];

// 'pt-BR', 'fr-CA', 'ES' ... -> a dictionary key, or null.
function normLang(code) {
  const base = String(code || '').toLowerCase().split(/[-_]/)[0];
  return LANGS.includes(base) ? base : null;
}

// ?lang= in the URL, then the visitor's last choice, then the browser languages.
function pickLang() {
  try {
    const fromUrl = normLang(new URLSearchParams(location.search).get('lang'));
    if (fromUrl) return fromUrl;
  } catch (_) {}
  try {
    const saved = normLang(localStorage.getItem('wc_lang'));
    if (saved) return saved;
  } catch (_) {}
  const prefs = (navigator.languages && navigator.languages.length)
    ? navigator.languages : [navigator.language];
  for (const p of prefs) {
    const l = normLang(p);
    if (l) return l;
  }
  return 'en';
}

/* ---------------- Apply language ---------------- */
function applyLang(lang, { updateUrl = false } = {}) {
  if (!I18N[lang]) lang = 'en';
  const dict = I18N[lang];
  document.documentElement.lang = HTML_LANG[lang];
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    // Keys not translated yet (see TODO(facts) above) fall back to English,
    // so switching languages never leaves the previous language's text behind.
    const text = key in dict ? dict[key] : I18N.en[key];
    if (text === undefined) return;
    if (el.tagName === 'META') el.setAttribute('content', text);
    else if (el.tagName === 'TITLE') document.title = text;
    else el.innerHTML = text;
  });

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', OG_LOCALE[lang]);

  // Canonical follows the language URL, matching the hreflang alternates.
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    const base = canonical.dataset.base || canonical.getAttribute('href').split('?')[0];
    canonical.dataset.base = base;
    canonical.setAttribute('href', lang === 'en' ? base : `${base}?lang=${lang}`);
  }

  // Swap screenshots to the matching language capture
  const shotLang = SHOT_LANGS.includes(lang) ? lang : 'en';
  document.querySelectorAll('[data-shot]').forEach((img) => {
    img.src = `assets/screens/${img.dataset.shot}-${shotLang}.webp`;
  });

  // Active state on the toggle
  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    const on = btn.dataset.setLang === lang;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });

  // After a click on the switcher, keep the address shareable (?lang=xx).
  if (updateUrl) {
    try {
      const url = new URL(location.href);
      if (lang === 'en') url.searchParams.delete('lang');
      else url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    } catch (_) {}
  }

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
  'Lion', 'Jaguar', 'PolarBear', 'ScarletMacaw', 'OrchidMantis', 'RedPanda',
  'Orca', 'Meerkat', 'SnowLeopard', 'AtlasMoth', 'GreenSeaTurtle', 'TocoToucan',
  'EmperorPenguin', 'Axolotl', 'JewelBeetle', 'BengalTiger', 'SeaOtter',
  'GiantPanda', 'GreaterFlamingo', 'KingCobra', 'Chimpanzee', 'Narwhal',
  'PantherChameleon', 'AtlanticPuffin', 'WallacesFlyingFrog', 'Cheetah',
  'BlueWhale', 'RingTailedLemur', 'GreatWhiteShark', 'KomodoDragon', 'Koala',
  'BaldEagle', 'Reindeer', 'IndianPeafowl', 'CoconutCrab', 'Capybara',
  'ArcticFox', 'AfricanBushElephant', 'RedFox', 'AldabraGiantTortoise',
  'OcellarisClownfish', 'EuropeanBeeEater',
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
    btn.addEventListener('click', () => applyLang(btn.dataset.setLang, { updateUrl: true }));
  });

  applyLang(pickLang());

  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
});

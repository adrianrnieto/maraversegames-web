# Play Console — Data safety y borrado de cuenta (Wildlife Collection 2.4.0, con guardado en la nube)

> Notas internas, **no se publican**: `_redirects` manda `/docs/*` a la portada, porque
> Cloudflare Pages sirve la raíz del repo. El repo es público en GitHub, así que esto se
> puede leer allí; no pongas nada que no pueda ser público.

La release 2.4.0 añade el inicio de sesión con Google Play Games (PR
adrianrnieto/Wildlifecollection#768, `@capacitor-firebase/authentication` 8.3.0). Crea un
usuario de Firebase Auth con un `uid` seudónimo y el nombre de jugador de Play Games, lo
enseña en **Ajustes › Cuenta** ("Conectado como …") y permite borrarlo con **Borrar cuenta
en la nube**. Desde la fase 3 (PR
adrianrnieto/Wildlifecollection#790, `docs/architecture/cloud-save.md`) la partida
también se sube a Firestore mientras el jugador está conectado. Las dos fases salen en
**una misma release** (detrás de `VITE_CLOUD_AUTH`), así que **Data safety se rellena una
sola vez con todo lo de abajo, §1 y §4 juntos**.

Fuentes: en Wildlifecollection, `docs/architecture/cloud-identity.md`, `src/cloud/auth.ts`,
`src/cloud/identity.ts`, `docs/architecture/analytics.md` y
`docs/design/cloud-save-firestore.md` (rama `feat/cloud-auth-phase2`), además de
la [guía de Firebase para Data safety](https://firebase.google.com/docs/android/play-data-disclosure).

Todo esto se rellena **a mano** en Play Console › Contenido de la app (*App content*) ›
Seguridad de los datos (*Data safety*), y tiene que estar enviado y aprobado **antes** de
publicar 2.4.0. Los nombres de los campos van como aparecen en la consola en inglés; en
español pueden cambiar un poco.

Actualizado el 26 oct 2026 para la fase 3 (guardado en Firestore).

Decisiones tomadas (22 oct 2026): las páginas legales siguen solo en inglés (Play no
exige otro idioma); la cuenta se guarda hasta que el jugador la borra, sin caducidad por
inactividad.

---

## 1. Lo que cambia con 2.4.0

### Recopilación y seguridad (preguntas generales)

| Pregunta | Antes | 2.4.0 |
|---|---|---|
| Does your app collect or share any of the required user data types? | Yes | Yes (sin cambios) |
| Is all of the user data collected by your app encrypted in transit? | Yes | **Yes**: Firebase Auth va por HTTPS ("Firebase encrypts the data in transit using HTTPS", según la guía de Firebase) |
| Which of the following methods of account creation does your app support? | (ninguno, la app no tenía cuentas) | **OAuth** / inicio de sesión con un proveedor externo (Google Play Games). No hay usuario y contraseña propios |
| Delete account URL | — | **`https://maraversegames.com/delete-data#account`** (ver §3) |
| Do you provide a way for users to request that some or all of their data is deleted, without requiring them to delete their account? | Yes, si ya estaba declarado (borrado de analítica por email con el data ID) | **Yes**: la analítica se sigue pudiendo borrar por email con el data ID sin borrar la cuenta. URL opcional: `https://maraversegames.com/delete-data` |

### Tipos de dato nuevos

| Categoría › tipo | Collected | Shared | ¿Efímero? | ¿Obligatorio u opcional? | Finalidades |
|---|---|---|---|---|---|
| **Personal info › User IDs** | **Yes**: el `uid` de Firebase Auth | **No** | No | **Optional**: los usuarios eligen si se recoge | **App functionality**, **Account management** |
| **Personal info › Name** | **Yes**: el nombre de jugador de Play Games (Play define *Name* como "first or last name, or nickname", y un nombre de jugador es un apodo) | **No** | No | **Optional** | **App functionality**, **Account management** |

Por qué cada respuesta:

- **Shared = No.** Firebase/Google procesa los datos por cuenta nuestra como proveedor de
  servicio, y Play no cuenta como "compartir" una transferencia a un proveedor que trata
  los datos en nombre del desarrollador. No se envían a nadie más.
- **Optional.** El selector de cuenta sale al arrancar, pero si el jugador lo cierra, lo
  rechaza o falla, sigue jugando y la app no vuelve a preguntar sola. El bloqueo
  (`cloud_signin_required`) sale **apagado** (`0`). **Si alguna vez se pone a `1`, hay que
  cambiar estos dos tipos a *Required* y reenviar Data safety antes de activarlo.**
- **Finalidad.** Enseñar "Conectado como …" y ligar el guardado en la nube (§4) al jugador. No se usa para analítica, anuncios ni personalización: el `uid` no va
  a Analytics ni a Sentry (no hay `setUserId` ni `Sentry.setUser` en el código).
- **Email: depende de lo que guarde Firebase.** El plugin pide el email a Google
  (`PlayGamesAuthProviderHandler.java` llama a `.requestEmail()`), aunque la app no lo lee
  (`toUser` en `src/cloud/auth.ts` se queda solo con `uid` y `displayName`). Después del
  primer inicio de sesión de prueba, mira en Firebase › Authentication › Users la columna
  *Identifier*: si sale un email, añade **Personal info › Email address** con las mismas
  respuestas que User IDs; si sale `-`, no lo declares. La política ya vale para los dos
  casos ("possibly your Google account email address").
- **Teléfono y foto:** no se declaran.
- **La IP que Firebase Auth recoge al iniciar sesión** para evitar abusos no tiene tipo
  propio en Data safety y no se usa para sacar la ubicación, así que no cambia
  *Location*. Está explicada en la política de privacidad (§2.6).
- **El progreso de juego sí se declara ahora:** ver §4.

---

## 2. Lo que ya estaba declarado (debería seguir igual)

No tengo acceso a Play Console. Esto es lo que **debería** estar declarado según la
política de privacidad y los SDK que la app lleva hoy. **Compáralo con lo que hay
guardado en la consola** y corrige lo que no coincida. Ninguna de estas filas cambia con
2.4.0.

| Categoría › tipo | Collected / Shared | Opcional | Finalidad | SDK |
|---|---|---|---|---|
| App activity › App interactions | Collected | Required* | Analytics | Google Analytics for Firebase. Los eventos `cloud_signin_*` y `cloud_account_deleted` de 2.4.0 entran aquí |
| App info and performance › Crash logs | Collected | Required* | Analytics (diagnóstico) | Sentry |
| App info and performance › Diagnostics | Collected | Required* | Analytics | Sentry, Firebase |
| Device or other IDs | Collected; **Shared** para anuncios | Required* | Advertising or marketing, Analytics, Fraud prevention (según lo que ya declaraste) | AdMob (advertising ID), Firebase (app instance ID) |

\* Si hoy está como opcional, déjalo como está: esta release no cambia eso.

Dudas que ya existían y que esta release no toca: si la ubicación aproximada que GA4
deduce de la IP se declara o no, y qué finalidades exactas tiene AdMob. Sigue
[la guía de AdMob](https://support.google.com/admob/answer/10457950) y
[la de Analytics](https://support.google.com/analytics/answer/11582702).

---

## 3. URL de borrado de cuenta

- **Campo:** Play Console › App content › Data safety › *Delete account URL* (en la
  sección de creación de cuentas). Si la consola lo pide en otra pantalla (*App content ›
  Data deletion*), es el mismo valor.
- **Valor:** `https://maraversegames.com/delete-data#account`. Cloudflare Pages sirve
  `delete-data.html` también en `/delete-data`. Comprueba que la URL responde **después**
  de mergear y desplegar este PR, no antes.
- **Lo que pide Play y dónde lo cumple la página:**
  - Nombra la app y el desarrollador tal como aparecen en la ficha ("Wildlife Collection
    by Maraverse Games").
  - Da los pasos dentro de la app (Ajustes › Cuenta › Borrar cuenta en la nube).
  - Ofrece una vía **sin la app y sin reinstalarla**: un email a
    support@maraversegames.com con el nombre de jugador de Play Games.
  - Dice qué se borra (la cuenta de Firebase: `uid`, nombre, vínculo con Play Games, y la partida en la nube con sus copias), qué
    se queda (la partida del dispositivo, la cuenta de Google) y en qué plazo (al momento
    en Firebase, y en menos de un mes si se pide por email).

### Cómo atender una petición por email (proceso interno)

La consola de Firebase **no busca usuarios por nombre visible** (solo por `uid`, email o
teléfono), y un usuario de Play Games no tiene email. Por eso:

1. `firebase auth:export users.json --project wildlife-collection` y busca el
   `displayName` que te ha dado el jugador.
2. Pega ese `uid` en el buscador de Firebase › Authentication › Users y borra el usuario.
3. **Borra también la partida** en Firebase › Firestore: los documentos con ese `uid`
   como id en `saves`, `saves_daily` y `saves_weekly`. Hazlo **antes** de borrar el usuario
   si te es cómodo; las reglas solo dejan al propietario borrar desde la app, pero la
   consola de administrador puede borrarlos en cualquier momento.
4. Si te manda también el data ID, borra la analítica como hasta ahora.
5. Contesta en menos de un mes. Borra el `users.json` exportado.

Si dos cuentas tienen el mismo nombre, pregunta algo antes de borrar: el país aproximado,
la fecha en que empezó a jugar, etc.

---

## 4. Guardado en la nube (fase 3, Firestore)

Qué sube la app (`docs/architecture/cloud-save.md`): un documento `saves/{uid}` con la
partida entera (sobre firmado del export, gzip + base64), un `summary` en claro (cartas,
XP, monedas, packs abiertos, **nombre de perfil** y avatar, puntos de quiz), la versión de
formato y de app, la hora del servidor y un id aleatorio de instalación. Además una copia
diaria y otra semanal (`saves_daily`, `saves_weekly`). El nombre de Play Games **no** va a
Firestore (solo a Firebase Auth). Se sube solo, sin opt-in aparte, mientras haya sesión.

| Categoría › tipo | Collected | Shared | ¿Efímero? | ¿Obligatorio u opcional? | Finalidades |
|---|---|---|---|---|---|
| **App activity › Other actions** (o *Other user-generated content*; Play no tiene un tipo "game progress", elige el que mejor encaje al rellenarlo) | **Yes**: progreso del juego | **No** | No | **Optional** (solo si el jugador se conecta) | **App functionality** |
| **Personal info › User IDs** (ya añadido en §1) | Yes | No | No | Optional | App functionality, Account management |
| **Personal info › Name** (ya añadido en §1) | Yes: ahora cubre también el **nombre de perfil** que el jugador escribe en el juego, además del nombre de Play Games | No | No | Optional | App functionality, Account management |

- **Shared = No**: Google/Firebase lo trata como proveedor de servicio; no hay otro destinatario.
- **Cifrado en tránsito:** Sí (Firestore va por HTTPS/gRPC con TLS). El payload no está
  cifrado por nosotros, solo comprimido: no lo describas como "cifrado de extremo a extremo".
- **Retención / borrado:** hasta que el jugador borra la cuenta; sin TTL ni caducidad por
  inactividad. *Borrar cuenta en la nube* **borra primero** la partida y sus copias diaria
  y semanal (`deleteCloudData`, un batch) y **después** el usuario de Auth; si lo primero
  falla, no se borra la cuenta. Por tanto la respuesta a "¿puede el usuario pedir el
  borrado?" sigue siendo Sí y la URL de borrado (§3) cubre también la partida.
- Si `cloud_signin_required` pasa a `1`, User IDs, Name y el progreso pasan a *Required*
  (reenviar Data safety antes de activarlo).

Región de Firestore: el diseño pide `eur3` (o una región europea única) y es irreversible,
pero el código no la fija; **confirma en Firebase › Firestore que es europea** (la política
dice "located in the European Union").

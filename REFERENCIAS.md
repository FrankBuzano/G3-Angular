# Referencias — G3 · App del Clima · Angular

---

## Documentación oficial (4)

1. **Angular — Signals**
   https://angular.dev/guide/signals
   Base del modelo reactivo de la app: signals, computed y effects usados en `WeatherService`.

2. **Angular — Resource API y `httpResource`**
   https://angular.dev/guide/http/http-resource
   Cómo se hace el fetch del clima sin RxJS: URL reactiva, estados del recurso y cancelación automática.

3. **Angular — Zoneless change detection**
   https://angular.dev/guide/zoneless
   Por qué se eliminó ZoneJS y cómo `provideZonelessChangeDetection()` funciona con signals.

4. **OpenWeatherMap — Current Weather Data API**
   https://openweathermap.org/current
   Endpoint utilizado, parámetros (`q`, `units`, `lang`, `appid`), estructura del JSON de respuesta y códigos de error (401, 404).

---

## Artículos y recursos adicionales (4)

5. **Angular Blog — Angular v19 is now available**
   https://blog.angular.dev/meet-angular-v19-7b29dfd05b84
   Introducción oficial de la Resource API y `httpResource` como feature estable, contexto de por qué reemplaza el patrón `HttpClient + switchMap + toSignal`.

6. **Angular — Control flow sintaxis moderna (`@if`, `@for`, `@switch`)**
   https://angular.dev/guide/templates/control-flow
   Documentación del nuevo control flow declarativo usado en los templates de la app en lugar de `*ngIf` y `*ngFor`.

7. **YouTube — Angular — What's new in Angular (Angular Team)**
   https://www.youtube.com/@Angular
   Canal oficial del equipo de Angular con videos explicativos sobre signals, resource API y el nuevo control flow usados en este proyecto.

8. **MDN Web Docs — Window.localStorage**
   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   Referencia de la API de localStorage utilizada para persistir el historial de búsquedas (`g3-clima:history:v1`).
9. **Angular Fundamentals--FrontendMasters**
   https://frontendmasters.com/courses/angular-fundamentals/


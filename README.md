# Happy Paws · Template de reservas (peliqueria-canina-03)

Template HTML/CSS/JS nativo + Tailwind CSS para una peluquería canina con sistema completo de reservas online, pago simulado, perfil de usuario y galería antes/después.

## Stack
- HTML + Tailwind CSS (vía CDN `https://cdn.tailwindcss.com`)
- JS vanilla en `assets/js/app.js`
- CSS propio en `assets/css/styles.css`
- Persistencia: `localStorage` (clave `happyPawsTemplate`)

## Pantallas (17)
| Archivo | Función |
| --- | --- |
| `index.html` | Inicio con hero, servicios destacados, cursos, galería preview, horarios |
| `servicios.html` | Grid completo de servicios |
| `precios.html` | Tabla de precios por tamaño + paquetes + add-ons |
| `galeria.html` | Galería antes/después con slider drag |
| `clases.html` | Cursos de grooming para tutores + horarios semanales |
| `reservar.html` | Form de reserva con summary sticky |
| `confirmar-cita.html` | Confirmación de cita recién creada |
| `pago.html` | Pago simulado con tarjeta |
| `confirmacion-pago.html` | Comprobante de pago confirmado |
| `perfil.html` | Datos del usuario + historial de reservas + stats |
| `detalle-reserva.html` | Detalle completo + botón anular + botón pagar |
| `contacto.html` | Formulario + mapa Google + datos |
| `login.html` | Iniciar sesión (demo `camila@demo.cl` / `demo123`) |
| `registro.html` | Crear cuenta nueva |
| `recuperar.html` | Recuperar contraseña |
| `terminos.html` | Términos y condiciones |
| `privacidad.html` | Política de privacidad |

## Datos del dominio (`app.js`)
- 9 servicios con precios diferenciados por tamaño (Pequeño/Mediano/Grande/Gigante)
- 5 cursos para tutores
- 3 paquetes combinados
- 5 add-ons
- 8 items de galería antes/después
- Usuario demo precargado con 4 reservas (Pendiente, Confirmada, Pagada, Completada)

## Estados de reserva
`Pendiente` · `Confirmada` · `Pagada` · `Anulada` · `Completada`

## Cómo probar
1. Abrir `index.html` en un navegador.
2. Iniciar sesión con `camila@demo.cl` / `demo123` o crear cuenta nueva.
3. Recorrer: `Servicios` → `Reservar` → `Confirmar cita` → `Pagar` → `Confirmación de pago`.
4. Ir a `Mi perfil` → click en una reserva → `Detalle` → `Anular cita`.
5. Probar `Precios` (tabla por tamaño) y `Galería` (slider antes/después).
6. Cerrar sesión y probar nuevamente el flujo de `Registro` → `Login`.

## Notas técnicas
- Tailwind CDN es para demo. En producción compila con PostCSS o usa el CLI.
- Las imágenes de la galería vienen de Unsplash con `?auto=format&fit=crop`.
- El mapa de `contacto.html` usa el embed genérico de Google Maps (no requiere API key).
- Toda la lógica es simulada (pagos, recuperación de contraseña, inscripción a clases).
- Sin dependencias externas más allá de Tailwind CDN.
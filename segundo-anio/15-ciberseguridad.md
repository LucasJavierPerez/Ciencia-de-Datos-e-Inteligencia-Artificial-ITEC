# 15 · Ciberseguridad

| Campo | Régimen | Hs reloj | Hs cátedra semanales | Hs cátedra anuales | Correlativas |
|---|---|---:|---:|---:|---|
| Formación de Fundamento | 1º cuatrimestre | 53 | 5 | 80 | Programación I (1), Base de Datos (8) |

## De qué trata

Seguridad aplicada al desarrollo: tipos de ataque, el **OWASP Top 10**, autenticación vs. autorización, **OAuth** y tokens, manejo de sesiones/cookies, y logs para detectar y analizar incidentes. El enfoque es el del desarrollador que construye sistemas que manejan datos sensibles, no el de un pentester.

## Contenidos mínimos (programa oficial)

Seguridad y ciberseguridad. Tipos de ataque. Estrategias de seguridad, control y reparación de daño. OWASP Top 10. Autenticación vs. Autorización. OAuth para generación y validación de tokens. Uso de log-ins. Cookies. Logs: registro y análisis.

## Unidades (propuesta de organización)

> El programa no define unidades; esta es una organización sugerida.

### Unidad 1 — Fundamentos
- Seguridad de la información vs. ciberseguridad.
- Tríada CIA: confidencialidad, integridad, disponibilidad. Autenticidad y no repudio.
- Activos, amenazas, vulnerabilidades, riesgo.

### Unidad 2 — Tipos de ataque
- Ingeniería social y phishing.
- Malware: virus, ransomware, troyanos.
- Ataques de red: DoS/DDoS, man-in-the-middle, sniffing.
- Ataques a aplicaciones: inyección SQL, XSS, CSRF, fuerza bruta.
- Ataques específicos a datos e IA: data poisoning, filtración de datos, prompt injection.

### Unidad 3 — OWASP Top 10
- Recorrido de la versión vigente: Broken Access Control, fallas criptográficas, inyección, diseño inseguro, configuración insegura, componentes vulnerables, fallas de identificación y autenticación, integridad de software y datos, fallas de logging y monitoreo, SSRF.
- Cómo prevenir cada uno en código (consultas parametrizadas, validación, escape).

### Unidad 4 — Autenticación y autorización
- Diferencia: quién sos vs. qué podés hacer.
- Log-ins seguros: hashing de contraseñas (bcrypt, Argon2), salting, MFA.
- Modelos de autorización: RBAC, ABAC, principio de mínimo privilegio.

### Unidad 5 — OAuth 2.0, tokens y sesiones
- Flujos OAuth 2.0 (authorization code + PKCE, client credentials); OpenID Connect.
- **JWT**: estructura, firma, validación, expiración y refresh tokens.
- **Cookies**: atributos `HttpOnly`, `Secure`, `SameSite`; sesiones del lado servidor vs. tokens.

### Unidad 6 — Logs, monitoreo y respuesta
- Qué registrar (y qué NO: contraseñas, datos personales).
- Formatos y niveles de log; centralización.
- Análisis de logs para detectar incidentes.
- Estrategias: prevención, detección, respuesta, control y reparación del daño; backups y plan de recuperación.

## Tecnologías a ver

| Tecnología | Uso | Fuente |
|---|---|---|
| OWASP Top 10, OWASP Juice Shop / WebGoat | Referencia y laboratorio vulnerable | Explícita (OWASP) / sugerida (labs) |
| OAuth 2.0 / OpenID Connect | Autorización delegada | Explícita |
| JWT (PyJWT) | Generación y validación de tokens | Sugerida (programa: "token") |
| Flask o FastAPI | Construir un login seguro | Sugerida |
| bcrypt / Argon2 | Hash de contraseñas | Sugerida |
| Burp Suite Community / OWASP ZAP | Análisis de tráfico y vulnerabilidades | Sugerida |
| Wireshark | Análisis de red | Opcional |
| Python `logging`, ELK Stack / Grafana Loki | Registro y análisis de logs | Sugerida (programa: "logs") |
| Keycloak / Auth0 | Proveedor de identidad | Opcional |

## Articulación

- **Viene de:** Programación I, Base de Datos (inyección SQL, permisos).
- **Se cruza con:** Ciencia de Datos (privacidad, normativa), Testeo de Software (pruebas de seguridad).
- **Prepara para:** Desarrollo de Sistemas de IA (sistemas desplegados seguros).

## Práctica sugerida

- Explotar y luego corregir una inyección SQL en una app de prueba.
- Implementar un login con contraseñas hasheadas + JWT en FastAPI.
- Resolver desafíos de OWASP Juice Shop.
- Analizar un archivo de logs con pandas para detectar intentos de fuerza bruta.

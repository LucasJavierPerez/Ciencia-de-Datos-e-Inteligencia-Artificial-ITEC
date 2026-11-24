# 15 · Ciberseguridad *(Propuesta integrada con Ciencia de Datos)*

| Campo | Régimen | Hs reloj | Hs cátedra semanales | Hs cátedra anuales | Correlativas |
|---|---|---:|---:|---:|---|
| Formación de Fundamento | 1º cuatrimestre | 53 | 5 | 80 | Programación I (1), Base de Datos (8) |

> Lo marcado como **Actualización** no está en el programa oficial (RM 213/22, 2022): son temas agregados para ponerlo al día.
>
> Lo marcado como **En desuso** sigue en el programa, pero hoy casi no se usa en la práctica: alcanza con conocerlo.

## De qué trata

Ciberseguridad tradicional integrada con Ciencia de Datos: cómo se rompen los sistemas (**OWASP Top 10**, autenticación, **OAuth** y cookies), cómo investigar ataques analizando **logs y flujos** con Python y estadística de 2º año, y cómo diseñar resiliencia real (backups offline y continuidad operativa) frente a amenazas modernas, IA y conflictos en infraestructura crítica. El enfoque es el del técnico en datos y desarrollo que construye y defiende sistemas reales, no el de un pentester.

## Contenidos mínimos (programa oficial)

Seguridad y ciberseguridad. Tipos de ataque. Estrategias de seguridad, control y reparación de daño. OWASP Top 10. Autenticación vs. Autorización. OAuth para generación y validación de tokens. Uso de log-ins. Cookies. Logs: registro y análisis.

## Unidades (propuesta de organización — 16 semanas)

> El programa no define unidades; esta organización cubre todos los contenidos oficiales y los cruza con Estadísticas y Procesamiento de Datos del mismo cuatrimestre.

### Unidad 1 — Fundamentos, amenazas y tablero real *(Semanas 1–2)*
- Seguridad de la información vs. ciberseguridad. Tríada CIA: confidencialidad, integridad, disponibilidad.
- Activos, amenazas, vulnerabilidades, riesgo y superficie de ataque.
- **Actualización:** Asimetría atacante–defensor, conflictos en "zona gris" y preposicionamiento en infraestructuras críticas (energía, salud, finanzas, agroindustria, telecomunicaciones). Cadena de suministro y marco institucional argentino (CNC, CERT.ar).

### Unidad 2 — Tipos de ataque y OWASP Top 10 *(Semanas 3–5)*
- Ingeniería social y phishing, malware, ransomware, DoS/DDoS, *man-in-the-middle*.
- Recorrido práctico por **OWASP Top 10** vigente y prevención en código: inyección SQL (consultas parametrizadas), XSS, CSRF, control de acceso roto, configuración insegura y exposición de datos.
- **Actualización:** Phishing e ingeniería social potenciados por IA generativa. Riesgos del código generado a alta velocidad con asistentes de IA y dependencias inseguras. Introducción a *data poisoning*.

### Unidad 3 — Autenticación, autorización, OAuth y cookies *(Semanas 6–8)*
- Diferencia entre autenticación (quién sos) y autorización (qué podés hacer).
- Log-ins seguros: hashing de contraseñas (`bcrypt`, `Argon2`), salting, MFA y passkeys.
- Modelos de autorización: RBAC, ABAC, principio de mínimo privilegio.
- Flujos **OAuth 2.0** (`authorization code + PKCE`, `client credentials`); OpenID Connect; **JWT** (estructura, firma, validación, expiración).
- **En desuso:** flujos `implicit` y `password` de OAuth 2.0 (OAuth 2.1 los elimina por inseguros; usar `authorization code` con PKCE).
- **Cookies:** atributos `HttpOnly`, `Secure`, `SameSite`; sesiones del lado servidor vs. tokens.
- **Actualización:** Gestión de secretos y API keys en pipelines y proyectos de datos (`.env`, prevención de filtraciones en repos con `gitleaks`, usuarios de solo lectura en bases analíticas).

### Unidad 4 — Logs, flujos y Ciencia de Datos defensiva *(Semanas 9–11 · Actualización)*
- Qué registrar en logs y qué **nunca** registrar (contraseñas, tokens, datos personales — Ley 25.326).
- Parseo y análisis de logs masivos con `pandas` y `DuckDB`.
- Líneas base (*baselines*), outliers (IQR, Z-score), series temporales de tráfico/horarios y vectores de comportamiento (articulación con Álgebra).
- **Teorema de Bayes en seguridad:** la trampa de los falsos positivos y la fatiga de alertas (articulación con Estadísticas).
- Hipótesis de ataque en flujos: fuerza bruta, *credential stuffing*, exfiltración silenciosa de datos y el límite de la detección frente a *Living off the Land* (cuando el atacante imita el tráfico normal).

### Unidad 5 — Defensa activa y seguridad en apps con IA *(Semanas 12–13 · Actualización)*
- Defensa activa ética y legal (y por qué el contraataque privado o *hack back* es ilegal y riesgoso).
- Técnicas de engaño defensivo: **honeypots** y ***honeytokens* / canary tokens** como alertas de cero falsos positivos.
- **OWASP Top 10 for LLM Applications:** *prompt injection* directa e indirecta, fuga de datos hacia modelos externos, manejo inseguro de salidas y dependencias vulnerables.

### Unidad 6 — Resiliencia, respuesta a incidentes y "búnker digital" *(Semanas 14–16)*
- Estrategias de seguridad, control y reparación de daño. Ciclo de respuesta: detectar, contener, erradicar, recuperar y lecciones aprendidas.
- **Actualización:** Backups que sobreviven a ransomware: regla **3-2-1-1-0** (copias inmutables / *air-gap* desconectadas y pruebas periódicas de restauración).
- **Actualización:** Continuidad operativa y degradación elegante — cómo sostener una organización 72 horas sin sistemas ni nube (plan B analógico, referencia a la Disposición 1/2026 del CNC).
- Divulgación responsable y reporte de incidentes (`reportes@cert.ar`).

## Tecnologías a ver

| Tecnología | Uso | Fuente |
|---|---|---|
| OWASP Top 10 | Referencia de vulnerabilidades web | Programa |
| OAuth 2.0 / OpenID Connect | Autorización delegada y tokens | Programa |
| OWASP Juice Shop / WebGoat | Laboratorio vulnerable controlado | Sugerida |
| FastAPI / Flask + PyJWT | Login seguro, cookies y JWT | Sugerida |
| bcrypt / Argon2 | Hash seguro de contraseñas | Sugerida |
| Python (`pandas`, `DuckDB`, `logging`) | Análisis forense de logs y anomalías | **Actualización** |
| Marimo / Jupyter | Notebooks interactivos de investigación de incidentes | **Actualización** |
| OWASP Top 10 for LLM Applications | Riesgos en apps y flujos con IA | **Actualización** |
| gitleaks / pip-audit / Dependabot | Secretos expuestos y dependencias vulnerables | **Actualización** |
| Canarytokens / honeytokens | Señuelos defensivos de cero falsos positivos | **Actualización** |
| Burp Suite Community / OWASP ZAP | Inspección de tráfico HTTP | Opcional |
| Wireshark | Análisis de tráfico de red | Opcional |

## Articulación

- **Viene de:** Programación I, Base de Datos, Sistemas de Comunicación, Álgebra, Ética.
- **Se cruza con:** Estadísticas (outliers y Bayes en alertas), Procesamiento de Datos (`pandas`/`DuckDB` sobre logs), Tecnología y Sociedad (uso dual y geopolítica), Ciencia de Datos (privacidad), Testeo de Software.
- **Prepara para:** Desarrollo de Sistemas de IA, Práctica Profesionalizante I y II.

## Práctica sugerida

- *Threat modeling* sobre una organización real de Río Cuarto (cooperativa, clínica o pyme agroindustrial): activos críticos y escenario de 72 hs sin sistemas.
- Explotar y corregir una inyección SQL en una app de prueba, y auditar un bloque de código generado por IA buscando fallos de seguridad.
- Construir un login seguro en FastAPI con contraseñas hasheadas, cookies protegidas y JWT.
- Notebook *"Detectives de logs"*: encontrar 3 incidentes ocultos (fuerza bruta, exfiltración nocturna y acceso disfrazado) en un dataset sintético de 50.000 eventos con `pandas`.
- Sembrar un *canary token* en una base de datos de prueba y realizar un mini laboratorio de *prompt injection* y mitigación.
- Simulacro integrador: ante un ransomware simulado, entregar análisis forense en notebook, parche de la falla raíz y plan de backups offline + continuidad operativa.

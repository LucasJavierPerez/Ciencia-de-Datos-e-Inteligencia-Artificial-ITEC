# Programa · Ciberseguridad (Espacio 15)

**Carrera:** Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial (RM 213/22) — ITEC Río Cuarto  
**Año / Régimen:** 2º año · 1º cuatrimestre (16 semanas)  
**Campo:** Formación de Fundamento  
**Carga horaria:** 53 hs reloj · 5 hs cátedra semanales · 80 hs cátedra totales  
**Correlativas:** Programación I (1), Base de Datos (8)

---

## 1. Fundamentación y enfoque

La materia aborda los contenidos mínimos de la RM 213/22 integrando dos miradas complementarias:

1. **Ciberseguridad aplicada al desarrollo:** cómo fallan los sistemas reales (OWASP Top 10), cómo diseñar autenticación y autorización sin errores clásicos (hashing, cookies, OAuth 2.0, JWT) y cómo gestionar incidentes y recuperación.
2. **Ciencia de Datos defensiva y escenarios reales:** en lugar de tratar la seguridad como un listado teórico, se aprovechan las herramientas que el estudiante cursa en simultáneo en el 1º cuatrimestre de 2º año (`pandas`, `DuckDB`, SQL, estadística descriptiva, detección de outliers, Teorema de Bayes y enfoque CTS) para **analizar logs, modelar flujos normales, detectar anomalías y discutir hipótesis de ataque, conflictos modernos y resiliencia operativa**.

El foco no es formar *pentesters*, sino técnicos en datos e IA con criterio para construir sistemas defendibles, leer huellas de incidentes en datos reales y diseñar organizaciones capaces de resistir cuando la tecnología falla.

---

## 2. Objetivos

Al finalizar la cursada, el estudiante será capaz de:

- Identificar activos críticos, superficies de ataque, amenazas y riesgos en una organización real.
- Reconocer y corregir en código las vulnerabilidades más frecuentes (OWASP Top 10) y auditar fallos comunes en código generado con IA.
- Implementar esquemas seguros de autenticación, autorización, sesiones, cookies, tokens JWT y OAuth 2.0, y gestionar secretos sin exponerlos.
- Parsear, explorar y analizar grandes volúmenes de logs con Python (`pandas`/`DuckDB`) y estadística básica para detectar comportamientos anómalos, evaluando falsos positivos.
- Comprender los riesgos específicos de aplicaciones con IA (OWASP Top 10 for LLM) y el uso legal y práctico de señuelos defensivos (*honeytokens*).
- Diseñar un plan básico de respuesta a incidentes, backups inmutables/offline y continuidad operativa ante cortes prolongados.

---

## 3. Contenidos y cronograma (16 semanas)

### Unidad 1 · El tablero real: fundamentos, amenazas y conflictos (Semanas 1–2 · 10 hs cát.)
- **Base oficial:** Seguridad de la información vs. ciberseguridad. Tríada CIA (confidencialidad, integridad, disponibilidad). Activos, amenazas, vulnerabilidades y riesgo. Superficie de ataque.
- **Actualización / Enfoque estratégico:** Asimetría atacante–defensor. Del cibercrimen común a los conflictos en "zona gris" y el preposicionamiento en infraestructuras críticas (energía, salud, bancos, telecomunicaciones, agroindustria). Riesgos en la cadena de suministro. Marco institucional en Argentina: Centro Nacional de Ciberseguridad (CNC) y CERT.ar.
- **Actividad práctica:** *Threat modeling* sobre una organización real de la región (cooperativa eléctrica, clínica o pyme agroindustrial de Río Cuarto): identificar activos críticos y evaluar el impacto de 72 horas sin sistemas.

### Unidad 2 · Cómo se rompen los sistemas: tipos de ataque y OWASP Top 10 (Semanas 3–5 · 15 hs cát.)
- **Base oficial:** Tipos de ataque: ingeniería social y phishing, malware, ransomware, DoS/DDoS, *man-in-the-middle*. Recorrido por **OWASP Top 10** vigente y prevención en código: inyección SQL (consultas parametrizadas), XSS, CSRF, control de acceso roto, configuración insegura y exposición de datos.
- **Actualización / IA y Datos:** Phishing e ingeniería social potenciados por IA generativa. El riesgo de programar a alta velocidad con asistentes de IA (código que "anda" pero introduce vulnerabilidades o dependencias inseguras). Introducción a ataques sobre datos (*data poisoning*).
- **Actividad práctica:** Explotar y corregir una inyección SQL en una app de laboratorio controlada (Python + SQLite / *OWASP Juice Shop*). Revisar un fragmento de código generado por IA para identificar y parchar vulnerabilidades.

### Unidad 3 · Identidad y puertas de entrada: Auth, OAuth, Tokens y Cookies (Semanas 6–8 · 15 hs cát.)
- **Base oficial:** Autenticación vs. Autorización. Almacenamiento seguro de contraseñas (`bcrypt`, `Argon2`), MFA y passkeys. Sesiones y cookies (`HttpOnly`, `Secure`, `SameSite`). **OAuth 2.0** (Authorization Code + PKCE, Client Credentials), OpenID Connect y **JWT** (estructura, firma, expiración y errores comunes). Control de acceso (RBAC, ABAC, principio de mínimo privilegio).
  - *Nota de desuso:* Flujos `implicit` y `password` de OAuth 2.0 (eliminados en OAuth 2.1 por inseguros).
- **Actualización / Datos:** Seguridad en APIs y pipelines de datos: gestión de secretos y API keys (`.env`, prevención de filtraciones en repositorios con `gitleaks`), permisos mínimos en bases de datos analíticas.
- **Actividad práctica:** Implementar un login seguro en FastAPI/Flask con hashing + JWT + cookies correctamente configuradas y verificar el impacto de omitir cada protección.

### Unidad 4 · Logs, flujos y Ciencia de Datos defensiva (Semanas 9–11 · 15 hs cát.)
- **Base oficial:** Logs: qué registrar y qué **nunca** registrar (contraseñas, tokens, datos personales sensibles — articulación con Ley 25.326). Logs de aplicación, acceso web, autenticación y base de datos.
- **Actualización / Ciencia de Datos (con herramientas de 2º año):**
  - Ingesta, limpieza y consulta de logs masivos con `pandas` y `DuckDB`.
  - Modelado de comportamiento normal (*baselines*): detección de outliers con IQR y Z-score, análisis de horarios y volúmenes en series temporales, perfiles vectoriales simples (conexión con Álgebra).
  - **La trampa de los falsos positivos:** aplicación del Teorema de Bayes (articulación con Estadísticas) para entender la fatiga de alertas (*base rate fallacy*).
  - **Hipótesis de ataque en flujos:** fuerza bruta, *credential stuffing*, exfiltración silenciosa de datos y los límites de la detección cuando el atacante imita flujos normales (*Living off the Land*).
- **Actividad práctica (Notebook interactivo — "Detectives de logs"):** A partir de un dataset sintético de ~50.000 eventos de una organización, detectar con `pandas` y visualización 3 incidentes ocultos: un ataque de fuerza bruta, una extracción nocturna anómala y un acceso lento disfrazado.

### Unidad 5 · Defensa activa, engaño y seguridad en aplicaciones con IA (Semanas 12–13 · 10 hs cát.)
- **Actualización / Defensa activa:** Qué se puede y qué no se puede hacer legalmente (por qué el *hack back* privado es ilegal y peligroso por atribución y daños a terceros). Técnicas de engaño defensivo: **honeypots y *honeytokens* / canary tokens** como alertas de cero falsos positivos.
- **Actualización / Seguridad en IA:** **OWASP Top 10 for LLM Applications** — *prompt injection* directa e indirecta, fuga de datos confidenciales hacia modelos externos, manejo inseguro de salidas, dependencias y cadena de suministro de modelos/paquetes.
- **Actividad práctica:** Sembrar un *canary token* (registro trampa) en una base de datos de prueba con detección automática en Python; y laboratorio guiado de *prompt injection* y mitigación básica.

### Unidad 6 · El "búnker digital": respuesta a incidentes y resiliencia (Semanas 14–16 · 15 hs cát.)
- **Base oficial:** Estrategias de seguridad, control y reparación de daño. Ciclo de respuesta a incidentes: detección, contención, erradicación, recuperación y lecciones aprendidas.
- **Actualización / Resiliencia operativa:**
  - Backups que sobreviven a un ransomware: regla **3-2-1-1-0** (copias inmutables / *air-gap* desconectadas y pruebas periódicas de restauración).
  - Continuidad operativa y **degradación elegante**: cómo sostener una organización 72 horas sin sistemas ni nube (plan B manual/analógico, referencia a la Disposición 1/2026 del CNC).
  - Comunicación de crisis y divulgación responsable (`reportes@cert.ar`).
- **Trabajo Integrador Final (Simulacro de Crisis):** En grupos, resolución de un incidente simulado en una organización local (ransomware + exfiltración).

---

## 4. Articulación curricular

- **Viene de:** Programación I (1), Base de Datos (8), Sistemas de Comunicación (4), Álgebra (7), Ética y Deontología Profesional (9).
- **Se cruza en 2º año con:**
  - *Estadísticas y Exploración de Datos* (outliers, distribuciones, Teorema de Bayes en alertas).
  - *Procesamiento de Datos* (`pandas`, `DuckDB`, parseo de JSON/logs, visualización).
  - *Tecnología y Sociedad* (uso dual, geopolítica tecnológica, soberanía e IA).
  - *Ciencia de Datos* (privacidad, Ley 25.326, gobierno de datos).
  - *Testeo de Software* (2º cuatr. — pruebas de seguridad, análisis estático).
- **Prepara para:** Desarrollo de Sistemas de IA (23), Práctica Profesionalizante I y II.

---

## 5. Metodología y evaluación

- **Modalidad:** Clases teórico-prácticas con notebooks interactivos (Marimo / Jupyter), laboratorios controlados locales y análisis de casos reales.
- **Instancias evaluativas sugeridas:**
  1. **TP 1 (Unidades 1–3):** *Threat model* local + laboratorio de explotación/corrección OWASP y login seguro (30%).
  2. **TP 2 (Unidades 4–5):** Notebook forense *"Detectives de logs"* + prueba de *canary token* / *prompt injection* (30%).
  3. **Trabajo Integrador / Simulacro de Crisis (Unidad 6):** Defensa grupal con 3 entregables concretos: (a) notebook forense del incidente, (b) parche técnico de la falla raíz, (c) plan de backups offline y continuidad operativa de 72 horas (40%).

---

## 6. Correspondencia con contenidos mínimos oficiales (RM 213/22)

> *"Seguridad y ciberseguridad. Tipos de ataque. Estrategias de seguridad, control y reparación de daño. OWASP Top 10. Autenticación vs. Autorización. OAuth para generación y validación de token. Uso de log-ins. Cookies. Logs: registro y análisis."*

| Contenido oficial (RM 213/22) | Unidad |
|---|---|
| Seguridad y ciberseguridad | Unidad 1 |
| Tipos de ataque | Unidades 1 y 2 |
| OWASP Top 10 | Unidad 2 |
| Autenticación vs. Autorización | Unidad 3 |
| OAuth para generación y validación de token | Unidad 3 |
| Uso de log-ins y Cookies | Unidad 3 |
| Logs: registro y análisis | Unidad 4 |
| Estrategias de seguridad, control y reparación de daño | Unidades 5 y 6 |

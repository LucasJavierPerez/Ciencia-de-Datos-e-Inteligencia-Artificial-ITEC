// Bloque listo para reemplazar el objeto {id:"ciberseguridad", ...} dentro del array S
// en https://github.com/LucasJavierPerez/Ciencia-de-Datos-e-Inteligencia-Artificial-ITEC/blob/main/index.html

const CIBERSEGURIDAD_SHEET = {
  id: "ciberseguridad",
  n: 15,
  name: "Ciberseguridad",
  reg: "c1",
  campo: "Formación de Fundamento",
  hr: 53,
  hs: 5,
  ha: 80,
  corr: "Programación I (1), Base de Datos (8)",
  about:
    "Ciberseguridad tradicional integrada con Ciencia de Datos: cómo se rompen los sistemas (OWASP Top 10, autenticación, OAuth y cookies), cómo investigar ataques analizando logs y flujos con Python y estadística de 2º año, y cómo diseñar resiliencia real (backups offline y continuidad) frente a amenazas modernas, IA y conflictos en infraestructura crítica.",
  units: [
    [
      "Fundamentos, amenazas y tablero real",
      "Seguridad de la información vs. ciberseguridad. Tríada CIA. Activos, amenazas, vulnerabilidades y riesgo. Asimetría atacante-defensor, conflictos en zona gris e infraestructuras críticas (energía, salud, finanzas, agro, telcos). Cadena de suministro y marco argentino (CNC, CERT.ar)."
    ],
    [
      "Tipos de ataque y OWASP Top 10",
      "Phishing e ingeniería social (potenciados por IA), malware, ransomware, DoS, man-in-the-middle. Recorrido práctico de OWASP Top 10 y prevención en código: SQL Injection, XSS, CSRF, control de acceso roto. Riesgos del código generado rápido con IA y data poisoning."
    ],
    [
      "Autenticación, autorización, OAuth y cookies",
      "Quién sos vs. qué podés hacer. Hash seguro de contraseñas (bcrypt, Argon2), MFA y passkeys. RBAC y mínimo privilegio. Sesiones y cookies (HttpOnly, Secure, SameSite). OAuth 2.0 (Authorization Code + PKCE, Client Credentials), OpenID Connect y JWT. Gestión de secretos y API keys en proyectos de datos.",
      0,
      "Flujos implicit y password de OAuth 2.0: OAuth 2.1 los elimina por inseguros. Usar authorization code con PKCE."
    ],
    [
      "Logs, flujos y Ciencia de Datos defensiva",
      "Qué registrar y qué nunca loguear (contraseñas, tokens, datos personales — Ley 25.326). Análisis de logs masivos con pandas y DuckDB. Líneas base, outliers (IQR, Z-score) y Teorema de Bayes para falsos positivos. Hipótesis de ataque en flujos: fuerza bruta, exfiltración silenciosa y Living off the Land (imitar tráfico normal).",
      1
    ],
    [
      "Defensa activa y seguridad en apps con IA",
      "Límites legales y técnicos del contraataque (hack back). Engaño defensivo: honeypots y honeytokens/canary tokens. OWASP Top 10 para aplicaciones LLM: prompt injection directa e indirecta, fuga de datos hacia modelos externos, salidas inseguras y dependencias vulnerables.",
      1
    ],
    [
      "Resiliencia, respuesta a incidentes y búnker digital",
      "Estrategias de control y reparación de daño. Ciclo de respuesta (detectar, contener, erradicar, recuperar). Backups que sobreviven a ransomware: regla 3-2-1-1-0 y copias inmutables/air-gap. Continuidad operativa y plan B analógico de 72 horas (Disposición 1/2026 del CNC). Reporte responsable (CERT.ar)."
    ]
  ],
  unitsNote:
    "Propuesta para 16 semanas (5 hs cát/sem) que cubre todos los contenidos oficiales (RM 213/22) y los cruza con las herramientas de Estadísticas y Procesamiento de Datos del mismo cuatrimestre.",
  tech: [
    ["OWASP Top 10", "Referencia de vulnerabilidades web", "e"],
    ["OAuth 2.0 / OpenID Connect", "Autorización delegada y tokens", "e"],
    ["OWASP Juice Shop / WebGoat", "Laboratorio vulnerable controlado", "s"],
    ["FastAPI / Flask + PyJWT", "Login seguro, cookies y JWT", "s"],
    ["bcrypt / Argon2", "Hash seguro de contraseñas", "s"],
    ["Python (pandas, DuckDB, logging)", "Análisis forense de logs y anomalías", "a"],
    ["Marimo / Jupyter", "Notebooks interactivos de investigación de incidentes", "a"],
    ["OWASP Top 10 for LLM Applications", "Riesgos en apps y flujos con IA", "a"],
    ["gitleaks / pip-audit / Dependabot", "Secretos expuestos y dependencias vulnerables", "a"],
    ["Canarytokens / honeytokens", "Señuelos defensivos de cero falsos positivos", "a"],
    ["Burp Suite / OWASP ZAP", "Inspección de tráfico HTTP", "o"],
    ["Wireshark", "Análisis de tráfico de red", "o"]
  ],
  from: "Programación I, Base de Datos, Sistemas de Comunicación, Álgebra, Ética.",
  cross:
    "Estadísticas (outliers y Bayes en alertas), Procesamiento de Datos (pandas/DuckDB sobre logs), Tecnología y Sociedad (uso dual y geopolítica), Ciencia de Datos (privacidad), Testeo de Software.",
  to: "Desarrollo de Sistemas de IA, Práctica Profesionalizante I y II.",
  practice: [
    "Threat modeling sobre una organización real de Río Cuarto (cooperativa, clínica o pyme agroindustrial): activos críticos y escenario de 72 hs sin sistemas.",
    "Explotar y corregir una inyección SQL en una app de prueba, y auditar un bloque de código generado por IA buscando fallos de seguridad.",
    "Construir un login seguro en FastAPI con contraseñas hasheadas, cookies protegidas y JWT.",
    "Notebook 'Detectives de logs': encontrar 3 incidentes ocultos (fuerza bruta, exfiltración nocturna y acceso disfrazado) en un dataset sintético de 50.000 eventos con pandas.",
    "Sembrar un canary token en una base de datos de prueba y realizar un mini laboratorio de prompt injection y mitigación.",
    "Simulacro integrador: ante un ransomware simulado, entregar análisis forense en notebook, parche de la falla raíz y plan de backups offline + continuidad operativa."
  ],
  official:
    "Seguridad y ciberseguridad. Tipos de ataque. Estrategias de seguridad, control y reparación de daño. OWASP Top 10. Autenticación vs. Autorización. OAuth para generación y validación de token. Uso de log-ins. Cookies. Logs: registro y análisis."
};

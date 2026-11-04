# 16 · Práctica Profesionalizante I

| Campo | Régimen | Hs reloj | Hs cátedra semanales | Hs cátedra anuales | Correlativas |
|---|---|---:|---:|---:|---|
| Práctica Profesionalizante | 2º cuatrimestre | 128 | 12 | 192 | Programación I (1), Inglés I (2), Proyecto Integrador (3), Base de Datos (8), Ética (9) |

> Lo marcado como **Actualización** no está en el programa oficial (RM 213/22, 2022): son temas agregados para ponerlo al día.

## De qué trata

La **materia con más carga horaria del año** (12 hs cátedra semanales). No tiene temas nuevos: es un proyecto real o simulado donde integrás todo lo visto, con el docente actuando como **cliente**. Continúa el portfolio iniciado en Proyecto Integrador y el resultado forma parte del portfolio con el que egresás.

## Contenidos mínimos (programa oficial)

Espacio destinado a integrar y contrastar los saberes de los demás espacios, articulando teoría y práctica a través de situaciones reales de trabajo (habilidades duras y blandas). Actividad formativa supervisada, de complejidad gradual y creciente, dentro del Proyecto Institucional de Prácticas Profesionalizantes. Las propuestas comprenden: **procesamiento de datos, creación de modelos de inferencia, métricas de interés, post-procesamiento de las estructuras descubiertas, visualización y actualización en línea**. Énfasis en la elaboración de informes y la comunicabilidad de la información. Entregas planificadas por etapas con el docente como cliente. Los proyectos integran el portfolio del estudiante.

## Unidades / etapas del proyecto (propuesta)

> El programa define el contenido por etapas del proyecto, no por unidades. Esta es una secuencia sugerida, alineada a CRISP-DM.

### Etapa 1 — Relevamiento y propuesta
- Elección del problema (puede continuar el proyecto de Proyecto Integrador).
- Entrevista con el "cliente", requerimientos, alcance y criterios de éxito.
- Plan de trabajo con entregas (marco ágil: Scrum/Kanban).

### Etapa 2 — Datos
- Obtención: bases de datos, APIs, web scraping, datasets abiertos.
- Procesamiento: limpieza, transformación, integración.
- EDA y documentación del dataset.

### Etapa 3 — Modelado e inferencia
- Modelos de inferencia estadística y/o modelos predictivos básicos (regresión, clasificación simple).
- Definición de **métricas de interés** (de negocio y técnicas).

### Etapa 4 — Post-procesamiento y visualización
- Interpretación de las estructuras/patrones descubiertos.
- Dashboard o visualizaciones para el cliente.

### Etapa 5 — Actualización en línea
- Automatizar la ingesta/actualización de datos (scripts programados, pipeline).
- Publicar el resultado (app web, dashboard online).

### Etapa 6 — Informe y defensa
- Informe técnico y ejecutivo.
- Presentación/defensa ante el cliente con storytelling.
- Publicación en el portfolio (GitHub + README en inglés).

## Tecnologías a ver

| Tecnología | Uso | Fuente |
|---|---|---|
| Python, pandas, NumPy | Procesamiento | Sugerida (programa: "procesamiento de datos") |
| SciPy / statsmodels / scikit-learn | Inferencia y modelos | Sugerida (programa: "modelos de inferencia") |
| requests, BeautifulSoup, APIs REST | Obtención de datos | Sugerida (continúa Proyecto Integrador) |
| PostgreSQL / SQLite | Persistencia | Sugerida |
| Power BI / Streamlit / plotly Dash | Visualización y entrega al cliente | Sugerida |
| GitHub Actions / cron / Airflow (intro) | Actualización en línea | Sugerida (programa: "actualización en línea") |
| Streamlit Community Cloud / Render / Hugging Face Spaces | Despliegue | Opcional |
| Git, GitHub, Trello / Jira / GitHub Projects | Organización del equipo | Sugerida |
| Docker | Despliegue reproducible | **Actualización** |

## Articulación

- **Viene de:** Programación I, Inglés I, Proyecto Integrador, Base de Datos, Ética.
- **Integra en paralelo:** Ciencia de Datos, Estadísticas, Procesamiento de Datos, Gerencia de Proyectos, Testeo de Software.
- **Prepara para:** Práctica Profesionalizante II.

## Consejos

- Elegí un problema con **datos que se actualicen** (precios, clima, transporte) para cubrir "actualización en línea".
- Usá Gerencia de Proyectos y Testeo de Software del mismo cuatrimestre como insumo directo (plan, tests).
- Documentá desde el día 1: el informe final sale casi solo.

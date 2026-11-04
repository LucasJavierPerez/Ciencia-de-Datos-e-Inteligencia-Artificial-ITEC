# 18 · Testeo de Software

| Campo | Régimen | Hs reloj | Hs cátedra semanales | Hs cátedra anuales | Correlativas |
|---|---|---:|---:|---:|---|
| Formación de Fundamento | 2º cuatrimestre | 53 | 5 | 80 | Programación I (1), Procesamiento de Datos (14) |

> Lo marcado como **Actualización** no está en el programa oficial (RM 213/22, 2022): son temas agregados para ponerlo al día.
>
> Lo marcado como **En desuso** sigue en el programa, pero hoy casi no se usa en la práctica: alcanza con conocerlo.

## De qué trata

Cómo asegurar que el software (y los pipelines de datos) funcionen: técnicas de prueba, **pruebas unitarias**, **TDD**, **integración continua (CI)**, automatización y toda la documentación formal de QA (plan de pruebas, casos, reportes de bugs, evidencias).

## Contenidos mínimos (programa oficial)

Importancia del testeo. Técnicas. Herramientas. TDD, CI. Programación de UnitTest. Técnicas de caja blanca. Desarrollo de casos de pruebas unitarias. Manejo de excepciones. Herramientas de automatización. Pruebas de integración. Seguridad de los sistemas de información. Documento de Plan de Pruebas, casos de prueba, especificación de diseño de casos, logs de errores, reportes de errores (bugs), evidencias de pruebas, reportes de herramientas de prueba.

## Unidades (propuesta de organización)

> El programa no define unidades; esta es una organización sugerida.

### Unidad 1 — Fundamentos del testing
- Por qué testear; costo de un defecto según la etapa. Error, defecto, falla.
- Verificación vs. validación. Los 7 principios del testing (ISTQB).
- Niveles: unitario, integración, sistema, aceptación. Pirámide de testing.
- Tipos: funcional, no funcional (rendimiento, seguridad, usabilidad), regresión.

### Unidad 2 — Técnicas de diseño de pruebas
- **Caja blanca**: cobertura de sentencias, decisiones, condiciones, caminos; complejidad ciclomática.
- Caja negra: particiones de equivalencia, valores límite, tablas de decisión.
- Especificación de diseño de casos de prueba.

### Unidad 3 — Pruebas unitarias
- Estructura AAA (Arrange, Act, Assert); un comportamiento por test.
- `unittest` y **pytest**: asserts, fixtures, parametrización.
- **Manejo de excepciones** y cómo testearlas (`pytest.raises`).
- Dobles de prueba: mocks, stubs, fakes (`unittest.mock`).
- Cobertura de código.

### Unidad 4 — TDD
- Ciclo **Red → Green → Refactor**.
- Diseño guiado por tests; tests como documentación.
- Kata práctica.

### Unidad 5 — Integración y automatización
- Pruebas de integración (con base de datos, APIs).
- Testing de datos: validación de esquemas y calidad de datos en pipelines.
- Automatización de pruebas de UI/API.
- **Integración Continua**: pipeline que corre tests en cada push.

### Unidad 6 — Seguridad de los sistemas de información
- Pruebas de seguridad: análisis estático (SAST), dependencias vulnerables, DAST básico.
- Relación con OWASP (ver Ciberseguridad).

### Unidad 7 — Documentación de QA
- **Plan de pruebas** (estructura basada en ISO/IEC/IEEE 29119).
- **En desuso**: IEEE 829, norma reemplazada por ISO/IEC/IEEE 29119 en 2013, aunque muchas plantillas todavía la citan.
- Casos de prueba y especificación de diseño.
- **Reporte de bugs**: pasos para reproducir, esperado vs. obtenido, severidad/prioridad.
- Logs de errores, evidencias y reportes generados por herramientas.

### Unidad 8 — Testing de pipelines y modelos *(Actualización)*
- Pruebas de datos y de transformaciones.
- Validación de modelos: métricas mínimas, regresión de rendimiento, drift.
- Uso crítico de IA para generar tests.

## Tecnologías a ver

| Tecnología | Uso | Fuente |
|---|---|---|
| `unittest` (Python) | Pruebas unitarias | Explícita ("UnitTest") |
| pytest, pytest-cov | Pruebas unitarias y cobertura | Sugerida |
| `unittest.mock` / pytest-mock | Dobles de prueba | Sugerida |
| GitHub Actions / GitLab CI | Integración continua | Sugerida (programa: "CI") |
| Selenium / Playwright | Automatización de UI | Sugerida (programa: "herramientas de automatización") |
| Postman / requests + pytest | Pruebas de API e integración | Sugerida |
| Great Expectations / pandera | Testing de datos | Sugerida |
| Bandit, pip-audit, SonarQube | Seguridad y calidad de código | Sugerida |
| Jira / TestRail / GitHub Issues | Gestión de casos y bugs | Sugerida |
| Evidently | Monitoreo de modelos y drift | **Actualización** |

## Articulación

- **Viene de:** Programación I, Procesamiento de Datos.
- **Se cruza con:** Ciberseguridad (pruebas de seguridad), Práctica Profesionalizante I (aplicá tests al proyecto).
- **Prepara para:** Desarrollo de Sistemas de IA (testear modelos y apps de IA).

## Práctica sugerida

- Kata TDD (ej. FizzBuzz, calculadora de strings) con pytest.
- Testear funciones de limpieza de datos de tu proyecto de PP I.
- Configurar GitHub Actions para correr tests y cobertura en cada push.
- Escribir un plan de pruebas y 3 reportes de bug formales.

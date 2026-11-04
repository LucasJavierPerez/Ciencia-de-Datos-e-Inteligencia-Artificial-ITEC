# 12 · Estadísticas y Exploración de Datos

| Campo | Régimen | Hs reloj | Hs cátedra semanales | Hs cátedra anuales | Correlativas |
|---|---|---:|---:|---:|---|
| Formación Específica | Anual | 107 | 5 | 160 | Lógica (5), Análisis Matemático (6), Álgebra (7) |

> Lo marcado como **Actualización** no está en el programa oficial (RM 213/22, 2022): son temas agregados para ponerlo al día.

## De qué trata

La **base matemática de todo lo que viene después** (minería, machine learning). Arranca con estadística descriptiva, pasa por probabilidad y distribuciones, y llega a inferencia, regresión y ANOVA. Es la materia más importante del año para el perfil: sin esto, un modelo de ML es una caja negra.

## Contenidos mínimos (programa oficial)

Definiciones y conceptos fundamentales. Estadísticos descriptivos. Análisis descriptivo de datos individuales y agrupados: variables discretas y continuas, medidas de posición, histogramas. Teoría de la probabilidad. Cálculo de probabilidades. Probabilidad condicional. Variables aleatorias discretas y continuas. Distribuciones binomial y de Pascal. Modelos relacionados con fenómenos de la vida. Fiabilidad. Modelos econométricos. La distribución normal. Sumas de variables aleatorias. Teorema central del límite. Aproximaciones. Modelización. Análisis no paramétrico. Principios de inferencia estadística. Control estadístico. Correlación y regresión lineal de dos variables. Regresión múltiple (conceptos básicos). Análisis de varianza.

## Unidades (propuesta de organización)

> El programa no define unidades; esta es una organización sugerida. Como es anual, las unidades 1–4 caen aprox. en el 1º cuatrimestre y 5–9 en el 2º.

### Unidad 1 — Fundamentos y estadística descriptiva
- Población, muestra, variable, parámetro vs. estadístico.
- Tipos de variables: cualitativas (nominal, ordinal) y cuantitativas (discretas, continuas).
- Tablas de frecuencia (absoluta, relativa, acumulada), datos agrupados en intervalos.
- Gráficos: histograma, barras, boxplot, diagrama de tallo y hoja.

### Unidad 2 — Medidas descriptivas y EDA
- Posición/tendencia central: media, mediana, moda, cuartiles, percentiles.
- Dispersión: rango, varianza, desvío estándar, coeficiente de variación, IQR.
- Forma: asimetría y curtosis. Detección de outliers.
- **Análisis Exploratorio de Datos (EDA)**: valores faltantes, tipos, distribuciones, correlaciones iniciales.

### Unidad 3 — Probabilidad
- Experimento aleatorio, espacio muestral, eventos. Axiomas.
- Regla de la suma y del producto; combinatoria básica.
- Probabilidad condicional, independencia, probabilidad total, **Teorema de Bayes**.

### Unidad 4 — Variables aleatorias y distribuciones discretas
- Función de probabilidad, función de distribución, esperanza y varianza.
- Bernoulli, **Binomial**, **Pascal (binomial negativa)**, Geométrica, Poisson.
- Modelización de fenómenos reales (fallas, llegadas, conteos).

### Unidad 5 — Distribuciones continuas y fiabilidad
- Función de densidad. Uniforme, Exponencial, **Normal**, estandarización (Z).
- **Fiabilidad**: tiempo hasta la falla, función de supervivencia, tasa de falla.
- Suma de variables aleatorias. **Teorema Central del Límite**. Aproximación normal a la binomial y Poisson.

### Unidad 6 — Inferencia estadística
- Distribuciones muestrales. Estimación puntual y por intervalos de confianza.
- Pruebas de hipótesis: H0/H1, errores tipo I y II, p-valor, nivel de significación.
- Tests t, z, chi-cuadrado.
- **Análisis no paramétrico**: Mann-Whitney, Wilcoxon, Kruskal-Wallis.

### Unidad 7 — Correlación y regresión
- Covarianza, coeficiente de Pearson y Spearman. Correlación ≠ causalidad.
- Regresión lineal simple: mínimos cuadrados, R², análisis de residuos.
- Regresión múltiple: conceptos, multicolinealidad. Introducción a **modelos econométricos**.

### Unidad 8 — ANOVA y control estadístico
- **Análisis de varianza** de un factor; comparaciones múltiples.
- **Control estadístico de procesos**: gráficos de control (X̄, R, p), límites de control.

### Unidad 9 — Estadística aplicada en la industria *(Actualización)*
- A/B testing y cálculo de tamaño de muestra.
- Bootstrap y remuestreo.
- Introducción a la inferencia bayesiana.
- Correlación vs. causalidad en datos observacionales.

## Tecnologías a ver

| Tecnología | Uso | Fuente |
|---|---|---|
| Python + Jupyter / Google Colab | Entorno de trabajo | Sugerida |
| pandas | Carga, limpieza y descriptivos (`describe`, `groupby`) | Sugerida |
| NumPy | Cálculo numérico, simulación | Sugerida |
| matplotlib / seaborn | Histogramas, boxplots, pairplots | Sugerida |
| SciPy (`scipy.stats`) | Distribuciones, tests de hipótesis, no paramétricos | Sugerida |
| statsmodels | Regresión, ANOVA, resúmenes estilo econometría | Sugerida |
| ydata-profiling | EDA automatizado | Sugerida |
| R + RStudio | Alternativa clásica para estadística | Opcional |
| Excel / GeoGebra | Cálculo manual y visualización de distribuciones | Opcional |
| PyMC | Intro a modelos bayesianos | **Actualización** |

## Articulación

- **Viene de:** Lógica, Análisis Matemático (integrales → densidades), Álgebra (matrices → regresión múltiple).
- **Se cruza con:** Ciencia de Datos, Procesamiento de Datos.
- **Prepara para:** Minería de Datos, Aprendizaje Automático, Procesamiento de Imágenes y Habla (todo el 3º año).

## Práctica sugerida

- Hacer un EDA completo de un dataset (ej. Titanic, precios de propiedades) en un notebook.
- Simular con NumPy el Teorema Central del Límite y graficarlo.
- Ajustar una regresión lineal con `statsmodels` e interpretar el `summary()`.

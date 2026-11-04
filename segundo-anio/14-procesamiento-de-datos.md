# 14 · Procesamiento de Datos

| Campo | Régimen | Hs reloj | Hs cátedra semanales | Hs cátedra anuales | Correlativas |
|---|---|---:|---:|---:|---|
| Formación Específica | 1º cuatrimestre | 64 | 6 | 96 | Programación I (1), Sistemas de Comunicación (4), Base de Datos (8) |

> Lo marcado como **Actualización** no está en el programa oficial (RM 213/22, 2022): son temas agregados para ponerlo al día.
>
> Lo marcado como **En desuso** sigue en el programa, pero hoy casi no se usa en la práctica: alcanza con conocerlo.

## De qué trata

La materia **más técnica/práctica del 1º cuatrimestre**: lenguajes y herramientas para procesar y analizar datos, introducción a Big Data, y visualización + storytelling para comunicar resultados. Es donde se arma el "toolbox" que vas a usar el resto de la carrera.

## Contenidos mínimos (programa oficial)

Lenguajes de programación para procesamiento y análisis de datos; los más utilizados y sus usos según proyecto/negocio. Herramientas de software para Ciencia de Datos: comparación de entornos y uso según requerimientos. Tecnología de grandes datos: concepto de grandes volúmenes (macrodatos, datos masivos, inteligencia de datos, datos a gran escala). Herramientas y técnicas para procesar grandes volúmenes; aplicaciones. Importancia de la visualización. Herramientas y técnicas de visualización; visualización de múltiples variables. Storytelling para presentar resultados. Buenas prácticas en reportes.

## Unidades (propuesta de organización)

> El programa no define unidades; esta es una organización sugerida.

### Unidad 1 — Lenguajes para datos
- Panorama: Python, R, SQL, Julia, Scala. Cuándo conviene cada uno.
- Python para datos: estructuras, comprensiones, funciones, manejo de archivos (CSV, JSON, Excel, Parquet).
- SQL aplicado al análisis (joins, agregaciones, window functions).

### Unidad 2 — Entornos y herramientas
- Jupyter, Google Colab, VS Code, RStudio. Entornos virtuales (venv, conda).
- Comparación y criterios de elección según requerimientos del proyecto.
- Control de versiones con Git para proyectos de datos.

### Unidad 3 — Manipulación y limpieza de datos
- **pandas**: Series/DataFrame, selección, filtrado, `groupby`, `merge`, `pivot`.
- Limpieza: nulos, duplicados, tipos, fechas, texto, outliers.
- Transformación: normalización, encoding, feature engineering básico.
- Pipelines ETL/ELT.

### Unidad 4 — Big Data
- Concepto y las "V" (volumen, velocidad, variedad, veracidad, valor).
- Terminología: macrodatos, datos masivos, inteligencia de datos.
- **En desuso**: Hadoop (HDFS, MapReduce), reemplazados por Spark y los warehouses en la nube. Verlos como historia, no como herramienta a aprender.
- Procesamiento distribuido actual: **Apache Spark** (PySpark).
- Alternativas para datos "medianos": Polars, DuckDB, Dask.
- Aplicaciones en distintos campos profesionales.

### Unidad 5 — Arquitecturas de datos analíticos *(Actualización)*
- OLTP vs. OLAP: por qué no se analiza sobre la base de producción.
- **Data warehouse**: enfoques de Kimball e Inmon, tablas de hechos y dimensiones, modelo estrella y copo de nieve, data marts.
- **Data lake**: datos crudos, schema-on-read, formatos Parquet y Avro, riesgo de *data swamp*.
- **Lakehouse**: Delta Lake o Apache Iceberg; arquitectura medallion (bronze/silver/gold).
- ETL vs. ELT; transformaciones con **dbt**; orquestación con **Airflow**.
- Warehouses en la nube: BigQuery, Snowflake, Redshift. Práctica local con DuckDB.

### Unidad 6 — Visualización de la información
- Principios: percepción, elección del gráfico según el mensaje, color, accesibilidad.
- Visualización de múltiples variables: scatter matrix, heatmaps, facetas, coordenadas paralelas.
- Visualización interactiva y dashboards.

### Unidad 7 — Storytelling y reportes
- Estructura narrativa: contexto → conflicto → resolución.
- Diseño de reportes y buenas prácticas (un mensaje por gráfico, eliminar ruido).
- Presentación de resultados a audiencias no técnicas.

### Unidad 8 — Calidad, gobierno y reproducibilidad *(Actualización)*
- Calidad de datos, linaje, catálogo, data contracts.
- Entornos reproducibles con uv y Docker.
- Notebooks versionados.

## Tecnologías a ver

| Tecnología | Uso | Fuente |
|---|---|---|
| Python | Lenguaje principal | Sugerida (programa: "lenguajes más utilizados") |
| R | Comparación de lenguajes | Sugerida |
| SQL (PostgreSQL / SQLite) | Consulta de datos | Sugerida (articula con Base de Datos) |
| Jupyter / Colab / VS Code | Entornos | Sugerida (programa: "entornos de software") |
| pandas, NumPy | Manipulación de datos | Sugerida |
| Polars / DuckDB | Datos medianos de alto rendimiento | Sugerida |
| Apache Spark (PySpark) | Big Data | Sugerida (programa: "grandes volúmenes") |
| Hadoop | Reemplazado por Spark y la nube | **En desuso** |
| matplotlib, seaborn, plotly | Visualización | Sugerida |
| Power BI / Tableau / Looker Studio | Dashboards y reportes | Sugerida |
| Streamlit | Apps de datos rápidas | Opcional |
| Git + GitHub | Versionado | Sugerida |
| dbt | Transformaciones en el warehouse | **Actualización** |
| Apache Airflow | Orquestación de pipelines | **Actualización** |
| Delta Lake / Apache Iceberg | Lakehouse | **Actualización** |
| BigQuery / Snowflake | Warehouse en la nube | **Actualización** |
| Docker, uv | Reproducibilidad | **Actualización** |

## Articulación

- **Viene de:** Programación I, Sistemas de Comunicación, Base de Datos.
- **Se cruza con:** Ciencia de Datos, Estadísticas y Exploración de Datos.
- **Prepara para:** Testeo de Software (es su correlativa), Práctica Profesionalizante I, Minería de Datos.

## Práctica sugerida

- Pipeline completo: CSV crudo → limpieza con pandas → Parquet → dashboard.
- Mismo análisis con pandas y con PySpark/DuckDB; comparar tiempos.
- Presentar un hallazgo en 5 slides aplicando storytelling.

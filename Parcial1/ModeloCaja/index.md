# ¿Qué es el modelo de caja?

El modelo de caja en HTML y CSS se refiere a cómo se representa y se comporta un elemento HTML en una página web. Cada elemento HTML es considerado como una "caja" rectangular que puede tener dimensiones (ancho y alto) y propiedades de presentación como margen, relleno (padding) y borde.

El modelo de caja consta de las siguientes propiedades básicas:

1. **Contenido (Content):** Es el contenido real del elemento, como el texto, imágenes, videos u otros elementos anidados.

2. **Relleno (Padding):** Es un espacio transparente que rodea el contenido dentro del elementos. En otras palabras, es la distancia que hay entre el contenido y el borde de la caja.

3. **Borde (Border):** Es la linea que rodea el contenido y el relleno.

4. **Margen (Margin):** Es un espacio transparente que rodea el elemento en su totalidad. Se puede controlar el margen para establecer la distancia entre la caja de un elemento y otros elementos cercanos.

![Ejemplo de modelo de caja](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png)

El modelo de caja es fundamental para el diseño y el diseño de páginas web. Permite controlar cómo los elementos se posicionan y cómo interactúan entre sí. Cada uno de estos componentes puede ser ajustado utilizando propiedades CSS específicas.

# Propiedad display

La propiedad display en HTML y CSS se utiliza para controlar cómo se muestra un elemento en una página web. Define cómo se presenta el elemento en el flujo del contenido y cómo interactúa con otros elementos en relación con su presentación actual.

Esta propiedad acepta varios valores que  determinan el comportamiento del elemento. Algunos valores más comunes son:

1. **block:** El elemento se muestra como un bloque, ocupando todo el ancho disponible en su contenedor y comenzando en una nueva línea. Ejemplos de elementos bloque son las etiquetas "div", "p" o "h1".

2. **inline:** El elemento se muestra en línea, ocupando solo el espacio necesario para su contenido sin forzar un salto de línea. Ejemplos de elementos en línea son las etiquetas "span", "a" o "strong",

3. **inline-block:** Similar a inline, pero permite definir dimensiones (ancho, alto) y márgenes como en elementos en bloque. Esto es útil para elementos que deben estar en línea pero que necesitan ajustarse con precisión.

4. **none:** El elemento no se muestra y no ocupa espacio en la maquetación. Se usa para ocultar elementos de manera efectiva.

5. **flex:** Convierte un contenedor en un "contenedor flexible", lo que permite establecer reglas flexibles de distribución y alineación para sus elementos hijos.

6. **grid:** Convierte un contenedor en un "contenedor de cuadrícula", lo que permite definir una cuadrícula para organizar sus elementos hijos en filas y columnas.

7. **table:** Hace que el elemento se comporte como una tabla HTML, generando filas y celdas de tabla.

8. **inline-table:** Similar a table, pero se comporta como una tabla en línea, lo que permite que otros elementos se sitúen en la misma línea.

9. **list-item:** Se utiliza para dar estilo a elementos de lista, como la etiqueta "li" en listas desordenadas o ordenadas.

10. **inherit:** Hereda el valor display del elemento padre.

Además de los valores mencionados anteriormente, la propiedad display puede tener otros valores que son menos comunes pero aún útiles en ciertas situaciones. Aquí se presentan esos valores:

1. **table-cell:** Hace que el elemento se comporte como una celda de tabla HTML. Puede ser útil para lograr un diseño de celdas similar al de una tabla sin necesariamente usar elementos "table".

2. **table-row:** Hace que el elemento se comporte como una fila de tabla HTML. Puede ser utilizado para crear diseños de filas sin necesidad de una tabla real.

3. **table-column:** Hace que el elemento se comporte como una columna de tabla HTML. Se puede usar para crear columnas en diseños sin una estructura de tabla.

4. **table-caption:** Hace que el elemento se comporte como una leyenda (caption) de una tabla HTML.

5 **table-header-group:** Hace que el elemento se comporte como un grupo de encabezado (thead) en una tabla HTML.

6. **table-footer-group:** Hace que el elemento se comporte como un grupo de pie de página (tfoot) en una tabla HTML.

7. **ruby:** Utilizado para crear efectos de ruby en caracteres, como en el texto de idiomas asiáticos.

8. **run-in:** Determina si el elemento debe comportarse como un bloque o en línea, dependiendo del contexto.

9. **flex-inline:** Se usa en combinación con display: flex; para crear elementos flexibles en línea.

10. **flex-inline-block:** Similar a inline-block, pero con comportamiento flexible.

Estos valores menos comunes de display pueden ser útiles en casos específicos en los que necesitas un comportamiento y presentación particular. Sin embargo, es importante tener en cuenta que algunos de estos valores pueden tener un soporte limitado en ciertos navegadores.
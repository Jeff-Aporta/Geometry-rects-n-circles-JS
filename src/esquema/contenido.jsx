const _GEOMETRY_RECTS_N_CIRCLES_ = new GenerarContenidoLibreria({
    nombre: 'Rects n Circles JS',
    slogan: 'Geometría Dinámica: Simplifica tus Colisiones y Transformaciones',
    img: 'src/img/logo.jpeg',

    github: "https://github.com/Jeff-Aporta/Geometry-rects-n-circles-JS",

    resumen: {
        desc: `
            *Rects n Circles JS.* es una librería básica diseñada para manejar colisiones, especialmente en proyectos con p5.js. 
            Permite trabajar con rectángulos y círculos, facilitando su movimiento, redimensionamiento y cálculo de colisiones, 
            uniones e intersecciones. Ideal para crear hitboxes en juegos básicos, la librería incluye clases y funciones para 
            manipular gráficos de manera sencilla.
        `,
        descImg: [
            "Interpretar un número telefónico y determinar su país de origen",
            "Extraer números telefónicos de un texto",
            "Usa la API 'https://flagicons.lipis.dev/flags/' para mostrar la bandera del país"
        ]
    },

    secciones: [
        {
            nombre: "Usar con CDN",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Esta librería proporciona una serie de herramientas y funciones para trabajar con rectángulos y círculos en proyectos de programación.
                        Permite crear, manipular y realizar cálculos geométricos con estas figuras de manera eficiente.
                        Entre sus características se incluyen la capacidad de calcular áreas, perímetros, intersecciones y transformaciones geométricas.
                        <Code nocode className="link">
                            {thisObj.githubPage}/index.js
                        </Code>
                    </FormatoDoc>
                );
            },
        },
        {
            nombre: "Rectángulos",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        El rectángulo es un objeto fundamental en la programación de gráficos y cuenta con su propia clase en esta
                        librería. Se utiliza para almacenar y manipular áreas rectangulares. Puedes crear un objeto rectángulo
                        especificando su posición y tamaño de la siguiente manera:

                        <Code>
                            let rectangulo = new Rectangle(x, y, width, height);
                        </Code>

                        Ejemplo:

                        <Code>
                            let rectangulo = new Rectangle(0, 0, 100, 100); // x=0, y=0, width=100, height=100
                        </Code>

                        rea un rectángulo en la posición (0,0) con un tamaño de 100×100.

                        <br /><br />

                        Para obtener los valores de posición y tamaño una vez establecidos o modificados, puedes usar las
                        propiedades pos y size, como se muestra a continuación:

                        <Code>{`
                            rectangulo.pos  // retorna la posición del rectángulo -> {x:0, y:0}
                            rectangulo.size // retorna el tamaño del rectángulo -> [100, 100]
                        `}</Code>

                        <SubEnvolventeSeccion>
                            <FormatoDoc>
                                Funciones de Rectángulo
                                Estas funciones permiten obtener en tiempo real ciertos datos del objeto, incluso después de haberlo modificado.
                                <br /><br /><br />
                                *Tamaño y Posición.*
                                <ul className="punto-centrico">
                                    <LIDocTitulo>
                                        rectangulo.pos
                                        <div>
                                            Retorna la posición del rectángulo
                                            <Code linenumbers={false}>{`
                                                {
                                                    x: 0,
                                                    y: 0
                                                }
                                            `}</Code>
                                        </div>
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.size
                                        <div>
                                            Retorna el tamaño del rectángulo
                                            <Code>{`
                                                [100, 100]
                                            `}</Code>
                                        </div>
                                    </LIDocTitulo>
                                </ul>
                                *Bordes.*
                                <ul className="punto-centrico">
                                    <LIDocTitulo>
                                        rectangulo.top: Retorna la coordenada ‘y’ del borde superior del rectángulo.
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.bottom: Retorna la coordenada ‘y’ del borde inferior del rectángulo.
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.right: Retorna la coordenada ‘x’ del borde derecho del rectángulo.
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.left: Retorna la coordenada ‘x’ del borde izquierdo del rectángulo.
                                    </LIDocTitulo>
                                </ul>
                                *Vértices*
                                <ul className="punto-centrico">
                                    <LIDocTitulo>
                                        rectangulo.topleft: Retorna un vector que describe la posición superior izquierda del rectángulo.
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.topright: Retorna un vector que describe la posición superior derecha del rectángulo.
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.bottomleft: Retorna un vector que describe la posición inferior izquierda del rectángulo.
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.bottomright: Retorna un vector que describe la posición inferior derecha del rectángulo.
                                    </LIDocTitulo>
                                    <LIDocTitulo>
                                        rectangulo.vertices: Retorna una lista con todos los vértices anteriormente descritos.
                                    </LIDocTitulo>
                                </ul>
                                *Definición*
                                <ul className="punto-centrico">
                                    <LIDocTitulo>
                                        rectangulo._defined: Retorna true o false si el rectángulo está definido.
                                    </LIDocTitulo>
                                </ul>
                            </FormatoDoc>
                        </SubEnvolventeSeccion>
                        <SubEnvolventeSeccion>
                            <FormatoDoc>
                                Para la representación gráfica se hará uso de la librería p5.js para el tratamiento gráfico en un 
                                entorno de programación. En particular,
                                <br /><br />
                                se presenta un ejemplo de cómo mover un rectángulo en la pantalla siguiendo la posición del ratón. 
                                La librería p5.js facilita la creación y manipulación de gráficos, permitiendo a los desarrolladores 
                                implementar interacciones visuales de manera sencilla y eficiente.
                            </FormatoDoc>

                            <Code>{`
                                // Este código utiliza la librería p5.js para el tratamiento gráfico

                                // Función de configuración inicial
                                function setup() {
                                    // Creación de un objeto rectángulo en el centro del lienzo
                                    rectangulo = new Rectangle(width / 2 - 75, height / 2 - 75, 150, 150);
                                }

                                function draw() {
                                    // Actualización de la posición del rectángulo según la posición del ratón
                                    rectangulo.move(
                                        mouseX - rectangulo.w / 2,
                                        mouseY - rectangulo.h / 2
                                    );
                                    // Dibujo del rectángulo en su nueva posición
                                    rectangulo.draw();
                                }
                            `}</Code>

                            <iframe src="src/muestras/rectangle-move.html" class="muestra-code"></iframe>


                        </SubEnvolventeSeccion>

                    </FormatoDoc>
                );
            },
        },
    ]
});
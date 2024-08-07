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
                                La librería p5.js facilita la creación y manipulación de gráficos.
                            </FormatoDoc>
                        </SubEnvolventeSeccion>

                    </FormatoDoc>
                );
            },
        },
        {
            nombre: "Rectangle.move(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Mover un rectángulo"
                        desc="Ejemplo de cómo mover un rectángulo, en este caso siguiendo la posición del ratón."
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/rectangle-move.html"
                    >{`
                        // Función de configuración inicial
                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            // Creación de un objeto rectángulo en el centro del lienzo
                            rectangulo = new Rectangle(width / 2 - 75, height / 2 - 75, 150, 150)
                        }

                        function draw() {
                            // Actualización de la posición del rectángulo según la posición del ratón
                            rectangulo.move(
                                    mouseX - rectangulo.w / 2,
                                    mouseY - rectangulo.h / 2
                            )
                            // Dibujo del rectángulo en su nueva posición
                            background(220);
                            fill(255, 0, 0, 100)
                            noStroke()
                            rectangulo.draw()
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Rectangle.resize(w, h)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Redimensionar un rectángulo"
                        desc="Ejemplo de cómo cambiar el tamaño de un rectángulo, en este caso siguiendo la posición del ratón."
                        url="src/muestras/rectangle-resize.html"
                    >{`
                        // Función de configuración inicial
                        function setup() {
                            createCanvas(windowWidth - 10, windowHeight - 10);
                            rectangulo = new Rectangle(width / 2, height / 2, 150, 150);
                        }

                        function draw() {
                            rectangulo.resize(
                                mouseX - rectangulo.x, 
                                mouseY - rectangulo.y
                            );
                            // Dibujo del rectángulo en su nueva posición
                            background(220);
                            fill(255, 0, 0, 100);
                            stroke(0);
                            strokeWeight(1);
                            line(rectangulo.x, rectangulo.y, mouseX, mouseY);
                            rectangulo.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Rectangle.collidePoint(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Colisión punto-rectángulo"
                        desc="Ejemplo de cómo detectar si un punto colisiona con un rectángulo, en este caso siguiendo la posición del ratón."
                        url="src/muestras/rectangle-collide-point.html"
                    >{`
                        // Función de configuración inicial
                        function setup() {
                            createCanvas(windowWidth - 10, windowHeight - 10);
                            rectangulo = new Rectangle(width / 2, height / 2, 150, 150);
                        }

                        function draw() {
                            rectangulo.resize(
                                mouseX - rectangulo.x, 
                                mouseY - rectangulo.y
                            );
                            // Dibujo del rectángulo en su nueva posición
                            background(220);
                            fill(255, 0, 0, 100);
                            stroke(0);
                            strokeWeight(1);
                            line(rectangulo.x, rectangulo.y, mouseX, mouseY);
                            rectangulo.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Rectangle.isInside(otherRect)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="¿Está un rectángulo dentro de otro?"
                        desc="Ejemplo de cómo detectar si un rectángulo está completamente dentro de otro rectángulo."
                        url="src/muestras/rectangle-collide-rectangle.html"
                    >{`
                        // Función de configuración inicial
                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            // Creación de un objeto rectángulo en el centro del lienzo.
                            rectangulo = new Rectangle(width / 2 - 150, height / 2 - 50, 300, 100)
                            // Creación de un segundo objeto rectángulo.
                            rectangulo2 = new Rectangle(0, 0, 150, 150);
                            noStroke()
                        }

                        function draw() {
                            // Verificación de colisión entre los dos rectángulos.
                            const colisionRectanguloRectangulo = rectangulo.isInside(rectangulo2);
                            if (colisionRectanguloRectangulo) {
                                fill(0, 255, 0, 100) // Verde (Hay colisión)
                            }
                            else {
                                fill(255, 0, 0, 100) // Rojo (No hay colisión)
                            }
                            resizeCanvas(windowWidth, windowHeight)
                            // Dibujado del rectángulo indicando si hay colisión o no
                            background(220);
                            noStroke()
                            rectangulo.draw()
                            rectangulo2.move(
                                    mouseX - rectangulo2.w / 2,
                                    mouseY - rectangulo2.h / 2
                            )
                            rectangulo2.draw()
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Rectangle.collideRect(otherRect)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Colisión rectángulo-rectángulo"
                        desc="Ejemplo de cómo detectar si dos rectángulos colisionan entre sí."
                        url="src/muestras/rectangle-collide-rectangle.html"
                    >{`
                        // Función de configuración inicial
                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            // Creación de un objeto rectángulo en el centro del lienzo.
                            rectangulo = new Rectangle(width / 2 - 150, height / 2 - 50, 300, 100);
                            // Creación de un segundo objeto rectángulo.
                            rectangulo2 = new Rectangle(0, 0, 150, 150);
                            noStroke();
                        }

                        function draw() {
                            // Verificación de colisión entre los dos rectángulos.
                            const colisionRectanguloRectangulo = rectangulo.collideRect(rectangulo2);

                            if (colisionRectanguloRectangulo) {
                                fill(0, 255, 0, 100); // Verde (Hay colisión)
                            } else {
                                fill(255, 0, 0, 100); // Rojo (No hay colisión)
                            }

                            // Dibujado del rectángulo indicando si hay colisión o no
                            background(220);
                            noStroke();
                            rectangulo.draw();
                            rectangulo2.move(
                                mouseX - rectangulo2.w / 2,
                                mouseY - rectangulo2.h / 2
                            );
                            rectangulo2.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Rectangle.intersect(otherRect)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Intersección de rectángulos"
                        desc="Ejemplo de cómo calcular la intersección entre dos rectángulos."
                        url="src/muestras/rectangle-intersect.html"
                    >{`
                        // Función para ajustar las propiedades iniciales del proyecto
                        function setup() {
                            createCanvas(windowWidth - 10, windowHeight - 10);
                            rectangulo = new Rectangle(width / 2 - 150, height / 2 - 50, 300, 100);
                            rectangulo2 = new Rectangle(0, 0, 100, 300);
                        }

                        function draw() {
                            rectangulo2.move(
                                mouseX - rectangulo2.w / 2,
                                mouseY - rectangulo2.h / 2
                            );

                            background(220);

                            fill(255, 0, 0, 100); // Rojo para los rectangulos a intersectar
                            rectangulo.draw();
                            rectangulo2.draw();

                            let intersecto = rectangulo2.intersect(rectangulo);
                            fill(0, 255, 0, 100); // Verde para el intersecto
                            intersecto.draw();

                            noStroke();
                            fill("black");
                            textAlign(CENTER, CENTER);
                            text("Intersecto", intersecto.centerX, intersecto.centerY);
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Rectangle.union(otherRect)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Unión de rectángulos"
                        desc="Ejemplo de cómo calcular la unión entre dos rectángulos."
                        url="src/muestras/rectangle-union.html"
                    >{`
                        // Función para ajustar las propiedades iniciales del proyecto
                        function setup() {
                            createCanvas(windowWidth , windowHeight);
                            rectangulo = new Rectangle(width / 2 - 75, height / 2 - 75, 150, 150);
                            rectangulo2 = new Rectangle(0, 0, 150, 150);
                        }

                        function draw() {
                            //efecto de reposición con el mouse
                            rectangulo2.move(
                                mouseX - rectangulo2.w / 2,
                                mouseY - rectangulo2.h / 2
                            );

                            //Dibujado de los rectángulos

                            background(220);

                            //Ajustes gráficos
                            noStroke();
                            fill(255, 0, 0, 100);

                            //Dibujado de los rectángulos a unir
                            rectangulo.draw();
                            rectangulo2.draw();


                            let union = rectangulo.union(rectangulo2);
                            
                            //Dibujado de la unión
                            noFill();
                            stroke(255, 0, 0);
                            strokeWeight(1);
                            union.draw();

                            noStroke();
                            fill("black");
                            textAlign(CENTER, CENTER);
                            text("unión", union.centerX, union.centerY);
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
    ]
});
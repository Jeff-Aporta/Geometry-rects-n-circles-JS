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
    dosParametros: (
        <ul className="punto-centrico">
            <LIDoc>
                (x,y)
                <p>
                    Dos parámetros para las coordenadas x e y del punto.
                </p>
            </LIDoc>
            <LIDoc>
                (obj)
                <p>
                    Un objeto con las coordenadas x e y del punto.
                </p>
            </LIDoc>
        </ul>
    ),

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
                            createCanvas(windowWidth, windowHeight );
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
                            createCanvas(windowWidth, windowHeight );
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
                            createCanvas(windowWidth, windowHeight );
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
                        let rectanguloCentro, rectanguloCursor;

                        // Función para ajustar las propiedades iniciales del proyecto
                        function setup() {
                            createCanvas(windowWidth , windowHeight);
                            rectanguloCentro = new Rectangle(width / 2 - 75, height / 2 - 75, 150, 150);
                            rectanguloCursor = new Rectangle(0, 0, 150, 150);
                        }

                        function draw() {
                            //efecto de reposición con el mouse
                            rectanguloCursor.move(
                                mouseX - rectanguloCursor.w / 2,
                                mouseY - rectanguloCursor.h / 2
                            );

                            //Dibujado de los rectángulos

                            background(220);

                            //Ajustes gráficos
                            noStroke();
                            fill(255, 0, 0, 100);

                            //Dibujado de los rectángulos a unir
                            rectanguloCentro.draw();
                            rectanguloCursor.draw();


                            let union = rectanguloCentro.union(rectanguloCursor);
                            
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
        {
            nombre: "Círculos",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los círculos, en muchas ocasiones, pueden proporcionar una mejor estimación de colisión que los rectángulos.
                        La inicialización de un círculo es muy similar a la de los rectángulos.

                        <Code>
                            let circulo = new Circle(cx, cy, d);
                        </Code>

                        <SubEnvolventeSeccion>
                            <ul className="punto-centrico">
                                <LIDocTitulo>
                                    cx: coordenada x del centro del círculo.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    cy: coordenada y del centro del círculo.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    d: diámetro del círculo.
                                </LIDocTitulo>
                            </ul>
                        </SubEnvolventeSeccion>
                        <br />
                        Ejemplo:

                        <Code>
                            let circulo = new Circle(0, 0, 50); // x=0, y=0, radio=50
                        </Code>

                        Crea un círculo en la posición (0,0) con un radio de 50 unidades.

                        <br /><br />

                        Para obtener los valores de posición y radio una vez establecidos o modificados, puedes usar las propiedades pos y r,
                        como se muestra a continuación:

                        <Code>{`
                            circulo.center  // retorna la posición del círculo -> {x:0, y:0}
                            circulo.r    // retorna el radio del círculo -> 50
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Circle.distanceCenter(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los objetos Circle tienen una función distanceCenter(x, y) que calcula la distancia entre el centro del
                        círculo y un punto dado,
                        <small
                            style={{
                                opacity: 0.7,
                            }}
                        >
                            &nbsp;(Esta función es útil para determinar si un punto está dentro del círculo).
                        </small>
                        <p>
                            La función admite
                            <br />
                            {thisObj.dosParametros}
                            Y retorna la distancia entre el centro del círculo y el punto dado.
                        </p>
                        <Code
                            linenumbers={false}
                        >{`
                            let circulo1 = new Circle(200, 200, 100);
                            let punto = { x: 300, y: 300 };

                            // Calcular la distancia entre el centro del círculo y el punto
                            let distancia = circulo1.distanceCenter(punto);
                            /*
                                O también se puede hacer:
                                let distancia = circulo1.distanceCenter(punto.x, punto.y);
                            */
                            console.log("Distancia al punto:", distancia, "pixeles");
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Circle.angleCenter(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los objetos Circle tienen una función angleCenter(x, y) que calcula el angulo entre el centro del
                        círculo y un punto dado.
                        <p>
                            La función admite
                            <br />
                            {thisObj.dosParametros}
                            Y retorna el ángulo en radianes entre el centro del círculo y el punto dado.
                        </p>
                        <Code
                            linenumbers={false}
                        >{`
                            let circulo1 = new Circle(200, 200, 100);
                            let punto = { x: 300, y: 300 };

                            // Calcular el ángulo entre el centro del círculo y el punto
                            let angulo = circulo1.angleCenter(punto);
                            /*
                                O también se puede hacer:
                                let angulo = circulo1.angleCenter(punto.x, punto.y);
                            */
                            console.log("Ángulo al punto:", angulo, "radianes");
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Circle.angleToBorder(a, dr = 0)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los objetos Circle tienen una función angleCenter(x, y) que calcula el angulo entre el centro del
                        círculo y un punto dado.
                        <p>
                            La función admite únicamente angulos en radianes y un valor opcional dr que representa un
                            desfase en el radio del círculo.
                            <p>
                                retorna un objeto con las coordenadas x e y del punto en el borde del círculo en el ángulo dado y
                                con el desfase de radio especificado.
                            </p>
                        </p>
                        <CodigoConRepresentacion
                            titulo="Punto en el borde del círculo"
                            desc="Ejemplo de cómo obtener las coordenadas de un punto en el borde de un círculo."
                            url="src/muestras/Circle.angleToBorder.html"
                        >{`
                            let circuloCentro;

                            let angulo = 0;

                            function setup() {
                                createCanvas(windowWidth, windowHeight);
                                circuloCentro = new Circle(width / 2, height / 2, 150);
                            }

                            function windowResized() {
                                circuloCentro = new Circle(width / 2, height / 2, 150);
                            }

                            function draw() {
                                resizeCanvas(windowWidth, windowHeight);

                                // Se incrementa el ángulo para obtener un punto en la circunferencia.
                                angulo += 0.01;
                                const p = circuloCentro.angleToBorder(angulo);


                                background(220);
                                noStroke();

                                fill(255, 0, 0, 100);
                                circuloCentro.draw();

                                fill("green");
                                circle(p.x, p.y, 10);
                            }
                        `}</CodigoConRepresentacion>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Circle.move(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Mover un círculo"
                        desc="Ejemplo de cómo mover un círculo en la pantalla siguiendo la posición del cursor."
                        url="src/muestras/circle-move.html"
                    >{`
                        let circuloCursor;

                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            // Creación de un objeto círculo.
                            circuloCursor = new Circle(0, 0, 100);
                        }

                        function draw() {
                            resizeCanvas(windowWidth, windowHeight);

                            circuloCursor.move(mouseX, mouseY);

                            background(220);
                            // Dibujar un círculo en la posición del cursor.
                            fill(255, 0, 0, 100);
                            noStroke();
                            circuloCursor.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "GET/SET Circle.r",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Redimensionar un círculo"
                        desc="Ejemplo de cómo cambiar el tamaño de un círculo, en este caso siguiendo la posición del cursor."
                        url="src/muestras/circle-resize.html"
                    >{`
                        let circulo;

                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            // Creación de un circulo en el centro.
                            circulo = new Circle(width / 2, height / 2, 100);
                        }

                        function draw() {
                            // Cambio de radio del circulo según la distancia al centro.
                            let d = circulo.distanceCenter(mouseX, mouseY);
                            circulo.r = d;

                            background(220);

                            fill(255, 0, 0, 100);
                            noStroke();
                            circulo.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Circle.toRect()",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Rectángulo que contiene un círculo"
                        desc="Ejemplo de cómo crear un rectángulo que contiene un círculo y seguir su posición."
                        url="src/muestras/circle-outer-rectangle.html"
                    >{`
                            let circulo;

                            function setup() {
                                createCanvas(windowWidth, windowHeight);
                                // Creación de un circulo.
                                circulo = new Circle(0, 0, 100);
                            }

                            function draw() {
                                // Efecto de arrastre del circulo con el cursor.
                                circulo.move(mouseX, mouseY);
                                // Creación de un rectángulo que contiene al circulo.
                                const rect = circulo.toRect();

                                background(220);
                                noStroke();

                                fill(255, 0, 0, 100);
                                circulo.draw();

                                stroke(255, 0, 0);
                                noFill();
                                rect.draw();
                            }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Circle.collidePoint(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Colisión punto-círculo"
                        desc="Ejemplo de cómo detectar si un punto colisiona con un círculo, en este caso con el cursor."
                        url="src/muestras/circle-collide-point.html"
                    >{`
                        let circulo;

                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            circulo = new Circle(width / 2, height / 2, 100);
                        }

                        function draw() {
                            // Se determina si la posición del cursor colisiona con el círculo.
                            const colicionPuntoCirculo = circulo.collidePoint(mouseX, mouseY);

                            if (colicionPuntoCirculo) {
                                fill(0, 255, 0, 100); // Verde (Hay colisión).
                            } else {
                                fill(255, 0, 0, 100); // Rojo (No hay colisión).
                            }

                            background(220);
                            noStroke();
                            circulo.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Circle.collideRect(rect)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Colisión círculo-rectángulo"
                        desc="Ejemplo de cómo detectar si un círculo colisiona con un rectángulo."
                        url="src/muestras/circle-rect-collide.html"
                    >{`
                        let circulo, rectangulo;

                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            circulo = new Circle(0, 0, 100);
                            rectangulo = new Rectangle(width / 2 - 75, height / 2 - 75, 150, 150);
                        }

                        function draw() {
                            // Efecto de arrastre del circulo con el cursor.
                            circulo.move(mouseX, mouseY);

                            // Se determina si hay colisión entre el circulo y el rectángulo.
                            const hayColicionCirculoRectangulo = circulo.collideRect(rectangulo);

                            if (hayColicionCirculoRectangulo) {
                                fill(128, 200, 0, 100); // Verde (Hay colisión).
                            }else{
                                fill(255, 0, 0, 100); // Rojo (No hay colisión).
                            }

                            background(220);

                            noStroke();
                            circulo.draw();
                            rectangulo.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Circle.collideCircle(otherCircle)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Colisión círculo-círculo"
                        desc="Ejemplo de cómo detectar si dos círculos colisionan entre sí."
                        url="src/muestras/circle-collide-circle.html"
                    >{`
                        let circuloCursor, circuloCentro;

                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            circuloCentro = new Circle(width / 2, height / 2, 150);
                            circuloCursor = new Circle(0, 0, 100);
                        }

                        function draw() {
                            // Efecto de arrastre del circulo con el cursor.
                            circuloCursor.move(mouseX, mouseY);

                            // Se determina si hay colisión entre los dos círculos.
                            const colicionCirculoCirculo = circuloCursor.collideCircle(circuloCentro);

                            if (colicionCirculoCirculo) {
                                fill(0, 255, 0, 100); // Verde (Hay colisión).
                            }else{
                                fill(255, 0, 0, 100); // Rojo (No hay colisión).
                            }

                            background(220);
                            noStroke();
                            
                            circuloCursor.draw();
                            circuloCentro.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Circle.isInside_circle(otherCircle)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="¿Está un círculo dentro de otro?"
                        desc="Ejemplo de cómo determinar si un círculo está completamente dentro de otro círculo."
                        url="src/muestras/circle-detection-inside.html"
                    >{`
                        let circuloCursor, circuloCentro;

                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            circuloCursor = new Circle(0, 0, 100);
                            circuloCentro = new Circle(width / 2, height / 2, 150);
                        }

                        function draw() {
                            // Efecto de arrastre del circulo con el cursor.
                            circuloCursor.move(mouseX, mouseY);

                            // Se determina si el circulo del cursor está dentro del circulo del centro.
                            const estaDentro = circuloCursor.isInside_circle(circuloCentro);

                            if (estaDentro) {
                                fill(0, 255, 0, 100); // Verde (Hay colisión).
                            } else {
                                fill(255, 0, 0, 100); // Rojo (No hay colisión).
                            }

                            background(220);

                            noStroke();
                            circuloCursor.draw();
                            circuloCentro.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
    ]
});
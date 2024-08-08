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

    SVG: function ({ s, children }) {
        return (
            <div
                className={CSScmds(`
                        x>850px{
                            ${s ? "margin-right: (20px,);" : ""}
                            ${s ? "margin-bottom: (20px,);" : ""}
                            ${!s ? "margin-top: (,20px);" : ""}
                            ${s ? "text-align: (center,);" : ""}
                            float: (left, );
                            text-align: (,center);
                            display: [
                                ${s ? "block" : "none"},
                                ${!s ? "block" : "none"}
                            ];
                        }
                    `)}
            >
                <svg
                    width="250"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        backgroundColor: "white",
                        filter: "invert(0.92) hue-rotate(240deg)",
                        borderRadius: "20px",
                    }}
                >
                    {children}
                </svg>
            </div>
        );
    },

    DobleSVG: function ({ children, g }) {
        return (
            <React.Fragment>
                <this.SVG s>
                    {g}
                </this.SVG>
                {children}
                <this.SVG>
                    {g}
                </this.SVG>
            </React.Fragment>
        );
    },

    G: function ({ shape, extra, x, y, w, h }) {
        return (
            <g
                transform={`translate(${x}, ${y})`}
            >
                {shape}
                <this.Ejes />
                {extra}
                <this.Origen x={x} y={y} />
            </g>
        );
    },

    Origen: function ({ x, y }) {
        return (
            <React.Fragment>
                <text x="-5" y="-5" font-family="Arial" font-size="12" fill="black"
                    text-anchor="end"
                >
                    ({x},{y})
                </text>
                <circle cx="0" cy="0" r="5" fill="black" />
            </React.Fragment>
        )
    },

    Ejes: function () {
        return (
            <React.Fragment>
                <line x1="0" y1="-100" x2="0" y2="200" stroke="rgba(0,0,0,0.3)" stroke-width="1" />
                <line x1="-100" y1="0" x2="200" y2="0" stroke="rgba(0,0,0,0.3)" stroke-width="1" />
            </React.Fragment>
        );
    },

    Code: function ({ children }) {
        return (
            <Code
                linenumbers={false}
                style={{
                    width: "auto",
                }}
                fullW={false}
            >
                {children}
            </Code>
        );
    },

    testR: { x: 60, y: 50, w: 100, h: 120 },

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
            nombre: "GET Rectangle.pos",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <text x="5" y="-5" font-family="Arial" font-size="12" fill="blue" font-weight="bold">
                                    pos = {`{x: ${x}, y: ${y}}`}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET pos que devuelve la posición superior izquierda del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            let posicion = rectangulo.pos;
        
                            console.log("Posición del rectángulo:", posicion);
                        `}</thisObj.Code>
                        <p>
                            Se observará que la posición devuelta es {`{x: ${x}, y: ${y}}`}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.size",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1="0" y1="0" x2={w} y2="0" stroke="blue" stroke-width="2" />
                                <text x={w / 2} y="-5" font-family="Arial" font-size="12" fill="blue"
                                    text-anchor="middle"
                                >
                                    w = {w}
                                </text>
                                <line x1="0" y1="0" x2="0" y2={h} stroke="blue" stroke-width="2" />
                                <text x="-5" y={h / 2} font-family="Arial" font-size="12" fill="blue"
                                    text-anchor="end"
                                >
                                    h = {h}
                                </text>
                                <text x={w / 2} y={h / 2} font-family="Arial" font-size="12" fill="black"
                                    text-anchor="middle" dominant-baseline="middle"
                                >
                                    size = [{w},{h}]
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET size que devuelve un array
                            con el ancho y la altura del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const sz = rectangulo.size;
        
                            console.log("Tamaño del rectángulo:", sz);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el tamaño devuelto es [{w},{h}].
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.top",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1="0" y1="0" x2={w} y2="0" stroke="red" stroke-width="2" />
                                <text x={w / 2} y="-5" font-family="Arial" font-size="12" fill="red"
                                    text-anchor="middle"
                                >
                                    top = {y}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET top que devuelve la coordenada
                            'y' del borde superior del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const bordeSuperior = rectangulo.top;

                            console.log("Borde superior del rectángulo:", bordeSuperior);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el borde derecho devuelto es {y}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.right",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1={w} y1="0" x2={w} y2={h} stroke="red" stroke-width="2" />
                                <text x={w + 5} y={h / 2} font-family="Arial" font-size="12" fill="red">
                                    right = 150
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET right que devuelve la coordenada x
                            del borde derecho del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const bordeDerecho = rectangulo.right;
        
                            console.log("Borde derecho del rectángulo:", bordeDerecho);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el borde derecho devuelto es {x + w}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.bottom",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1="0" y1={h} x2={w} y2={h} stroke="red" stroke-width="2" />
                                <text x={w / 2} y={h - 5} font-family="Arial" font-size="12" fill="red"
                                    text-anchor="middle"
                                >
                                    bottom = {y + h}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET bottom que devuelve la coordenada 'y'
                            del borde inferior del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            let bordeInferior = rectangulo.bottom;
        
                            console.log("Borde inferior del rectángulo:", bordeInferior);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el borde inferior devuelto es {y + h}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.left",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1="0" y1="0" x2="0" y2={h} stroke="red" stroke-width="2" />
                                <text x="5" y={h / 2} font-family="Arial" font-size="12" fill="red"
                                    dominant-baseline="middle"
                                >
                                    left = {x}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET left que devuelve la coordenada x
                            del borde izquierdo del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            let bordeIzquierdo = rectangulo.left;
        
                            console.log("Borde izquierdo del rectángulo:", bordeIzquierdo);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el borde izquierdo devuelto es {x}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.centerX",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1={w / 2} y1="0" x2={w / 2} y2={h} stroke="rgba(0, 0, 255, 0.4)" stroke-width="1" />
                                <circle cx={w / 2} cy={h / 2} r="3" fill="black" />
                                <text x={w / 2} y={h / 2 - 10} font-family="Arial" font-size="12" fill="black"
                                    text-anchor="middle"
                                >
                                    centerX = {w / 2}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET centerX que devuelve la coordenada x del centro del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const centroX = rectangulo.centerX;
        
                            console.log("Centro X del rectángulo:", centroX);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el centro X devuelto es {x + w / 2}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.centerY",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1="0" y1={h / 2} x2={w} y2={h / 2} stroke="rgba(0, 0, 255, 0.4)" stroke-width="1" />
                                <circle cx={w / 2} cy={h / 2} r="3" fill="black" />
                                <text x={w / 2} y={h / 2 - 10} font-family="Arial" font-size="12" fill="black"
                                    text-anchor="middle"
                                >
                                    centerY = {h / 2}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET centerY que devuelve la coordenada y del centro del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const centroY = rectangulo.centerY;
        
                            console.log("Centro Y del rectángulo:", centroY);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el centro Y devuelto es {y + h / 2}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.center",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <line x1="0" y1={h / 2} x2={w} y2={h / 2} stroke="rgba(0, 0, 255, 0.4)" stroke-width="1" />
                                <line x1={w / 2} y1="0" x2={w / 2} y2={h} stroke="rgba(0, 0, 255, 0.4)" stroke-width="1" />
                                <circle cx={w / 2} cy={h / 2} r="3" fill="black" />
                                <text x={w / 2} y={h / 2 - 10} font-family="Arial" font-size="12" fill="blue"
                                    font-weight="bold"
                                    text-anchor="middle"
                                >
                                    center = {`{x: ${x + w / 2}, y: ${y + h / 2} }`}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET center que devuelve un objeto con las coordenadas
                            x e y del centro del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            let centro = rectangulo.center;
        
                            console.log("Centro del rectángulo:", centro);
                        `}</thisObj.Code>
                        <p>
                            Se observará que el centro devuelto es {`{x: ${x + w / 2}, y: ${y + h / 2} }`}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.topleft",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <circle cx="0" cy="0" r="3" fill="black" />
                                <text x="5" y="20" font-family="Arial" font-size="12" fill="blue" font-weight="bold">
                                    topleft = {`{x: ${x}, y: ${y}}`}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET topleft que devuelve un objeto con las coordenadas x e y
                            de la esquina superior izquierda del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const esquinaSuperiorIzquierda = rectangulo.topleft;
        
                            console.log("Esquina superior izquierda del rectángulo:", esquinaSuperiorIzquierda);
                        `}</thisObj.Code>
                        <p>
                            Se observará que la esquina superior izquierda devuelta es {`{x: ${x}, y: ${y}}`}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.topright",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <circle cx={w} cy="0" r="3" fill="black" />
                                <text x={w} y="-10" font-family="Arial" font-size="12" fill="blue"
                                    text-anchor="middle"
                                    font-weight="bold"
                                >
                                    topright = {`{x: ${x + w}, y: ${y}}`}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET topright que devuelve un objeto con las coordenadas
                            x e y de la esquina superior derecha del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const esquinaSuperiorDerecha = rectangulo.topright;
        
                            console.log("Esquina superior derecha del rectángulo:", esquinaSuperiorDerecha);
                        `}</thisObj.Code>
                        <p>
                            Se observará que la esquina superior derecha devuelta es {`{x: ${x + w}, y: ${y}}`}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.bottomleft",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <circle cx="0" cy={h} r="3" fill="black" />
                                <text x="5" y={h - 5} font-family="Arial" font-size="12" fill="blue" font-weight="bold">
                                    bottomleft = {`{x: ${x}, y: ${y + h}}`}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET bottomleft que devuelve un objeto con las coordenadas
                            x e y de la esquina inferior izquierda del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const esquinaInferiorIzquierda = rectangulo.bottomleft;
        
                            console.log("Esquina inferior izquierda del rectángulo:", esquinaInferiorIzquierda);
                        `}</thisObj.Code>
                        <p>
                            Se observará que la esquina inferior izquierda devuelta es {`{x: ${x}, y: ${y + h}}`}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.bottomright",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <circle cx={w} cy={h} r="3" fill="black" />
                                <text x={w} y={h - 5} font-family="Arial" font-size="12" fill="blue" font-weight="bold"
                                    text-anchor="middle"
                                >
                                    bottomright = {`{x: ${x + w}, y: ${y + h}}`}
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET bottomright que devuelve un objeto con las coordenadas
                            x e y de la esquina inferior derecha del rectángulo.
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const esquinaInferiorDerecha = rectangulo.bottomright;
        
                            console.log("Esquina inferior derecha del rectángulo:", esquinaInferiorDerecha);
                        `}</thisObj.Code>
                        <p>
                            Se observará que la esquina inferior derecha devuelta es {`{x: ${x + w}, y: ${y + h}}`}.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle.vertices",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                const { x, y, w, h } = thisObj.testR;
                const g = (
                    <thisObj.G
                        {...thisObj.testR}
                        shape={<rect x="0" y="0" width={w} height={h} fill="lightblue" stroke="black" stroke-width="2" />}
                        extra={
                            <React.Fragment>
                                <circle cx="0" cy="0" r="3" fill="black" />
                                <text x="5" y="-5" font-family="Arial" font-size="12" fill="blue" text-anchor="middle">
                                    topleft
                                </text>
                                <circle cx={w} cy="0" r="3" fill="black" />
                                <text x={w} y="-5" font-family="Arial" font-size="12" fill="blue" text-anchor="middle">
                                    topright
                                </text>
                                <circle cx="0" cy={h} r="3" fill="black" />
                                <text x="5" y={h - 5} font-family="Arial" font-size="12" fill="blue" text-anchor="middle">
                                    bottomleft
                                </text>
                                <circle cx={w} cy={h} r="3" fill="black" />
                                <text x={w} y={h - 5} font-family="Arial" font-size="12" fill="blue" text-anchor="middle">
                                    bottomright
                                </text>
                            </React.Fragment>
                        }
                    />
                );

                return (
                    <FormatoDoc>
                        <thisObj.DobleSVG g={g}>
                            Los objetos Rectangle tienen una función GET vertices que devuelve un array con las coordenadas
                            de las cuatro esquinas del rectángulo:
                        </thisObj.DobleSVG>
                        <thisObj.Code>{`
                            let rectangulo = new Rectangle(${x}, ${y}, ${w}, ${h});
                            const vertices = rectangulo.vertices;
        
                            console.log("Vértices del rectángulo:", vertices);
                        `}</thisObj.Code>
                        Se observará que los vértices devueltos son
                        <br />
                        <br />
                        <br />
                        <thisObj.Code>{`
                            // [topleft, topright, bottomleft, bottomright]
                            [
                                {x: ${x}, y: ${y} }, // topleft
                                {x: ${x + w}, y: ${y} }, // topright
                                {x: ${x}, y: ${y + h} }, // bottomleft
                                {x: ${x + w}, y: ${y + h} } // bottomright
                            ]
                        `}</thisObj.Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "GET Rectangle._defined",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los objetos Rectangle tienen una función GET _defined que verifica si las propiedades
                        x, y, w y h están definidas y devuelve true si todas están definidas,
                        de lo contrario, devuelve false.
                        <Code
                            linenumbers={false}
                        >{`
                            let rectangulo = new Rectangle(50, 50, 100, 100);
                            let definido = rectangulo._defined;
        
                            console.log("El rectángulo está definido:", definido);
                        `}</Code>
                        <p>
                            Se observará que el valor devuelto es true.
                        </p>
                        <Code
                            linenumbers={false}
                        >{`
                            let rectangulo = new Rectangle();
                            let definido = rectangulo._defined;
        
                            console.log("El rectángulo está definido:", definido);
                        `}</Code>
                        <p>
                            Se observará que el valor devuelto es false.
                        </p>
                    </FormatoDoc>
                );
            }
        },

        {
            nombre: "GET Rectangle.copy",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los objetos Rectangle tienen una función GET copy que crea una copia del rectángulo.
                        <Code
                            linenumbers={false}
                        >{`
                            let rectangulo = new Rectangle(0, 0, 100, 100);
                            let rectanguloCopia = rectangulo.copy;

                            rectanguloCopia.move(100, 100);

                            console.log("Rectángulo original:", rectangulo.pos);
                            console.log("Rectángulo copia:", rectanguloCopia.pos);
                        `}</Code>
                        <p>
                            Se tendrá que observar que el círculo original no se ha movido, mientras que la copia sí.
                        </p>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Rectangle.move(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Mover un rectángulo"
                        desc="Ejemplo de cómo mover un rectángulo, en este caso siguiendo la posición del ratón."
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/rectangle-move.html"
                    >{`
                        
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
                            background(30);
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/rectangle-resize.html"
                    >{`
                        
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
                            background(30);
                            fill(255, 0, 0, 100);
                            stroke(255);
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/rectangle-detect-other-inside.html"
                    >{`
                        let rectangulo, rectanguloCursor;
                        
                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            rectangulo = new Rectangle(width / 2 - 150, height / 2 - 50, 300, 100)
                            rectanguloCursor = new Rectangle(0, 0, 150, 150);
                        }

                        function draw() {
                            rectanguloCursor.move(
                                mouseX - rectanguloCursor.w / 2,
                                mouseY - rectanguloCursor.h / 2
                            )
                            // Verificación de colisión entre los dos rectángulos.
                            const colisionRectanguloRectangulo = rectangulo.isInside(rectanguloCursor);
                            if (colisionRectanguloRectangulo) {
                                fill(0, 255, 0, 100) // Verde (Hay colisión)
                            }
                            else {
                                fill(255, 0, 0, 100) // Rojo (No hay colisión)
                            }
                            // Dibujado del rectángulo indicando si hay colisión o no
                            background(30);
                            noStroke()
                            rectangulo.draw()
                            rectanguloCursor.draw()
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/rectangle-intersect.html"
                    >{`
                        let rectangulo, rectanguloCursor;

                        // Función para ajustar las propiedades iniciales del proyecto
                        function setup() {
                            createCanvas(windowWidth, windowHeight );
                            rectangulo = new Rectangle(width / 2 - 150, height / 2 - 50, 300, 100);
                            rectanguloCursor = new Rectangle(0, 0, 100, 300);
                        }

                        function draw() {
                            // Efecto de reposición con el mouse
                            rectanguloCursor.move(
                                mouseX - rectanguloCursor.w / 2,
                                mouseY - rectanguloCursor.h / 2
                            );

                            background(30);

                            fill(255, 0, 0, 100); // Rojo para los rectangulos a intersectar
                            rectangulo.draw();
                            rectanguloCursor.draw();

                            let intersecto = rectanguloCursor.intersect(rectangulo);
                            fill(0, 255, 0, 100); // Verde para el intersecto
                            intersecto.draw();

                            noStroke();
                            fill("white");
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/rectangle-union.html"
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

                            background(30);

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
                            fill("white");
                            textAlign(CENTER, CENTER);
                            text("unión", union.centerX, union.centerY);
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/rectangle-collide-point.html"
                    >{`
                        
                        function setup() {
                            createCanvas(windowWidth, windowHeight );
                            rectangulo = new Rectangle(width / 2, height / 2, 150, 150);
                        }

                        function draw() {
                            // Efecto de redimensionamiento con el mouse
                            rectangulo.resize(
                                mouseX - rectangulo.x, 
                                mouseY - rectangulo.y
                            );
                            // Dibujo del rectángulo en su nueva posición
                            background(30);
                            fill(255, 0, 0, 100);
                            stroke(255);
                            strokeWeight(1);
                            line(rectangulo.x, rectangulo.y, mouseX, mouseY);
                            rectangulo.draw();
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/rectangle-collide-rectangle.html"
                    >{`
                        let rectangulo, rectanguloCursor;
                        
                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            rectangulo = new Rectangle(width / 2 - 150, height / 2 - 50, 300, 100);
                            rectanguloCursor = new Rectangle(0, 0, 150, 150);
                        }

                        function draw() {
                            // Efecto de reposición con el mouse
                            rectanguloCursor.move(
                                mouseX - rectanguloCursor.w / 2,
                                mouseY - rectanguloCursor.h / 2
                            );

                            // Verificación de colisión entre los dos rectángulos.
                            const colisionRectanguloRectangulo = rectangulo.collideRect(rectanguloCursor);

                            if (colisionRectanguloRectangulo) {
                                fill(0, 255, 0, 100); // Verde (Hay colisión)
                            } else {
                                fill(255, 0, 0, 100); // Rojo (No hay colisión)
                            }

                            // Dibujado del rectángulo indicando si hay colisión o no
                            background(30);
                            noStroke();
                            rectangulo.draw();
                            rectanguloCursor.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "Rectangle.collideCircle(circle)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Colisión rectángulo-círculo"
                        desc="Ejemplo de cómo detectar si un rectángulo colisiona con un círculo."
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Rectangle/Rectangle.collideCircle.html"
                    >{`
                        let rectanguloCentro, circuloCursor;
                        
                        function setup() {
                            createCanvas(windowWidth, windowHeight);
                            rectanguloCentro = new Rectangle(
                                windowWidth / 2 - 150,
                                windowHeight / 2 - 50,
                                300,
                                100
                            );
                            circuloCursor = new Circle(0, 0, 100);
                        }

                        function draw() {
                            resizeCanvas(windowWidth, windowHeight);

                            circuloCursor.move(mouseX, mouseY);

                            // Verificación de colisión entre los dos rectángulos.
                            const colisionRectanguloCirculo = rectanguloCentro.collideCircle(circuloCursor);

                            if (colisionRectanguloCirculo) {
                                fill(0, 255, 0, 100); // Verde (Hay colisión)
                            } else {
                                fill(255, 0, 0, 100); // Rojo (No hay colisión)
                            }

                            background(30);
                            noStroke();
                            rectanguloCentro.draw();
                            circuloCursor.draw();
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
            nombre: "GET/SET Circle.r",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Redimensionar un círculo"
                        desc="Ejemplo de cómo cambiar el tamaño de un círculo, en este caso siguiendo la posición del cursor."
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/circle-resize.html"
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

                            background(30);

                            fill(255, 0, 0, 100);
                            noStroke();
                            circulo.draw();
                        }
                    `}</CodigoConRepresentacion>
                );
            }
        },
        {
            nombre: "GET Circle.toRect",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <CodigoConRepresentacion
                        titulo="Rectángulo que contiene un círculo"
                        desc="Ejemplo de cómo crear un rectángulo que contiene un círculo y seguir su posición."
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/circle-outer-rectangle.html"
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
                                const rect = circulo.toRect;

                                background(30);
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
            nombre: "GET Circle.copy",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los objetos Circle tienen una función GET copy que crea una copia del círculo.
                        <p>
                            Se utiliza para duplicar un círculo y mantener la original intacta.
                        </p>
                        <Code
                            linenumbers={false}
                        >{`
                            let circulo = new Circle(200, 200, 100);
                            let circuloCopia = circulo.copy;

                            circuloCopia.move(100, 100);

                            console.log("Círculo original:", circulo.center);
                            console.log("Círculo copia:", circuloCopia.center);
                        `}</Code>
                        <p>
                            Se tendrá que observar que el círculo original no se ha movido, mientras que la copia sí.
                        </p>
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/circle-move.html"
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

                            background(30);
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
                        Los objetos Circle tienen una función angleCenter(a, dr) que calcula el angulo entre el centro del
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
                            titulo="De un ángulo al borde del círculo"
                            desc="Ejemplo de cómo obtener las coordenadas de un punto en el borde de un círculo."
                            url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/Circle.angleToBorder.html"
                        >{`
                            let circuloCentro;
                            let angulo = 0;

                            function setup() {
                                createCanvas(windowWidth, windowHeight);
                                circuloCentro = new Circle(width / 2, height / 2, 150);
                            }

                            function draw() {
                                resizeCanvas(windowWidth, windowHeight);

                                // Se incrementa el ángulo para obtener un punto en la circunferencia.
                                angulo += 0.01;
                                const p = circuloCentro.angleToBorder(angulo);


                                background(30);
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
            nombre: "Circle.pointToBorder(x, y)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los objetos Circle tienen una función pointToBorder(x, y) que calcula el punto más cercano en el borde
                        del círculo a un punto dado.
                        <p>
                            La función admite
                            <br />
                            {thisObj.dosParametros}
                        </p>
                        <CodigoConRepresentacion
                            titulo="Punto más cercano en el borde del círculo"
                            desc="Ejemplo de cómo generar un punto en el borde de un círculo, más cercano a la posición del cursor."
                            url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/Circle.pointToBorder.html"
                        >{`
                            let circuloCentro;

                            function setup() {
                                createCanvas(windowWidth, windowHeight);
                                circuloCentro = new Circle(width / 2, height / 2, 150);
                            }

                            function draw() {
                                // Se obtiene el punto en la circunferencia más cercano al cursor.
                                const p = circuloCentro.pointToBorder(mouseX, mouseY);

                                background(30);
                                noStroke();

                                fill(255, 0, 0, 100);
                                circuloCentro.draw();

                                fill("green");
                                circle(p.x, p.y, 20);
                            }
                        `}</CodigoConRepresentacion>
                    </FormatoDoc>
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/circle-detection-inside.html"
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

                            background(30);

                            noStroke();
                            circuloCursor.draw();
                            circuloCentro.draw();
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/circle-collide-point.html"
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

                            background(30);
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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/circle-rect-collide.html"
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

                            background(30);

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
                        url="https://jeff-aporta.github.io/Geometry-rects-n-circles-JS/src/muestras/Circle/circle-collide-circle.html"
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

                            background(30);
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
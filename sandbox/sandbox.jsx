function runCode() {
  const code = document.querySelector(".src-code").value;
  const consoleOutput = document.querySelector(".console");

  consoleOutput.textContent = "";

  const customConsole = {
    log: (...args) => appendToConsole("LOG", args),
    warn: (...args) => appendToConsole("WARN", args),
    error: (...args) => appendToConsole("ERROR", args),
  };

  try {
    new Function("console", code)(customConsole);
  } catch (error) {
    appendToConsole("ERROR", [error.message]);
  }

  function appendToConsole(type, args) {
    const message = args.join(" ");
    const line = `[${type}] ${message}\n`;
    consoleOutput.textContent += line;
  }
}

function App() {
  let startX = 0;
  const drags = {
    ewResize: (event) => {
      const elementControl = document.querySelector(".code-resizer");
      if (mouse.target != elementControl) {
        return;
      }
      const elementResize = document.querySelector(".menu-code");
      document.body.style.userSelect = "none";
      event.preventDefault();
      if (mouse.x <= 0) {
        return;
      }
      const newWidth = (() => {
        const min = 200;
        const max = window.innerWidth - 100;
        if (mouse.x < min) {
          return min;
        }
        if (mouse.x > max) {
          return max;
        }
        return mouse.x;
      })();
      elementResize.style.width = `${newWidth}px`;
    },
    consoleResize: (event) => {
      const elementControl = document.querySelector(".console-resizer");
      if (mouse.target != elementControl) {
        return;
      }
      //   code height
      //   console top
      //   console-resizer top-10px
      const codeResize = document.querySelector(".code");
      const consoleResize = document.querySelector(".console");
      const controlResize = document.querySelector(".console-resizer");
      document.body.style.userSelect = "none";
      event.preventDefault();
      if (mouse.y <= 0) {
        return;
      }
      const newHeight = (() => {
        const rect = document
          .querySelector(".menu-code")
          .getBoundingClientRect();
        const y = mouse.y - rect.top;
        const min = 250;
        const max = window.innerHeight - 150;
        if (y < min) {
          return min;
        }
        if (y > max) {
          return max;
        }
        return y;
      })();
      codeResize.style.height = `${newHeight}px`;
      consoleResize.style.top = `${newHeight}px`;
      controlResize.style.top = `${newHeight - 10}px`;
    },
  };
  const mouse = {
    sx: 0,
    sy: 0,
    x: 0,
    y: 0,
    down: false,
    leftClick: false,
    target: undefined,
  };
  window.addEventListener("mousedown", (evt) => {
    mouse.sx = evt.clientX;
    mouse.sy = evt.clientY;
    mouse.target = evt.target;
    mouse.down = true;
    if (evt.button == 0) {
      mouse.leftClick = true;
    }
  });
  window.addEventListener("mouseup", (evt) => {
    document.body.style.userSelect = "";
    mouse.down = false;
    mouse.leftClick = false;
  });
  window.addEventListener("mousemove", (evt) => {
    if (mouse.leftClick && mouse.down) {
      mouse.x = evt.clientX;
      mouse.y = evt.clientY;
      Object.values(drags).forEach((e) => e(evt));
    }
  });
  let editingCode = false;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>
        {JS2CSS.obj2CSS({
          "body, html": {
            margin: 0,
            padding: 0,
          },
          body: {
            maxHeight: "100vh",
          },
        })}
      </style>
      <div
        className="app-sandbox"
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <Paper className="header  d-flex jc-sb">
          <Paper
            style={{ display: "inline-block" }}
            className="bright-hover-1-5"
          >
            <label
              className="pad-10px c-pointer fs-22px"
              style={{
                backgroundColor: "rgba(0,0,0,0.01)",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i className="fa fa-bars no-select" />
            </label>
          </Paper>

          <Paper
            size="small"
            className="d-center bright-hover-1-5 square"
            style={{
              height: "100%",
              backgroundColor: "gray",
            }}
          >
            <i className="fa fa-play" />
          </Paper>
        </Paper>
        <div className="app-content" style={{ position: "relative" }}>
          <Paper
            className="menu-code p-absolute"
            style={{
              width: "200px",
              bottom: "0",
              top: "0",
            }}
            elevation={0}
          >
            <div style={{ display: "grid", gridTemplateRows: "auto 1fr" }}>
              <div
                className="code"
                style={{ backgroundColor: "#121212", height: "400px" }}
              >
                <div
                  className="src-code pad-10px"
                  contentEditable="true"
                  style={{
                    whiteSpace: "pre",
                    outline: "none",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    overflow: "hidden",
                  }}
                >
                  console.log("Hola mundo");
                </div>
              </div>
              <div
                className="console bg-black pad-10px"
                style={{
                  position: "absolute",
                  bottom: "0",
                  top: "400px",
                  right: "0",
                  left: "0",
                }}
              >
                Consola
              </div>
              <div
                className="console-resizer"
                style={{
                  cursor: "ns-resize",
                  position: "absolute",
                  top: "390px",
                  height: "10px",
                  left: "0",
                  right: "0",
                  backgroundColor: "blue",
                }}
              />
            </div>
            <div
              tabIndex={1}
              className="code-resizer"
              style={{
                cursor: "ew-resize",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "blue",
                width: "10px",
              }}
            />
          </Paper>
          <div className="prev"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

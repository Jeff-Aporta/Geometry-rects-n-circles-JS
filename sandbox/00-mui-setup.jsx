Object.assign(window, window["MaterialUI"]);

const themename = (() => {
  const themeLocalStorage = localStorage.getItem("theme");
  const themeDefault = getSystemColorScheme();

  return themeLocalStorage ?? themeDefault;

  function getSystemColorScheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  }
})();

const isThemeDark = themename == "dark";

const contrastText = isThemeDark ? "#fff" : "#000";
const uncontrastText = isThemeDark ? "#000" : "#fff";

let palette = {
  primary: {
    main: isThemeDark ? "#1E90FF" : "#6FDCBF",
    contrastText,
  },
};

const typography = {
  button: {
    textTransform: "none",
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        margin: 0,
      },
    },
  },
};

const themeDark = createTheme({
  typography,
  components,
  palette: {
    mode: "dark",
    background: {
      default: "#051500",
      paper: "#051710",
    },
    ...palette,
  },
});

const themeLight = createTheme({
  typography,
  components,
  palette: {
    mode: "light",
    ...palette,
  },
});

const theme = responsiveFontSizes(isThemeDark ? themeDark : themeLight);

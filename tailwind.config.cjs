const forms = require("@tailwindcss/forms");
const containerQueries = require("@tailwindcss/container-queries");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#f7f9fb",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#7c839b",
        "on-primary": "#ffffff",
        "surface-dim": "#d8dadc",
        "error-container": "#ffdad6",
        "tertiary-container": "#001a42",
        error: "#ba1a1a",
        "surface-tint": "#565e74",
        "surface-container-lowest": "#ffffff",
        "inverse-on-surface": "#eff1f3",
        "surface-bright": "#f7f9fb",
        "on-tertiary-fixed-variant": "#004395",
        "on-error": "#ffffff",
        "surface-container-high": "#e6e8ea",
        secondary: "#705d00",
        "on-tertiary-container": "#3980f4",
        "on-secondary": "#ffffff",
        "surface-container-highest": "#e0e3e5",
        "outline-variant": "#c6c6cd",
        "tertiary-fixed": "#d8e2ff",
        "on-secondary-fixed-variant": "#544600",
        "primary-fixed-dim": "#bec6e0",
        outline: "#76777d",
        "on-surface": "#191c1e",
        "surface-container": "#eceef0",
        "primary-fixed": "#dae2fd",
        "tertiary-fixed-dim": "#adc6ff",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#3f465c",
        "inverse-surface": "#2d3133",
        "on-secondary-container": "#6e5c00",
        "on-secondary-fixed": "#221b00",
        "surface-container-low": "#f2f4f6",
        "inverse-primary": "#bec6e0",
        "secondary-fixed-dim": "#e9c400",
        "on-primary-fixed": "#131b2e",
        background: "#f7f9fb",
        "on-tertiary-fixed": "#001a42",
        "secondary-container": "#fcd400",
        "on-surface-variant": "#45464d",
        "primary-container": "#131b2e",
        "surface-variant": "#e0e3e5",
        "on-background": "#191c1e",
        primary: "#000000",
        tertiary: "#000000",
        "secondary-fixed": "#ffe16d"
      },
      fontFamily: {
        headline: ["Noto Serif"],
        body: ["Manrope"],
        label: ["Manrope"]
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      }
    }
  },
  plugins: [forms, containerQueries]
};


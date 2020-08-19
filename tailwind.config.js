module.exports = {
  purge: ["./src/pages/**/*.jsx", "./src/components/**/*.jsx"],
  theme: {
    filter: {
      none: "none",
      grayscale: "grayscale(1)",
    },
    fontFamily: {
      body: ["Inter"],
      sans: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#5b7cff",
        secondary: "#24cdd4",
        tertiary: "#FFB36D",
        links: "#a6a6a6",
        paragraph: "#808080",
        "about-bg": "#f4f9fc",
        "about-category": "#806BFF",
        "pricing-bg": "#1e1d4f",
        "pricing-paragraph": "#8e8ea7",
        "pricing-description": "#9392aa",
        "pricing-subtext": "#5d5c80",
        "pricing-card-bg": "#272656",
        "pricing-card-light-bg": "#343360",
        "pricing-light-text": "#807dff",
        "pricing-btn": "#00a4ff",
        "pricing-light-btn": "#302e67",
        contact: "#30B998",
        "footer-text": "#998ba8",
        "footer-border": "#482e62",
        footer: "#341751",
        "navbar-border": "#0000001A",
        "modal-background": "rgba(0,0,0,0.4);",
      },
      maxWidth: {
        "7xl": "84rem;",
      },
      borderRadius: {
        xl: "1em",
      },
    },
  },
  variants: {
    filter: ["hover"],
  },
  plugins: [require("tailwindcss-filters")],
}

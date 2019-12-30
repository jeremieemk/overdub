const GlobalStyles = (
  <style jsx global>{`
    @font-face {
      font-family: "PxGroteskBold";
      src: url("fonts/PxGrotesk-Bold.woff2") format("woff2");
    }
    @font-face {
      font-family: "Sectra";
      src: url("fonts/Sectra.woff2") format("woff2");
    }
    @font-face {
      font-family: "WorkSans-Bold";
      src: url("fonts/WorkSans-Bold.woff2") format("woff2");
      src: url("fonts/WorkSans-Bold.woff") format("woff");
      src: url("fonts/WorkSans-Bold.ttf") format("truetype");
    }

    :root {
      --global-margin: 2rem;
      --color1: #f85e3c;
      --color2: #fff55a;
      --font1: "Sectra";
      --font2: "PxGroteskBold";
      --font3: "WorkSans-Bold";
      --line-width: 0.1rem;
    }
    body {
      background-color: var(--color1);
      margin: 0;
    }
  `}</style>
);

export default GlobalStyles;

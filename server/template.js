module.exports = ({ title = 'Sikhi To The Max', metaTags = [] } = {}) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
    ${
      metaTags
        .map(({ name, content }) => `<meta name="${name}" content="${content}"`)
        .join('\n')
    }
  </head>
  <body>

    <script async src="ga.js"></script>
    <script src="app.js"></script>
  </body>
</html>
`.trim()

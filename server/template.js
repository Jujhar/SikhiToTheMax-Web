module.exports = ({ title = 'Sikhi To The Max', metaTags = [] } = {}) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    ${
      metaTags
        .map(({ name, content }) => `<meta name="${name}" content="${content}"`)
        .join('\n')
    }
    <link rel="stylesheet" href="/css/foundation.min.css?v=6.2.4" />
    <link rel="stylesheet" href="/css/font-awesome.min.css?v=4.7.0" />
    <link rel="stylesheet" href="/css/style.css?v=" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  </head>
  <body>

    <div id="app"></div>

    <script async src="ga.js"></script>
    <script src="app.js"></script>
  </body>
</html>
`.trim()

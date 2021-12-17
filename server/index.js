import express from "express"
import cors from "cors"
import serialize from "serialize-javascript"
import ReactDOM from "react-dom/server"
import * as React from 'react'
import App from '../src/shared/App'
import { matchPath } from "react-router-dom"
import routes from '../src/shared/routes'
import { StaticRouter } from 'react-router-dom/server';

const app = express()

app.use(cors())
app.use(express.static("dist"))
app.get("*", (req, res, next) => {
     const data = 'Saloni';
     const activeRoute = routes.find((route) =>
    matchPath(route.path, req.url)
  ) || {};
  const promise =  Promise.resolve()

promise.then((data) => {
    const markup = ReactDOM.renderToString(<StaticRouter location={req.url} >
        <App serverData={data} />
        </StaticRouter>
        )
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with React Router</title>
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <script>
          window.__INITIAL_DATA__ = ${serialize(data)}
        </script>
        </head>
  
        <body>
          <div id="root">${markup}</div>
        </body>
      </html>
    `)
})
  
})   
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
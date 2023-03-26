import express from 'express'
import path from 'path'
import template from './src/template'
import ssr from './src/server'
import data from './assets/data.json'
import createStore from './src/redux/configureStore'
import routes from './src/share/routes'
import { matchRoutes } from 'react-router-config'
const app = express()

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
app.use('/media', express.static(path.resolve(__dirname, 'media')))

// hide powered by express
app.disable('x-powered-by')
// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('http://localhost:3000')
})

let initialState = {
  isFetching: false,
  apps: data,
}

app.get('*', (req, res) => {
  const store = createStore()
  // 1. 请求地址 req.path
  // 2. 获取到路由配置信息 routes
  // 3. 根据请求地址匹配出要渲染的组件的路由对象信息
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    // 如何才能知道数据什么时候获取完成
    if (route.loadData) return route.loadData(store)
  })

  Promise.all(promises).then(() => {
    // res.send(renderer(req, store))
    const { preloadedState, content } = ssr(req, initialState)
    const response = template('Server Rendered Page', preloadedState, content)
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response)
  })
})

// // server rendered home page
// app.get('*', (req, res) => {
//   const { preloadedState, content } = ssr(req, initialState)
//   const response = template('Server Rendered Page', preloadedState, content)
//   res.setHeader('Cache-Control', 'assets, max-age=604800')
//   res.send(response)
// })

// // Pure client side rendered page
// app.get('/client', (req, res) => {
//   let response = template('Client Side Rendered page')
//   res.setHeader('Cache-Control', 'assets, max-age=604800')
//   res.send(response)
// })

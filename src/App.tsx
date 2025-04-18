import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './compoments/app-header'
import AppFooter from './compoments/app-footer'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="main">
        {/* 路由使用懒加载，点击路由的时候可能还没加载好，所以用Suspense做应急 */}
        <Suspense fallback={''}>{useRoutes(routes)}</Suspense>
      </div>
      <AppFooter />
    </div>
  )
}

export default App

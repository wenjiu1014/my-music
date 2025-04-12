import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
// import { useAppSelector, useAppDispatch } from './store/hooks'
// import { shallowEqual } from 'react-redux'
// import { increment, decrement } from './store/modules/counter'
import AppHeader from './compoments/app-header'
import AppFooter from './compoments/app-footer'

function App() {
  // const count = useAppSelector(state => state.counter.count, shallowEqual)
  // const dispatch = useAppDispatch()
  return (
    <div className="App">
      <AppHeader />
      <div className="main">
        {/* 路由使用懒加载，点击路由的时候可能还没加载好，所以用Suspense做应急 */}
        <Suspense fallback={''}>{useRoutes(routes)}</Suspense>
      </div>
      <AppFooter />
      {/* <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div> */}
    </div>
  )
}

export default App

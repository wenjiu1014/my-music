import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { shallowEqual } from 'react-redux'
import { increment, decrement } from './store/modules/counter'
function App() {
  const count = useAppSelector(state => state.counter.count, shallowEqual)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/download">下载</Link>
        <Link to="/follow">关注</Link>
        <Link to="/mine">我的</Link>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className="main">
        {/* 路由使用懒加载，点击路由的时候可能还没加载好，所以用Suspense做应急 */}
        <Suspense fallback={''}>{useRoutes(routes)}</Suspense>
      </div>
    </div>
  )
}

export default App

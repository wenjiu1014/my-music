import { Outlet, Link } from 'react-router-dom'
import { Suspense } from 'react'
import NavBar from './c-components/nav-bar'
const Discover = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Suspense fallback={''}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default Discover

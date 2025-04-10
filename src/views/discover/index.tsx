import { Outlet, Link } from 'react-router-dom'
import { Suspense } from 'react'
const Discover = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/audiobook">博客有声书</Link>
        <Link to="/discover/artists">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <div className="content">
        <Suspense fallback={''}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default Discover

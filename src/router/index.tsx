import { type RouteObject, Navigate } from 'react-router-dom'
import { lazy } from 'react'

// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Follow from '@/views/follow'
// import Download from '@/views/download'
// 懒加载discover和它的子组件
const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const AudioBook = lazy(() => import('@/views/discover/c-views/audiobook'))
const Artist = lazy(() => import('@/views/discover/c-views/artists'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const Mine = lazy(() => import('@/views/mine'))
const Follow = lazy(() => import('@/views/follow'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
      {
        path: '/discover/audiobook',
        element: <AudioBook />,
      },
      {
        path: '/discover/artists',
        element: <Artist />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
    ],
  },
  {
    path: '/mine',
    element: <Mine />,
    children: [],
  },
  {
    path: '/follow',
    element: <Follow />,
    children: [],
  },
  {
    path: '/download',
    element: <Download />,
    children: [],
  },
]

export default routes

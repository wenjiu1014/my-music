import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import request from '@/service'
import Demo2 from '@/views/demo/demo2'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<any[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await request.get({
        url: '/banner',
      })
      setBanners(res.banners)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div>
        <Demo2 name="张三" age={20} />
      </div>
      <div>
        {banners.map(item => (
          <div key={item.imageUrl}>{item.imageUrl}</div>
        ))}
      </div>
    </div>
  )
}

export default memo(Recommend)

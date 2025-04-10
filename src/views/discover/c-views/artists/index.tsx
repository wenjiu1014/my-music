import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Artists: FC<IProps> = () => {
  return <div>Artists</div>
}

export default memo(Artists)

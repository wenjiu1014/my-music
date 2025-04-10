import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Follow: FC<IProps> = () => {
  return <div>Follow</div>
}

export default memo(Follow)

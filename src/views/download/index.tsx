import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const DownLoad: FC<IProps> = ({ children }) => {
  return <div>DownLoad{children}</div>
}

export default memo(DownLoad)

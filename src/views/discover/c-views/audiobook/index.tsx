import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const AudioBook: FC<IProps> = () => {
  return <div>AudioBook</div>
}

export default memo(AudioBook)

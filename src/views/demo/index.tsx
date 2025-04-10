import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  sex?: string
}

const Download: React.FC<IProps> = ({ name, age, sex = '未知', children }) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>sex: {sex}</div>
      <div>children: {children}</div>
    </div>
  )
}

export default memo(Download)

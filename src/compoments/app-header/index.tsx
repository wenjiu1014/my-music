import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import styles from './index.module.scss'
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {item.title}
          {/* 这个是激活的图标，图片，我用伪元素重写了，注释掉 */}
          {/* <i className={classNames(styles.icon, 'sprite_01')}></i> */}
        </NavLink>
      )
    } else if (item.type === 'link') {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    } else {
      return <span>{item.title}</span>
    }
  }

  return (
    <div className={styles.root}>
      <div className={classNames(styles.content, styles['wrap-v1'])}>
        <div className={styles.left}>
          <a className={classNames(styles.logo, 'sprite_01')} href="#/">
            网易云音乐
          </a>
          <div className={styles['title-list']}>
            {headerTitles.map(item => (
              <div className={styles.item} key={item.title}>
                {showItem(item)}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <Input
            className={styles.search}
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className={styles.center}>创作者中心</div>
          <div className={styles.login}>登录</div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  )
}

export default memo(AppHeader)

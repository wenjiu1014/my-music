import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { discoverMenu } from '@/assets/data/local_data'
import classNames from 'classnames'
interface IProps {
  children?: ReactNode
}
const NavBar: FC<IProps> = () => {
  return (
    <div className={styles.root}>
      <div className={classNames(styles['wrap-v1'], styles.nav)}>
        {discoverMenu.map(item => (
          <div className={styles.item} key={item.title}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(NavBar)

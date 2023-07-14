import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  noBorder?: boolean
}

export function Avatar({ noBorder = false, ...props }: AvatarProps) {
  return (
    <img className={noBorder ? styles.avatarNoBorder : styles.avatar} {...props} />
  )
}
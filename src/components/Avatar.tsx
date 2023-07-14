import styles from './Avatar.module.css'

interface AvatarProps {
  noBorder?: boolean,
  src: string,
  alt?: string
}

export function Avatar({ noBorder = false, src, alt }: AvatarProps) {
  return (
    <img className={noBorder ? styles.avatarNoBorder : styles.avatar} src={src} alt={alt} />
  )
}
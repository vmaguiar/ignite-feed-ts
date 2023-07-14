import { PencilLine } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './SideBar.module.css'

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.coverImg}
        src="https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=30"
        alt="Imagem de capa"
      />

      <div className={styles.profileContainer}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/27768392?v=4"
        />

        <strong>Vinicius Aguiar</strong>
        <span>Software Engineer</span>
      </div>

      <div className={styles.footer}>
        <button>
          <PencilLine size={20} />
          Editar seu perfil
        </button>
      </div>
    </aside>
  )
}
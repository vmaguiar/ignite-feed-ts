import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'


interface CommentProps {
  contentText: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({ contentText, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)


  const handleDeleteComment = () => {
    onDeleteComment(contentText)
  }


  const handleLikeComment = () => {
    setLikeCount((oldLikeCount) => {
      return oldLikeCount + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar noBorder src="https://github.com/maykbrito.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Aguiar</strong>

              <time title="13 de Junho às 12h30" dateTime="2023-06-13 12:30:30">
                Há 1h atrás
              </time>
            </div>

            <button
              title='Deletar comentário'
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{contentText}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
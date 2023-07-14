import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { PostProps } from '../App'

import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './Post.module.css'


type PostPropsWithoutId = Omit<PostProps, 'id'>

export function Post({ author, content, publishedAt }: PostPropsWithoutId) {
  const [comments, setComments] = useState<string[]>([])
  const [newCommentText, setNewCommentText] = useState('')


  const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", { locale: ptBr })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBr })


  const handleCreateNewComment = () => {
    if (newCommentText) {
      setComments([...comments, newCommentText])
      setNewCommentText('')
    }
  }

  const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  const handelNewCommentInvalid = (e: FormEvent<HTMLTextAreaElement>) => {
    (e.target as HTMLInputElement).setCustomValidity('Esse campo é obrigatório!')
  }


  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentTextEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.profilePostContainer}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfoContainer}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedPublishedAt} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.postTextContent}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.contentText}>{line.contentText}</p>
            }
            else if (line.type === 'link') {
              return <p key={line.contentText}><a href='#'>{line.contentText}</a></p>
            }
          })
        }
      </div>

      <form
        className={styles.postFooter}
        onSubmit={(event) => {
          event.preventDefault()
          handleCreateNewComment()
        }}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={(event) => handleNewCommentChange(event)}
          onInvalid={(event) => handelNewCommentInvalid(event)}
          required
        />

        <button
          type="submit"
          disabled={isNewCommentTextEmpty}
        >
          Publicar
        </button>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                contentText={comment}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )
}
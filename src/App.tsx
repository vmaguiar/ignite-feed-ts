import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'


interface Author {
  avatarUrl: string,
  name: string,
  role: string
}

interface Content {
  type: 'paragraph' | 'link'
  contentText: string
}

export interface PostProps {
  id: number,
  author: Author,
  content: Content[],
  publishedAt: Date
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/27768392?v=4",
      name: "Vinicius Aguiar",
      role: "Software Developer"
    },
    content: [
      { type: 'paragraph', contentText: 'Eai meu povo 👋' },
      { type: 'paragraph', contentText: ' Esse aqui é o post. É um projeto que fiz no NLW Return, pipipi popopo. DoctorCare 🚀' },
      { type: 'link', contentText: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-27 13:13:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', contentText: 'Fala galeraa 👋' },
      { type: 'paragraph', contentText: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', contentText: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-27 12:30:00')
  },

  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "@Rocketseat"
    },
    content: [
      { type: 'paragraph', contentText: 'Pipipi 👋' },
      { type: 'paragraph', contentText: 'pipipi popopo pipípi popopo. pipipipipip popopopopopo asei la oq mais um texto aleatorio e é isso vao bruxao 🚀' },
      { type: 'link', contentText: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-26 10:30:00')
  },
]

export function App() {
  return (
    <div className={styles.appContainer}>
      <Header />

      <div className={styles.container}>
        <SideBar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  key={post.id}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
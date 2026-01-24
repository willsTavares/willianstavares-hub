import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllPosts, Post } from '../../lib/posts'
import { GetStaticProps } from 'next'
import { useState, useMemo } from 'react'

interface PostsPageProps {
  posts: Post[]
  allTags: string[]
}

export default function PostsPage({ posts, allTags }: PostsPageProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts
    return posts.filter((post) => 
      post.tag?.toLowerCase().includes(selectedTag.toLowerCase())
    )
  }, [posts, selectedTag])

  return (
    <Layout title="Posts" description="Artigos e posts sobre desenvolvimento">
      <h1>Posts</h1>
      <p className="page-description">
        Artigos sobre desenvolvimento de software, arquitetura, boas práticas e experiências 
        compartilhadas ao longo da minha jornada como desenvolvedor.
      </p>

      <div className="tags-filter">
        <span className="filter-label">Filtrar por tag:</span>
        <div className="tags-list">
          <button 
            className={`tag-filter ${!selectedTag ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="no-posts">Nenhum post encontrado com essa tag.</p>
      ) : (
        <div className="posts-list">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="post-card">
              <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <time className="post-date">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </time>
              {post.description && (
                <p className="post-description">{post.description}</p>
              )}
              {post.tag && (
                <div className="post-tags">
                  {post.tag.split(',').map((tag) => (
                    <span 
                      key={tag.trim()} 
                      className="tag clickable"
                      onClick={() => setSelectedTag(tag.trim())}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <Link href={`/posts/${post.slug}`} className="read-more">
                Leia mais →
              </Link>
            </article>
          ))}
        </div>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  
  // Extrair todas as tags únicas
  const tagsSet = new Set<string>()
  posts.forEach((post) => {
    if (post.tag) {
      post.tag.split(',').forEach((tag) => {
        tagsSet.add(tag.trim())
      })
    }
  })
  const allTags = Array.from(tagsSet).sort()

  return {
    props: {
      posts,
      allTags,
    },
  }
}

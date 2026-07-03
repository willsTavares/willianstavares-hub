import Layout from '../../components/Layout'
import Link from 'next/link'
import Reveal from '../../components/Reveal'
import { getAllPosts, Post } from '../../lib/posts'
import { GetStaticProps } from 'next'
import { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

interface PostsPageProps {
  posts: Post[]
  allTags: string[]
}

export default function PostsPage({ posts, allTags }: PostsPageProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const t = useTranslations('posts')
  const tNav = useTranslations('nav')
  const router = useRouter()
  const dateLocale = router.locale === 'pt' ? 'pt-BR' : 'en-US'

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts
    return posts.filter((post) => post.tag?.toLowerCase().includes(selectedTag.toLowerCase()))
  }, [posts, selectedTag])

  return (
    <Layout title={tNav('posts')} description={t('pageDescription')}>
      <p className="page-description">{t('pageDescription')}</p>

      <div className="tags-filter">
        <span className="filter-label">{t('filterByTag')}</span>
        <div className="tags-list">
          <button
            className={`tag-filter ${!selectedTag ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            {t('all')}
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
        <p className="no-posts">{t('noPostsFound')}</p>
      ) : (
        <div className="posts-list">
          {filteredPosts.map((post, index) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="post-card-link">
              <Reveal as="article" className="post-card" delay={Math.min(index * 0.07, 0.28)}>
                <h2>{post.title}</h2>
                <time className="post-date">
                  {new Date(post.date).toLocaleDateString(dateLocale)}
                </time>
                {post.description && <p className="post-description">{post.description}</p>}
                {post.tag && (
                  <div className="post-tags">
                    {post.tag.split(',').map((tag) => (
                      <span
                        key={tag.trim()}
                        className="tag clickable"
                        onClick={(e) => {
                          e.preventDefault()
                          setSelectedTag(tag.trim())
                        }}
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
                <span className="read-more">{t('readMore')}</span>
              </Reveal>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = getAllPosts(locale || 'pt')

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
      messages: (await import(`../../messages/${locale || 'pt'}.json`)).default,
    },
  }
}

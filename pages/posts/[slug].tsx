import Layout from '../../components/Layout'
import Link from 'next/link'
import Reveal from '../../components/Reveal'
import { getPostBySlug, getAllLocalePostPaths, Post } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

interface PostPageProps {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter()
  const t = useTranslations('post')
  const tNav = useTranslations('nav')
  const dateLocale = router.locale === 'pt' ? 'pt-BR' : 'en-US'
  const readingTime = getReadingTime(post.content)

  return (
    <Layout title={post.title} description={post.description} ogType="article">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">{tNav('home')}</Link>
        <span className="breadcrumb-separator">/</span>
        <Link href="/posts">{tNav('posts')}</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{post.title}</span>
      </nav>
      <Reveal as="article" className="post-content">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <time className="post-date">{new Date(post.date).toLocaleDateString(dateLocale)}</time>
            <span className="separator">&middot;</span>
            <span className="reading-time">{t('readingTime', { minutes: readingTime })}</span>
          </div>
          {post.tag && (
            <div className="post-tags">
              {post.tag.split(',').map((tag) => (
                <span key={tag.trim()} className="tag">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // @ts-expect-error Bleed is a custom MDX tag used in some posts
              bleed: ({ children }) => <div className="bleed">{children}</div>,
              img: ({ src, alt }) => (
                // Markdown images have unknown intrinsic dimensions, so next/image
                // (which requires width/height) is not a good fit here.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src?.startsWith('/') ? src : `/images/${src}`}
                  alt={alt || ''}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
              iframe: ({ src, ...props }) => (
                <iframe
                  src={src}
                  {...props}
                  className="podcast"
                  style={{ width: '100%', borderRadius: '12px' }}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </Reveal>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = getAllLocalePostPaths(locales || ['pt', 'en'])

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = getPostBySlug(params?.slug as string, locale || 'pt')
  return {
    props: {
      post,
      messages: (await import(`../../messages/${locale || 'pt'}.json`)).default,
    },
  }
}

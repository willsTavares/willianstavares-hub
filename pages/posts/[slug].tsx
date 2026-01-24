import Layout from '../../components/Layout'
import ShareButtons from '../../components/ShareButtons'
import { getPostBySlug, getPostSlugs, Post } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostPageProps {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <Layout title={post.title} description={post.description}>
      <article className="post-content">
        <header className="post-header">
          <h1>{post.title}</h1>
          <time className="post-date">
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </time>
          {post.tag && (
            <div className="post-tags">
              {post.tag.split(',').map((tag) => (
                <span key={tag.trim()} className="tag">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
          {/* <ShareButtons title={post.title} /> */}
        </header>
        
        <div className="prose">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => (
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
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs()
  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(/\.md$/, '') },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string)
  return {
    props: {
      post,
    },
  }
}

import Layout from '../components/Layout'
import Link from 'next/link'
import { getAllPosts, Post } from '../lib/posts'
import { GetStaticProps } from 'next'

interface HomeProps {
  latestPost: Post | null
}

export default function Home({ latestPost }: HomeProps) {
  return (
    <Layout>      
      <p>
        Olá, me chamo Willians Tavares! Atualmente atuo como Tech Lead na{' '}
        <a href="https://konia.com.br/" target="_blank" rel="noopener noreferrer">
          Konia Tecnologia
        </a>
        .
      </p>
      
      <p>
        Sou apaixonado por desenvolvimento, tenho uma base sólida em .Net, Kotlin e Javascript. 
        Minha experiência também abrange DevOps e Cloud utilizando ambientes como Azure, 
        Azure Devops e AWS. 🚀
      </p>
      
      <p>
        <strong>Meu objetivo é simplificar soluções complexas</strong>, buscando formas 
        eficientes de resolver os desafios que surgem durante o desenvolvimento dos projetos. ✨
      </p>

      {latestPost && (
        <section className="latest-post-section">
          <h2 className="section-title">Última atividade</h2>
          <Link href={`/posts/${latestPost.slug}`} className="post-card-link">
            <article className="post-card compact">
              <h3>{latestPost.title}</h3>
              <time className="post-date">
                {new Date(latestPost.date).toLocaleDateString('pt-BR')}
              </time>
              {latestPost.description && (
                <p className="post-description">{latestPost.description}</p>
              )}
              {latestPost.tag && (
                <div className="post-tags">
                  {latestPost.tag.split(',').map((tag) => (
                    <span key={tag.trim()} className="tag">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <span className="read-more">Leia mais →</span>
            </article>
          </Link>
        </section>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  const latestPost = posts.length > 0 ? posts[0] : null

  return {
    props: {
      latestPost,
    },
  }
}

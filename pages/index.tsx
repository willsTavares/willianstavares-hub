import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
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
      
      <div className="center-icons">
        <a href="https://www.linkedin.com/in/willians-tavares95/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin-icon.png" alt="Linkedin" width={60} height={60} />
        </a>
        <a href="https://github.com/willsTavares" target="_blank" rel="noopener noreferrer">
          <img src="/images/github_icon.png" alt="GitHub" width={60} height={60} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511943206420" target="_blank" rel="noopener noreferrer">
          <img src="/images/whatsapp_icon.png" alt="Whatsapp" width={60} height={60} />
        </a>
      </div>
    </Layout>
  )
}

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  const t = useTranslations('footer')

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/willians-tavares95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={32} height={32} />
        </a>
        <a href="https://github.com/willsTavares" target="_blank" rel="noopener noreferrer">
          <Image src="/images/github_icon.png" alt="GitHub" width={32} height={32} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511943206420"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/images/whatsapp_icon.png" alt="WhatsApp" width={32} height={32} />
        </a>
      </div>
      <small>
        <time>{year}</time> {t('copyright')}
      </small>
    </footer>
  )
}

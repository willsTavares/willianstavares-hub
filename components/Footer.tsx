export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/willians-tavares95/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin-icon.png" alt="Linkedin" width={32} height={32} />
        </a>
        <a href="https://github.com/willsTavares" target="_blank" rel="noopener noreferrer">
          <img src="/images/github_icon.png" alt="GitHub" width={32} height={32} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511943206420" target="_blank" rel="noopener noreferrer">
          <img src="/images/whatsapp_icon.png" alt="Whatsapp" width={32} height={32} />
        </a>
      </div>
      <small>
        <time>{year}</time> © By Willians Tavares.
      </small>
    </footer>
  )
}

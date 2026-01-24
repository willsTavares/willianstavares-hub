export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <small>
        <time>{year}</time> © By Willians Tavares.
      </small>
    </footer>
  )
}

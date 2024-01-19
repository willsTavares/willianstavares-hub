const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © By Willians Tavares.
        {/* <a href="/feed.xml">RSS</a> */}
      </small>
      <style jsx>{`
       footer {
        margin-top: 2rem;
      }
      a {
        float: right;
      }
      `}</style>
    </footer>
  ),
  readMore: 'Leia mais →',
  unstable_faviconGlyph: "👋",
  darkMode: true,
}

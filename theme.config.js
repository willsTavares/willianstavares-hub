const YEAR = new Date().getFullYear()

export default {
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    )
  },
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
      @media screen and (max-width: 480px) {
        article {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
      }
      `}</style>
    </footer>
  ),
  readMore: 'Read More',
  unstable_faviconGlyph: "👋",
  darkMode: true,
  
}

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const isActive = (path: string) => {
    if (path === '/') return router.pathname === '/'
    return router.pathname.startsWith(path)
  }

  return (
    <header className="header">
      <Link href="/" className="site-title">
        Willians Tavares
      </Link>
      <nav className="nav">
        <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          Home
        </Link>
        <Link href="/posts" className={`nav-link ${isActive('/posts') ? 'active' : ''}`}>
          Posts
        </Link>
      </nav>
    </header>
  )
}

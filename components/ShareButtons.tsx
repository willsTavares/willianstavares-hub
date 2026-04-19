import { useTranslations } from 'next-intl'

interface ShareButtonsProps {
  title: string
  url?: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const t = useTranslations('share')

  const getShareUrl = () => {
    if (typeof window === 'undefined') return ''
    return url || window.location.href
  }

  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      getUrl: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`,
      color: '#0A66C2',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      getUrl: () => `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodeURIComponent(getShareUrl())}`,
      color: '#1DA1F2',
    },
    {
      name: 'WhatsApp',
      icon: '📱',
      getUrl: () => `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodeURIComponent(getShareUrl())}`,
      color: '#25D366',
    },
    {
      name: t('copyLink'),
      icon: '🔗',
      getUrl: () => '',
      color: '#666',
      action: async () => {
        try {
          await navigator.clipboard.writeText(getShareUrl())
          alert(t('linkCopied'))
        } catch {
          alert(t('copyError'))
        }
      },
    },
  ]

  const handleShare = (link: typeof shareLinks[0]) => {
    if (link.action) {
      link.action()
    } else {
      window.open(link.getUrl(), '_blank', 'noopener,noreferrer,width=600,height=400')
    }
  }

  return (
    <div className="share-buttons">
      <span className="share-label">{t('label')}</span>
      <div className="share-icons">
        {shareLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleShare(link)}
            className="share-button"
            title={link.name}
            aria-label={`Compartilhar no ${link.name}`}
          >
            <span className="share-icon">{link.icon}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

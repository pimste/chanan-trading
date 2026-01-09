import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata: Metadata = {
    title: 'Privacybeleid | Chanan Trading',
    description: 'Privacybeleid voor Chanan Trading website',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  }

  return generatePageMetadata(
    baseMetadata,
    '/nl/privacy-policy',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
}


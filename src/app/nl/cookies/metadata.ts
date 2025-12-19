import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata: Metadata = {
    title: 'Cookiebeleid | Chanan Trading',
    description: 'Cookiebeleid voor Chanan Trading website',
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
    '/nl/cookies',
    'https://www.nibmvb.eu',
    ['en', 'nl', 'de']
  )
}


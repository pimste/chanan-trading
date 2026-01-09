import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata: Metadata = {
    title: 'Cookie-Richtlinie | Chanan Trading',
    description: 'Cookie-Richtlinie für Chanan Trading Website',
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
    '/de/cookies',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
}


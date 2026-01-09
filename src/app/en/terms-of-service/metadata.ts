import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata: Metadata = {
    title: 'Terms of Service | Chanan Trading',
    description: 'Terms of Service for Chanan Trading website',
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
    '/en/terms-of-service',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
}


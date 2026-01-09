import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  // Define base metadata for this specific page
  const baseMetadata: Metadata = {
    title: 'Über Uns | Chanan Trading - Ihr Zuverlässiger Turmkran Partner Seit 2015',
    description: 'Erfahren Sie mehr über Chanan Trading, Ihren zuverlässigen Partner für Verkauf und Service von Turmkranen seit 2015. Mit Büros in den Niederlanden und Israel bieten wir fachkundige Turmkranlösungen. Entdecken Sie unsere Geschichte, Mission und unser Engagement für Exzellenz.',
    openGraph: {
      title: 'Über Chanan Trading - Ihr Zuverlässiger Partner Seit 2015',
      description: 'Ihr zuverlässiger Partner für Verkauf und Service von Turmkranen seit 1996. Fachkundige Lösungen in ganz Europa mit Büros in den Niederlanden und Israel.',
      url: 'https://www.chanan-trading.com/de/about',
      images: [
        {
          url: 'https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp',
          width: 1200,
          height: 630,
          alt: 'Chanan Trading - Über Uns'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Über Chanan Trading - Ihr Zuverlässiger Partner Seit 2015',
      description: 'Ihr zuverlässiger Partner für Verkauf und Service von Turmkranen seit 1996. Fachkundige Lösungen in ganz Europa.',
      images: ['https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp'],
    },
  }

  // Use the utility to generate metadata with canonical URLs
  return generatePageMetadata(
    baseMetadata,
    '/de/about',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
} 
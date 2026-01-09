import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  // Define base metadata for this specific page
  const baseMetadata: Metadata = {
    title: 'Over Ons | Chanan Trading - Uw Betrouwbare Torenkraan Partner Sinds 2015',
    description: 'Leer over Chanan Trading, uw betrouwbare partner voor verkoop en diensten van torenkranen sinds 2015. Met kantoren in Nederland en Israël bieden wij deskundige torenkraanoplossingen. Ontdek onze geschiedenis, missie en toewijding aan excellentie.',
    openGraph: {
      title: 'Over Chanan Trading - Uw Betrouwbare Partner Sinds 2015',
      description: 'Uw betrouwbare partner voor verkoop en diensten van torenkranen sinds 1996. Deskundige oplossingen in heel Europa met kantoren in Nederland en Israël.',
      url: 'https://www.chanan-trading.com/nl/about',
      images: [
        {
          url: 'https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp',
          width: 1200,
          height: 630,
          alt: 'Chanan Trading - Over Ons'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Over Chanan Trading - Uw Betrouwbare Partner Sinds 2015',
      description: 'Uw betrouwbare partner voor verkoop en diensten van torenkranen sinds 1996. Deskundige oplossingen in heel Europa.',
      images: ['https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp'],
    },
  }

  // Use the utility to generate metadata with canonical URLs
  return generatePageMetadata(
    baseMetadata,
    '/nl/about',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
} 
import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'
import ServicesClient from '../../en/services/ServicesClient'

// Generate metadata for this page
export const generateMetadata = async (): Promise<Metadata> => {
  // Define base metadata for services page
  const baseMetadata: Metadata = {
    title: 'Onze Diensten | Chanan Trading',
    description: 'Ontdek ons uitgebreide aanbod van torenkraandiensten inclusief verkoop, installatie, onderhoud en operatortraining.',
    openGraph: {
      title: 'Torenkraan Diensten van Chanan Trading',
      description: 'Complete torenkraanoplossingen voor uw bouwprojecten, van selectie en levering tot installatie en ondersteuning.',
      url: 'https://www.chanan-trading.com/nl/services',
      images: [
        {
          url: 'https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp',
          width: 1200,
          height: 630,
          alt: 'Chanan Trading Torenkraan Diensten - Verkoop, Verhuur, Installatie & Onderhoud'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Torenkraan Diensten van Chanan Trading',
      description: 'Complete torenkraanoplossingen voor uw bouwprojecten, van selectie en levering tot installatie en ondersteuning.',
      images: ['https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp'],
    },
  }

  // Use the utility to generate metadata with canonical URLs
  return generatePageMetadata(
    baseMetadata,
    '/nl/services',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
}

export default function Services() {
  return <ServicesClient />
} 
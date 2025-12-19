import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  // Define base metadata for this specific page
  const baseMetadata: Metadata = {
    title: 'About Us | Chanan Trading - Your Trusted Tower Crane Partner Since 2015',
    description: 'Learn about Chanan Trading, your trusted partner for tower crane sales and services since 2015. With offices in Netherlands and Israel, we provide expert tower crane solutions. Discover our history, mission, and commitment to excellence.',
    openGraph: {
      title: 'About Chanan Trading - Your Trusted Partner Since 2015',
      description: 'Your trusted partner for tower crane sales and services since 1996. Expert solutions across Europe with offices in Netherlands and Israel.',
      url: 'https://www.nibmvb.eu/en/about',
      images: [
        {
          url: 'https://www.nibmvb.eu/images/optimized/cropped-Top-page2-potain6.webp',
          width: 1200,
          height: 630,
          alt: 'Chanan Trading - About Us'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Chanan Trading - Your Trusted Partner Since 2015',
      description: 'Your trusted partner for tower crane sales and services since 1996. Expert solutions across Europe.',
      images: ['https://www.nibmvb.eu/images/optimized/cropped-Top-page2-potain6.webp'],
    },
  }

  // Use the utility to generate metadata with canonical URLs
  return generatePageMetadata(
    baseMetadata,
    '/en/about',
    'https://www.nibmvb.eu',
    ['en', 'nl', 'de']
  )
} 
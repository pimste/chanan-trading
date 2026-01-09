import { Metadata } from 'next'
import ContactClient from './ContactClient'

import { generatePageMetadata } from '../../page-metadata'

const baseMetadata: Metadata = {
  title: 'Kontakt | Chanan Trading - Experte für Turmkrane',
  description: 'Kontaktieren Sie Chanan Trading für professionelle Turmkran-Verkauf, Vermietung, Installation und Wartungsdienste. Kontaktieren Sie unser Büro in den Niederlanden unter Kruisweg 8, Nuth, oder unser Büro in Israel. Fachkundige Unterstützung für Ihre Bauprojekte.',
  openGraph: {
    title: 'Kontakt Chanan Trading - Experte für Turmkrane',
    description: 'Kontaktieren Sie unsere Turmkran-Spezialisten für Verkauf, Vermietung, Installation und Wartungsdienste. Büros in den Niederlanden und Israel.',
    url: 'https://www.chanan-trading.com/de/contact',
    images: [
      {
        url: 'https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp',
        width: 1200,
        height: 630,
        alt: 'Kontakt Chanan Trading - Professionelle Turmkran-Dienste',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt Chanan Trading - Experte für Turmkrane',
    description: 'Kontaktieren Sie unsere Turmkran-Spezialisten für professionelle Verkaufs-, Vermietungs- und Wartungsdienste.',
    images: ['https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp'],
  },
}

export const generateMetadata = async (): Promise<Metadata> => {
  return generatePageMetadata(
    baseMetadata,
    '/de/contact',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
}

export default function Contact() {
  return <ContactClient />
} 
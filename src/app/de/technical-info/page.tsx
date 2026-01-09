import { Metadata } from 'next'
import { generatePageMetadata } from '../../page-metadata'
import TechnicalInfoClient from './TechnicalInfoClient'

// Base metadata for technical-info page in de language
const baseMetadata: Metadata = {
  title: 'Technische Informationen | Turmkran Spezifikationen & Richtlinien | Chanan Trading',
  description: 'Umfassende technische Informationen, Spezifikationen und Sicherheitsrichtlinien für Turmkrane. Erfahren Sie mehr über Turmkran-Kapazitäten, Auslegerlängen, Lastdiagramme, Installationsanforderungen und bewährte Betriebspraktiken von Chanan Trading Experten.',
  openGraph: {
    title: 'Technische Informationen & Spezifikationen Turmkrane | Chanan Trading',
    description: 'Zugang zu detaillierten technischen Spezifikationen, Sicherheitsrichtlinien und Betriebsinformationen für Turmkrane. Expertenressourcen für Bauprofis.',
    url: 'https://www.chanan-trading.com/de/technical-info',
    images: [
      {
        url: 'https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp',
        width: 1200,
        height: 630,
        alt: 'Technische Informationen und Spezifikationen Turmkrane',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technische Informationen & Spezifikationen Turmkrane | Chanan Trading',
    description: 'Umfassende technische Informationen und Spezifikationen für Turmkrane. Expertenressourcen für Bauprofis.',
    images: ['https://www.chanan-trading.com/images/optimized/cropped-Top-page2-potain6.webp'],
  },
}

// Generate metadata for this page
export const generateMetadata = async () => {
  return generatePageMetadata(
    baseMetadata,
    '/de/technical-info',
    'https://www.chanan-trading.com',
    ['en', 'nl', 'de']
  )
}

export default function TechnicalInfo() {
  return <TechnicalInfoClient />
} 
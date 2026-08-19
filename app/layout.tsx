import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModalProvider } from '@/components/providers/ModalProvider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wearguard.engineering'),
  title: 'WearGuard™ | Heavy-Duty Industrial Wear Parts, Liners & Castings',
  description: 'Custom alloy metallurgy, reverse engineering from 2D/3D CAD, and small-batch manufacturing (1–10 units) for asphalt, concrete, mining, and bulk process plants.',
  keywords: [
    'Wear parts',
    'Industrial castings',
    'Asphalt plant liners',
    'High-Chrome castings',
    'Ni-Hard 4',
    'Mixer paddle arms',
    'Drum flights',
    'Chute wear plates',
    'WearGuard Heavy Wear Solutions',
    'Custom alloy wear'
  ],
  authors: [{ name: 'WearGuard Industrial Solutions' }],
  creator: 'WearGuard',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://wearguard.engineering',
    title: 'WearGuard™ | Outlast The Grind - Industrial Wear Parts & Castings',
    description: 'Custom alloy metallurgy, reverse engineering from 2D/3D CAD, and small-batch manufacturing (1–10 units) for asphalt, concrete, mining, and process plants.',
    siteName: 'WearGuard Industrial Wear Solutions',
    images: [
      {
        url: '/images/wearguard-hero-new.png',
        width: 1200,
        height: 630,
        alt: 'WearGuard Industrial Wear Components & Castings',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WearGuard™ | Industrial Wear Parts & Castings',
    description: 'Custom alloy metallurgy, reverse engineering, and small-batch wear parts for asphalt, concrete, mining, and bulk process plants.',
    images: ['/images/wearguard-hero-new.png'],
  },
  icons: {
    icon: '/images/wearguard-logo.svg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen w-full overflow-x-hidden bg-[#f4f0ea] text-[#0b192c] flex flex-col justify-between selection:bg-[#d4a340] selection:text-white font-sans antialiased">
        <ModalProvider>
          <Navbar />
          <main className="flex-1 w-full relative">
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}

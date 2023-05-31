import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'
import RootContainer from '@/components/RootContainer'
import { Heebo, Noto_Serif } from '@next/font/google'

const heebo = Heebo(
  {
    variable: "--font-heebo",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }
);

const noto_serif = Noto_Serif(
  {
    variable: "--font-noto-serif",
    subsets: ["latin"],
    weight: ["400", "700"]
  }
);

export const metadata = {
  title: 'Setara Biru | #KOSFOODPEDIA',
  description: 'Mahasiswi jurusan kimia yang suka makan, nebak komposisi masakan, jalan-jalan, dan berbagi semua hal yang enak.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${heebo.variable} ${noto_serif.variable}`}>
      <body>
        <RootContainer>
          <Navbar />
          {children}
          <Footer />
        </RootContainer>
      </body>
    </html>
  )
}

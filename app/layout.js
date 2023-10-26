import { Inter, Poppins } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import style from './page.module.css'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
    weight: ['400', '500'],
    style:['normal'],
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
  title: 'jobma',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={poppins.className}>
        <div style={{display:'flex'}}>
          <Sidebar/>
          <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
            <Header />
            <div className={style.mainBody}>
              {children}
            </div>
            <div style={{}}>
              <Footer/>
            </div>
          </div>
        </div>
        </body>
    </html>
  )
}

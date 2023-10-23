import Image from 'next/image'
import styles from './page.module.css'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'

export default function Home() {
  return (
    <main style={{display:'flex'}}>  
      <Sidebar/>
      <Header />
    </main>
  )
}

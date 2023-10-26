import Header from './Components/Header'
import Footer from './Components/Footer'
import style from './page.module.css'


export default function Home() {
  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
      <Header name="Home" />
      <div  className={style.mainBody}>
        Home
      </div>
      <Footer/>
    </div>
  )
}

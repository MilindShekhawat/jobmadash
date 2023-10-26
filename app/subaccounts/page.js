import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import style from '../page.module.css'

export default function page() {
  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
    <Header name="Sub Accounts" />
      <div className={style.mainBody}>
        Sub Accounts
      </div>
    <Footer/>
  </div>
  )
}

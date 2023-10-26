'use client'
import React from 'react'
import style from '../page.module.css'
import collapseSidebar from './Sidebar'
import Image from 'next/image'
import link from '../img/link.png'
import notif from '../img/notif.png'
import setting from '../img/setting.png'
import flag from '../img/flag.png'
import user from '../img/user.png'
import search from '../img/search.png'
import Link from 'next/link'
import HeaderItems from './HeaderItems'

export default function Header(prop) {
  const headerItems = [
    {
      image: notif,
      tooltip: 'Notification',
    },
    {
      image: link,
      tooltip: 'Quick Links',
    },
    {
      image: flag,
      tooltip: 'Language',
    },
    {
      image: setting,
      tooltip: 'Settings',
    },
    {
      image: user,
      tooltip: 'Account',
      background:'#e4f2c7'
    },
  ]
  return (
    <nav className={style.header}> 
      <div className={style.headerLeft}>
        <div className={style.headerButton}>
          {/* <button  onClick={collapseSidebar}>
            {isCollapsed ? "<" : ">"}
          </button> */}
        </div>
        <div className={style.headerTitle}>
          <span style={{fontSize:'18.4px', fontWeight:'500', color:'#000000', paddingRight:'10px'}}>{prop.name}</span>
        </div>
      </div>
      <div className={style.headerRight}>
        <form className={style.search}>
          <input type="text" placeholder='Search here...' style={{height:'100%', padding:'8px 22px'}}/>
          <button style={{display:'flex', height:'100%', width:'64px', color:'#666666', alignItems:'center', justifyContent:'center'}}>
            <Image src={search} height={20} width={20} alt='search button'/>
          </button>
        </form>
        {
          headerItems.map((item, index) => (
            <HeaderItems key={index} item={item} />
          ))
        }
      </div>
    </nav>
  )
}

import React from 'react'
import Image from 'next/image'
import style from '../page.module.css'
import brief from '../img/briefcase.png'

export default function SidebarItem(sideBar) {
  return (
    <div className={style.sidebarItem}>
      <span className={style.sidebarItemIcon}>
        <Image src={brief} width={20} height={20} alt='image not found'/>
      </span>
    <span className={style.sideBarItemName}>{sideBar.name}</span>
    <span className={style.sidebarItemButton}>v</span>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import style from '../page.module.css'
import brief from '../img/briefcase.png'
import Link from 'next/link'

export default function SidebarItem(sidebar) {
  return (
    <Link href={sidebar.link} className={style.sidebarItem}>
      <span className={style.itemIcon}>
        <Image src={brief} width={20} height={20} alt='image not found'/>
      </span>
    <span className={style.itemName}>{sidebar.itemName}</span>
    <span className={style.itemButton}>v</span>
    </Link>
  )
}

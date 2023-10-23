import React from 'react'
import Image from 'next/image'
import style from '../page.module.css'
import brief from '../img/briefcase.png'

export default function SidebarItem(bottomBar) {
  return (
      <div className={style.bottomListItem} style={{background:`${bottomBar.bg}`, border:`${bottomBar.brdr}`}}>
        <div>
          <Image src={brief} width={18} height={18} style={{borderRadius:'5px'}}alt="Welcome" />
        </div>
        <span style={{marginLeft:'12px', fontSize:'12px'}}>{bottomBar.itemName}</span>
      </div>
  )
}

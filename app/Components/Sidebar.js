'use client'
import React, { useState } from 'react'
import style from '../page.module.css'
import SidebarItem from './SidebarItem'
import Image from 'next/image'
import welcome from '../img/welcome.png'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log(isCollapsed);
  return (
    <div className={style.sidebarWrapper}>  
      <aside className={isCollapsed ? style.sidebarCollapsed: style.sidebar}>
      <button className={style.sidebarButton} onClick={() => setIsCollapsed((prev) => !prev)}>
        {isCollapsed ? "<" : ">"}
      </button>
        <div>
          <div className={style.sidebarTop}>
            <Image src={welcome} width={70} height={70} style={{borderRadius:'5px'}}alt="Welcome" />
            <div>
              <span style={{ display:'block', fontSize:'15px', fontWeight:'500'}}>Welcome!</span>
              <span>Jobma Llc</span>
            </div>
          </div>
          <ul className={style.sidebarList}>
            <SidebarItem name='Positions'/>
            <SidebarItem name='Setup Interview'/>
            <SidebarItem name='Applicants'/>
            <SidebarItem name='Sub Accounts'/>
            <SidebarItem name='Reports'/>
            <SidebarItem name='Integrations'/>
            <SidebarItem name='Billing'/>
          </ul>
        </div>
      </aside>
    </div>
  )
}
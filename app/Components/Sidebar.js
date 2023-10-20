'use client'
import React, { useState } from 'react'
import style from '../page.module.css'
import SidebarItem from './SidebarItem'
import Image from 'next/image'
import brief from '../img/briefcase.png'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function collapseClick() {
    console.log("Clicked", setIsCollapsed());
    setIsCollapsed((prev) => !prev)
  }

  return (
    <div className={style.sidebarWrapper}>  
      <aside className={`${isCollapsed} ? ${style.sidebarCollapsed} : ${style.sidebar}`}>
      <button className={style.sidebarButton} onClick={() => collapseClick()}>
       &lt;=
      </button>
        <div>
          <div className={style.sidebarTop}>
            <div style={{height:'60px', width:'60px', background:'#707095'}}>

            </div>
            <div>
              <h2>Welcome!</h2>
              <span>Jobma Inc</span>
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